export const GetMemberData = async (dataType: string) => {
  const data = await fetch(`https://backend.gdscdju.dev/api/v1/${dataType}`);
  const memberData = data.json();
  return memberData;
};
