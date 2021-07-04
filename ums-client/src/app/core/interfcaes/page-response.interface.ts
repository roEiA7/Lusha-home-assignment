export interface IPageResponse<T> {
    docs: T[];
    hasNextPage: boolean;
    hasPrevPage: boolean;
    limit: number;
    nextPage: any;
    page: number;
    pagingCounter: number;
    prevPage: any;
    totalDocs: number;
    totalPages: number;
}