import winston from "winston";
import { loggerConfig } from "./config/loger-transport";

const logger = winston.createLogger({
  ...loggerConfig
});

export default logger;