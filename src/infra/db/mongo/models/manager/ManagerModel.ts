import mongoose from "mongoose";
import { ManagerAddressSchema } from "./schemas/ManagerAddressSchema";
import { ManagerProfileSchema } from "./schemas/ManagerProfileSchema";
import { paginate } from "mongoose-paginate-v2";
import { ManagerAddress } from "../../../../../domain/entities/manager/ManagerAddress";
import { ManagerProfile } from "../../../../../domain/entities/manager/ManagerProfile";

export interface IManagerSchema {
  _id: mongoose.Types.ObjectId;
  fullName: string;
  phone: string;
  email: string;
  address: ManagerAddress;
  profile: ManagerProfile;
  createdAt?: Date;
  updatedAt?: Date;
}

const ManagerSchema = new mongoose.Schema({
  fullName: {
    type: String
  },

  phone: {
    type: String
  },

  email: {
    type: String
  },

  address: ManagerAddressSchema,

  profile: ManagerProfileSchema,

}, { timestamps: true, toObject: { virtuals: true }, toJSON: { virtuals: true } });

const ManagerModel = mongoose.model<IManagerSchema>("managers", ManagerSchema);

export { ManagerModel };