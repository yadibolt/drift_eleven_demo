export interface IContentJsonResponse {
  message: string;
  error: boolean;
  timestamp: number;
  data: IContentJsonResponseData;
}

interface IContentJsonResponseData {
  fields: Record<string, unknown>;
}
