import { useQuery } from "@tanstack/react-query";

import type { THistoryByUidConfig } from "../requests/gethistoryByUid";
import { getHistoryByUid } from "../requests/gethistoryByUid";

export const useGetHistoryByUidQuery = ({ config, params }: THistoryByUidConfig) =>
  useQuery({
    queryKey: ["getHistoryByUid"],
    queryFn: () => getHistoryByUid({ config, params })
  });
