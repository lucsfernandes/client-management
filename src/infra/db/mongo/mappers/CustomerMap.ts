import { PaginateResult } from "mongoose";
import { PaginatedResponse } from "../../../../domain/entities/PaginatedResponse"

const toDomain = (model: any) => {

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

export default { toDomain, toPaginatedDomain, toEmptyPagination }