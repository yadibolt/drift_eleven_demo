export interface ITokenJsonResponse {
  message: string;
  error: boolean;
  timestamp: number;
  data: ITokenJsonResponseData;
}

interface ITokenJsonResponseData {
  accessToken: string;
}
