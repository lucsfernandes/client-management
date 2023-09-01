import { MongooseConnectorService } from "../../infra/services/MongooseConnectorService";
import env from "../config/env";

const implMongooseService = new MongooseConnectorService(env.mongoConnection);

export { implMongooseService };