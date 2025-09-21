export interface IBundleJsonResponse {
  message: string;
  error: boolean;
  timestamp: number;
  data: IBundleJsonResponseData;
}

interface IBundleJsonResponseData {
  menu: IBundleJsonResponseDataMenuItem[];
}

interface IBundleJsonResponseDataMenuItem {
  title: string;
  url: string;
  id: string;
  weight: number | string;
  children: IBundleJsonResponseDataMenuItem[] | null;
}
