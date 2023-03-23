const apiUrl = import.meta.env.VITE_API_URL || "";
const accessToken = import.meta.env.VITE_GITHUB_ACCESS_TOKEN || "";

export function getUsers(key: string) {
  console.log(apiUrl);
  const params = {
    q: key,
    per_page: "5",
  };

  return fetch(`${apiUrl}?` + new URLSearchParams(params))
    .then((res) => res.json())
    .catch((err) => err);
}

export function getUserRepos(url: string) {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => err);
}
