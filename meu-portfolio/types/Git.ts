// types/github.ts

//Tipagem Repositorio do GitHub
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
  };
  // você pode adicionar mais campos conforme necessário
}

//Tipagem Commits do GitHub
export interface Commit {
  sha: string;

  commit: {
    message: string;

    author: {
      name: string;
      date: string;
    };
  };

  html_url: string;
}
