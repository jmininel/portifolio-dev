const BASE_URL = "https://api.github.com";

const OWNER = "jmininel";

// Lista dos repos que você quer no carousel
const SELECTED_REPOS = [
  "naildesigner-landingpage",
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
  gifUrl?: string | null;
};

type GitHubRepo = Repo & {
  default_branch: string;
};

type ReadmeResponse = {
  content: string;
  encoding: string;
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

// Busca o GIF dentro da seção "## Preview" do README
async function getRepoGif(
  repo: GitHubRepo
): Promise<string | null> {
  try {
    const readme = await fetchGitHub<ReadmeResponse>(
      `/repos/${OWNER}/${repo.name}/readme`
    );

    // O README vem codificado em Base64
    const content = Buffer.from(
      readme.content,
      "base64"
    ).toString("utf-8");

    // Procura a seção "## Preview"
    const previewSection = content.match(
      /^##\s+Preview\s*$([\s\S]*?)(?=^##\s|\z)/im
    )?.[1];

    if (!previewSection) {
      return null;
    }

    // Procura uma imagem GIF dentro da seção Preview
    const gifMatch = previewSection.match(
      /!\[[^\]]*\]\(([^)\s]+\.gif(?:\?[^)]*)?)\)/i
    );

    if (!gifMatch) {
      return null;
    }

    // Exemplos:
    // ./public/petRegistration.gif
    // public/gallery/NailDesign.gif
    const gifPath = gifMatch[1];

    // Remove "./" do início do caminho
    const cleanPath = gifPath.replace(/^\.?\//, "");

    // Monta a URL final do GIF
    return `https://raw.githubusercontent.com/${OWNER}/${repo.name}/${repo.default_branch}/${cleanPath}`;
  } catch {
    return null;
  }
}

// Pega múltiplos repos específicos
export async function getSelectedRepos(): Promise<Repo[]> {
  const repos = await Promise.all(
    SELECTED_REPOS.map((repo) =>
      fetchGitHub<GitHubRepo>(
        `/repos/${OWNER}/${repo}`
      )
    )
  );

  // Busca o GIF de cada projeto
  const reposWithGif = await Promise.all(
    repos.map(async (repo) => ({
      ...repo,
      gifUrl: await getRepoGif(repo),
    }))
  );

  return reposWithGif;
}

