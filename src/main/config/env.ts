import dotenv from "dotenv-safe";

dotenv.config({
  allowEmptyValues: true
});

const env = {
  appName: process.env.npm_package_name,
  appVersion: process.env.npm_package_version,
  appDescription: process.env.npm_package_description,
  serverPort: process.env.API_PORT || "3000",
  mongoConnection: process.env.MONGO_CONNECTION as string,
  nodeEnv: process.env.NODE_ENV as string
};

export default env;