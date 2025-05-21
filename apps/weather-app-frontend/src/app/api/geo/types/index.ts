export type SuccessRes<T> = { data: T };
export type ErrorRes = { error: string };
export type ApiResponse<T> = Promise<SuccessRes<T> | ErrorRes>;