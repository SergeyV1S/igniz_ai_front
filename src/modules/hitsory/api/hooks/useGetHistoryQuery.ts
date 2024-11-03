import { useQuery } from "@tanstack/react-query";

import { getHistory } from "../requests/getHistory";

export const useGetHistoryQuery = ({ config }: QuerySettings<typeof getHistory>) =>
  useQuery({
    queryKey: ["getHistory"],
    queryFn: () => getHistory({ config })
  });
