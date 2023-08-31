import mongoose, { Mongoose } from "mongoose";
import mongooseConfig from "../../main/config/mongooseConfig";

export class MongooseConnectorService {
  private connection: Mongoose;
  constructor(private mongoDbHost: string) {
    this.connection = null as any;
  }

  async getConnection(): Promise<Mongoose> {
    if (this.connection === null) await this.connect();
    return this.connection;
  }

  private async connect() {
    this.connection = await mongoose.connect(this.mongoDbHost, mongooseConfig);
  }

  public async close(): Promise<void> {
    if (this.connection !== null) await mongoose.connection.close();
  }

}