import { Navigate } from "react-router-dom";
import { useAuthentication } from "../../@hooks/token/use-token.hook";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isLoading, error } = useAuthentication();

  if (isLoading) {
    return <></>;
  }

  if (error) {
    return <Navigate to="/404" replace />;
  }

  return <>{children}</>;
}
