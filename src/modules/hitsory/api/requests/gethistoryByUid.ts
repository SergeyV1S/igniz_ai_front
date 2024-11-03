import type { IHistoryData } from "@modules/hitsory/types";

import { api } from "@shared/api/instance";

interface IGetHistoryByUidParams {
  uid: string;
}

export type THistoryByUidConfig = RequestConfig<IGetHistoryByUidParams>;

export const getHistoryByUid = ({ config, params }: THistoryByUidConfig) =>
  api.get<IHistoryData>(`/history/${params.uid}`, config);
