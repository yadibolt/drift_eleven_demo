export interface ILogoutJsonResponse {
  actionId: string;
  message: string;
  error: boolean;
  timestamp: number;
  data: ILogoutJsonData;
}

interface ILogoutJsonData {
  accessToken: string;
}
