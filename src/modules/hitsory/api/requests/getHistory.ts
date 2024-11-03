import type { IHistoryData } from "@modules/hitsory/types";

import { api } from "@shared/api/instance";

interface IGetHistoryResponse extends IBaseResponse {
  data: IHistoryData[];
}

export const getHistory = ({ config }: RequestConfig) =>
  api.get<IGetHistoryResponse>("/history", config);
