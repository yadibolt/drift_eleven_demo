import { useEnsureToken } from "../../@hooks/token/use-token.hook";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isLoading, error } = useEnsureToken();

  if (isLoading) {
    return <div>Initializing app...</div>;
  }

  if (error) {
    return <div>Error initializing app: {error.message}</div>;
  }

  return <>{children}</>;
}
