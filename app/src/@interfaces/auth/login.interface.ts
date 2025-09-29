export interface ILoginJsonResponse {
  message: string;
  error: boolean;
  timestamp: number;
  data: ILoginJsonResponseData;
}

interface ILoginJsonResponseData {
  accessToken: string;
  refreshToken: string;
}
