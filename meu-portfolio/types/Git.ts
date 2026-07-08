// types/github.ts

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
