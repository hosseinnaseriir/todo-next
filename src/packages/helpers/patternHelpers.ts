const PATTERNS = {
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const createRegex = (type: string) => PATTERNS[type];
