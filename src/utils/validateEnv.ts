import { cleanEnv, str, num } from "envalid";

const getEnvVars = (): EnvObject => {
  const EnvVars = cleanEnv(process.env, {
    NODE_ENV: str({ default: "development" }),
    PORT: num({ default: 8888 }),
  });

  return EnvVars as EnvObject;
};

export const EnvVars = getEnvVars();
