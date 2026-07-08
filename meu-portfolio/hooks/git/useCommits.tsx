// hooks/useCommits.ts

import { useQuery } from "@tanstack/react-query";
import { getCommits } from "@/service/github.service";

export function useCommits() {
  return useQuery({
    queryKey: ["github-commits"],
    queryFn: getCommits,
  });
}
