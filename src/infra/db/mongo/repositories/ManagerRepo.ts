import { IManagerRepo } from "../../../../application/usecases/managers/IManagerRepo";
import { Manager } from "../../../../domain/entities/Manager";
import { MongooseConnectorService } from "../../../services/MongooseConnectorService";
import ManagerMap from "../mappers/ManagerMap";
import { ManagerModel } from "../models/manager/ManagerModel";

export class ManagerRepo implements IManagerRepo {
  constructor(private service: MongooseConnectorService) { }
  
  async findById(id: string): Promise<Manager | null> {
    await this.service.getConnection();
    
    const response = await ManagerModel.findById(id);
    if (!response) return null;
    return ManagerMap.toDomain(response);
  }
}