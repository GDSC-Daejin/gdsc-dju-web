# gdsc-dju-web

GDSC Daejin Univ. 에서 관리되는 서비스의 모노레포입니다.

<!-- [Notion](https://excessive-cheddar-885.notion.site/GDSC-DJU-WebService-90f5f4d029414777a982623fb240db04) -->

[GDSC DJU WEB](https://gdscdju.dev) 소개사이트

[GDSC DJU SHARED](https://shared.gdsc-dju.com) 이벤트 사이트

[GDSC DJU BLOG](https://blog.gdsc-dju.com) 기술 블로그(개발중)

[GDSC DJU HEY TEDDY](https://teddy.gdsc-dju.com) 칭찬 시스템

[GDSC DJU DESIGN SYSTEM](https://design.gdsc-dju.com) 디자인 시스템

## Git Flow / Commit convention rule

### Branch Rule

master과 develop을 제외한 다른 브랜치는 도메인 별로 다른 브랜치를 사용합니다.

- master - 메인 브랜치

- feature - 새로운 기능 브랜치

- refactor - 코드 리팩토링

- hotfix - 급한 경우만 사용하는 브랜치

feature/`프로젝트 이름`/`issue번호`-`기능이름`

ex) feature/gdsc-dju-web/29-navigation

### Commit convention rule

- feat : 새로운 기능에 대한 커밋
- fix : 버그 수정에 대한 커밋
- build : 빌드 관련 파일 수정에 대한 커밋
- chore : 그 외 자잘한 수정에 대한 커밋
- ci : CI관련 설정 수정에 대한 커밋
- docs : 문서 수정에 대한 커밋
- style : 코드 스타일 혹은 포맷 등에 관한 커밋
- refactor : 코드 리팩토링에 대한 커밋
- test : 테스트 코드 수정에 대한 커밋

## Getting started

```bash
# using bun
bun install
bun run dev

# using pnpm
pnpm install
pnpm run dev
```

### Featured Sliced Design

- [참고자료](https://dev.to/m_midas/feature-sliced-design-the-best-frontend-architecture-4noj)
- [코드자료](https://github.com/falkomerr/falkchat)
- [코드자료1](https://github.com/Shiyan7/kinomore-v2)
