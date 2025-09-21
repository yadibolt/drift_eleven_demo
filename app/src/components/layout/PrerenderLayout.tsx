import { Outlet } from "react-router-dom";
import { useEnsureToken } from "../../@hooks/token/use-token.hook";

export default function PrerenderLayout() {
  console.log("PrerenderLayout is mounting!");

  const { isLoading, error } = useEnsureToken();

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
