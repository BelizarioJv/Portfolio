// services/github.service.ts

import { github } from "@/service/apiGit";
import { Commit } from "@/types/Git";

export async function getCommits() {
  const { data } = await github.get<Commit[]>(
    "/repos/BelizarioJv/Projeto-Senzalas-Bar/commits",
  );

  return data;
}
