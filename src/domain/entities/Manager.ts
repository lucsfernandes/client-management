import { ManagerAddress } from "./manager/ManagerAddress";
import { ManagerProfile } from "./manager/ManagerProfile";

export interface Manager {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  address: ManagerAddress;
  profile: ManagerProfile;
  createdAt?: Date;
  updatedAt?: Date;
}