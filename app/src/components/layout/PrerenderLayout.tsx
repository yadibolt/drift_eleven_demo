import { Outlet } from "react-router-dom";
import { useAuthentication } from "../../@hooks/token/use-token.hook";

export default function PrerenderLayout() {
  const { isLoading, error } = useAuthentication();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading token</div>;
  }

  return (
    <div className="prerender-layout">
      <Outlet />
    </div>
  );
}
