import { PaginateResult } from "mongoose";
import { PaginatedResponse } from "../../../../domain/entities/PaginatedResponse"
import { IManagerSchema } from "../models/manager/ManagerModel";
import { Manager } from "../../../../domain/entities/Manager";
import { arrayBuffer } from "stream/consumers";

const toDomain = (model: IManagerSchema): Manager => ({
  id: model._id.toString(),
  fullName: model.fullName,
  phone: model.phone,
  email: model.email,
  address: model.address,
  profile: model.profile,
  createdAt: model.createdAt,
  updatedAt: model.updatedAt,
});

const toArrayDomain = (array: Array<IManagerSchema>): Array<Manager> => {
  return array.map((model: IManagerSchema) => toDomain(model));
}

const toPaginatedDomain = (paginateModel: PaginateResult<any>): PaginatedResponse<any> => ({
  metadata: {
    totalItems: paginateModel.totalDocs,
    totalPages: paginateModel.totalPages,
    itemsPerPage: paginateModel.limit,
    page: paginateModel.page ?? 1
  },
  data: paginateModel.docs.map(item => toDomain(item))
});

const toEmptyPagination = (): PaginatedResponse<any> => {
  return {
    data: [],
    metadata: {
      totalItems: 0,
      totalPages: 0,
      itemsPerPage: 0,
      page: 0
    }
  };
};

export default { toDomain, toArrayDomain, toPaginatedDomain, toEmptyPagination }