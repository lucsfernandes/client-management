
import app from "./config/app";
import env from "./config/env";
import logger from "./logger";

app.listen(parseInt(env.serverPort), () => logger.info(`Server up and running on port ${env.serverPort}`));