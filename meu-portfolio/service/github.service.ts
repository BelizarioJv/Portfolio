// services/github.service.ts

import { github } from "@/service/apiGit";
import { Commit } from "@/types/Git";

export async function getRepo() {
  const { data } = await github.get("/repos/BelizarioJv/Projeto-Senzalas-Bar");

  console.log(data);
  return data;
}

export async function getCommits() {
  const { data } = await github.get<Commit[]>(
    "/repos/BelizarioJv/Projeto-Senzalas-Bar/commits",
  );

  return data;
}
