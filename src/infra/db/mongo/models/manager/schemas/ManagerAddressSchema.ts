import { Schema } from "mongoose";

const ManagerAddressSchema = new Schema({
  zipCode: {
    type: String
  },
  address: {
    type: String
  },
  number: {
    type: String
  },
  complement: {
    type: String
  }
}, { _id: false });

export { ManagerAddressSchema };