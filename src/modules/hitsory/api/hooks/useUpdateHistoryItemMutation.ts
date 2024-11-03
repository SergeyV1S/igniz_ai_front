import { useMutation } from "@tanstack/react-query";

import { putUpdateHistoryItem } from "../requests/putUpdateHistoryItem";

export const useUpdateHistoryItemMutation = (
  settings?: MutationSettings<
    Parameters<typeof putUpdateHistoryItem>[0],
    typeof putUpdateHistoryItem
  >
) =>
  useMutation({
    mutationKey: ["putUpdateHistoryItem"],
    mutationFn: (params: Parameters<typeof putUpdateHistoryItem>[0]) =>
      putUpdateHistoryItem({
        ...params,
        ...(params?.config && { config: params.config })
      }),
    ...settings?.options
  });
