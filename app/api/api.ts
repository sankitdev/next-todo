export const getProfile = async () => {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  console.log(data.results);
  return data.results;
};
