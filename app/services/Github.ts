const BASE_URL = "https://api.github.com";

const OWNER = "jmininel";

// 👇 lista dos repos que você quer no carousel
const SELECTED_REPOS = [
  "pet-registration-form",
  "ecommerce-bewear-bootcamp",
  "market-cart",
  "barber-shop",  
];

export type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  homepage?: string | null;
};

async function fetchGitHub<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  return response.json();
}

// 🔹 pega múltiplos repos específicos
export async function getSelectedRepos(): Promise<Repo[]> {
  const repos = await Promise.all(
    SELECTED_REPOS.map((repo) =>
      fetchGitHub<Repo>(`/repos/${OWNER}/${repo}`)
    )
  );

  return repos;
}