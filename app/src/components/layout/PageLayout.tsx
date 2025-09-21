import { useLoaderData } from "react-router-dom";
import type { IBundleJsonResponse } from "../../@interfaces/layout/bundle.interface";
import { authService } from "../../services/auth/auth.service";
import Menu from "../temporary/Menu";

export default function PageLayout() {
  const { loggedIn } = authService.getState();

  const bundleData = useLoaderData() as IBundleJsonResponse;

  console.log("loggedIn", loggedIn, bundleData);

  return (
    <div>
      PageLayout
      <Menu menu={bundleData} />
    </div>
  );
}
