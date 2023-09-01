import { Schema } from "mongoose";
import { ManagerRoleEnum } from "../../../../../../domain/enums/ManagerRoleEnum";

const ManagerProfileSchema = new Schema({
  role: {
    type: ManagerRoleEnum
  },

  profilePic: {
    type: String
  }
}, { _id: false });

export { ManagerProfileSchema };