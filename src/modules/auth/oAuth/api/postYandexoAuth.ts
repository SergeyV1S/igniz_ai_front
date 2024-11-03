import { api } from "@shared/api/instance";
import { AUTH_KEY, PATHS } from "@shared/constants";

interface PostYandexoAuthParams {
  code: string;
}

export type PostYandexoAuthConfig = RequestConfig<PostYandexoAuthParams>;

export const postYandexoAuth = async ({ params, config }: PostYandexoAuthConfig) =>
  api
    .post(`auth/oAuth`, params, config)
    .then(() => {
      localStorage.setItem(AUTH_KEY, "true");
      window.location.href = PATHS.PROFILE;
    })
    .catch((error) => {
      console.error(error);
    });
