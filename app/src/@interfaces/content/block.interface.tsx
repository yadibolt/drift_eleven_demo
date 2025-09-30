export interface IBlockJsonResponse {
  message: string;
  error: boolean;
  timestamp: number;
  data: IBlockJsonResponseData;
}

interface IBlockJsonResponseData {
  fields: Record<string, unknown>;
}
