import { api } from "@shared/api/instance";

interface IPutUpdateHistoryItemResponse {
  uid: string;
  new_plantuml_code: string;
}

export type PutUpdateHistoryItemMetaConfig = RequestConfig<IPutUpdateHistoryItemResponse>;

export const putUpdateHistoryItem = ({ params, config }: PutUpdateHistoryItemMetaConfig) =>
  api.put(`/history/${params.uid}`, { new_code: params.new_plantuml_code }, config);
