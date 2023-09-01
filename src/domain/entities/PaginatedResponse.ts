export interface PaginatedResponse<T> {
  data: T[];
  metadata: {
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
    page: number;
  }
}