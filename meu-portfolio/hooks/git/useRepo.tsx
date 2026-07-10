import { useQuery } from "@tanstack/react-query";
import { getRepo } from "@/service/github.service";

export function useRepo() {
  return useQuery({
    queryKey: ["github-repo"],
    queryFn: getRepo,
  });
}
