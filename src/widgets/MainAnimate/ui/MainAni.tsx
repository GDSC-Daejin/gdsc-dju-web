'use client';

import Matter from 'matter-js';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';
import { styles } from './styles';
import stylex from '@stylexjs/stylex';
import Image from 'next/image';
import Logo from '@/shared/ui/icons/mainLogo.svg';

export const MainAni = () => {
  const { theme } = useTheme();

  const sceneRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const runnerRef = useRef<Matter.Runner | null>(null);
  const wallsRef = useRef<Matter.Body[]>([]);

  const updateBackground = (render: Matter.Render) => {
    const canvasBg = theme === 'dark' ? '#0000' : '#FFFFFF';
    render.options.background = canvasBg;
    render.canvas.style.background = canvasBg;
  };

  useEffect(() => {
    const {
      Engine,
      Render,
      Runner,
      Composites,
      Common,
      MouseConstraint,
      Mouse,
      Composite,
      Bodies,
    } = Matter;

    const engine = Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    const width = window.innerWidth;
    const height = window.innerHeight - 66;

    const render = Render.create({
      element: sceneRef.current!,
      engine: engine,
      options: {
        width: width,
        height: height,
        showAngleIndicator: false,
        wireframes: false,
      },
    });
    renderRef.current = render;

    updateBackground(render);
    Render.run(render);

    const runner = Runner.create();
    runnerRef.current = runner;
    Runner.run(runner, engine);

    const stack = Composites.stack(
      0,
      0,
      6,
      3,
      50,
      50,
      (xPosition: number, yPosition: number) => {
        const shapeType = Math.round(Common.random(0, 2));
        const size = Common.random(50, 250);
        let chamfer = null;

        if (Common.random() > 0.7) {
          chamfer = { radius: 20 };
        }

        let fillStyle = '';
        let strokeStyle = '';
        let lineWidth = 4;

        switch (shapeType) {
          case 0:
            fillStyle = '#4285F4';
            strokeStyle = '#0B5394';
            return Bodies.rectangle(xPosition, yPosition, size, size, {
              render: {
                fillStyle: fillStyle,
                strokeStyle: strokeStyle,
                lineWidth: lineWidth,
              },
            });
          case 1:
            fillStyle = '#EA4335';
            strokeStyle = '#8B0000';
            return Bodies.circle(xPosition, yPosition, size / 2, {
              render: {
                fillStyle: fillStyle,
                strokeStyle: strokeStyle,
                lineWidth: lineWidth,
              },
            });
          case 2:
            fillStyle = '#34A853';
            strokeStyle = '#0B4F17';
            return Bodies.polygon(xPosition, yPosition, 3, size, {
              render: {
                fillStyle: fillStyle,
                strokeStyle: strokeStyle,
                lineWidth: lineWidth,
              },
            });
          default:
            return Bodies.rectangle(xPosition, yPosition, size, size);
        }
      },
    );

    Composite.add(world, stack);

    const createWalls = (width: number, height: number) => [
      Bodies.rectangle(width / 2, -5, width, 10, {
        isStatic: true,
        render: { visible: false },
      }),
      Bodies.rectangle(width / 2, height + 5, width, 10, {
        isStatic: true,
        render: { visible: false },
      }),
      Bodies.rectangle(width, height / 2, 13, height, {
        isStatic: true,
        render: { visible: false },
      }),
      Bodies.rectangle(5, height / 2, 13, height, {
        isStatic: true,
        render: { visible: false },
      }),
    ];

    wallsRef.current = createWalls(width, height);
    Composite.add(world, wallsRef.current);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(world, mouseConstraint);
    render.mouse = mouse;

    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: width, y: height },
    });

    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight - 66;

      render.bounds.max.x = newWidth;
      render.bounds.max.y = newHeight;
      render.options.width = newWidth;
      render.options.height = newHeight;
      render.canvas.width = newWidth;
      render.canvas.height = newHeight;

      wallsRef.current.forEach((wall) => Composite.remove(world, wall));

      wallsRef.current = createWalls(newWidth, newHeight);
      Composite.add(world, wallsRef.current);

      Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: newWidth, y: newHeight },
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (renderRef.current) {
        Matter.Render.stop(renderRef.current);
        renderRef.current.canvas.remove();
      }
      if (runnerRef.current) {
        Matter.Runner.stop(runnerRef.current);
      }
      if (engineRef.current) {
        Matter.World.clear(engineRef.current.world, false);
        Matter.Engine.clear(engineRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (renderRef.current) {
      updateBackground(renderRef.current);
    }
  }, [theme]);

  return (
    <div ref={sceneRef} {...stylex.props(styles.container)}>
      <Image src={Logo} alt="GDSC 로고" {...stylex.props(styles.logo)} />
      <p {...stylex.props(styles.text)}>Welcome</p>
    </div>
  );
};
