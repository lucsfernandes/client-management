import { Manager } from "../../../domain/entities/Manager";

export interface IManagerRepo {
  findById(id: string): Promise<Manager | null>;
}