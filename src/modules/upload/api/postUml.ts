import { api } from "@shared/api/instance";

export interface IPostUmlResponse {
  success: boolean;
  message: string;
  data: {
    summary: string;
    plantuml_code: string;
  };
}

export type PostUmlConfig = RequestConfig & { formData: FormData };

export const postUml = ({ config, formData }: PostUmlConfig) =>
  api.post<IPostUmlResponse>("/file_for_text_extract", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    },
    ...config
  });
