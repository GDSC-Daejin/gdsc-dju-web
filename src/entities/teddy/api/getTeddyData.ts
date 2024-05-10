export const GetTeddyData = async (dataType: string) => {
  const getTeddyData =
    await fetch(`https://backend.gdscdju.dev/api/v1/teddy/scoreboard/${dataType}/from
  `);
  const data = getTeddyData.json();
  return data;
};
