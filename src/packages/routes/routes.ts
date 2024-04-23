const lang = 'en';
export const ROUTES = {
  AUTH: {
    REGISTER: `/${lang}/auth/register`,
    LOGIN: `/${lang}/auth/login`,
  },
  TASKS: {
    HOME: `/${lang}/tasks/home`,
  },
} as const;
