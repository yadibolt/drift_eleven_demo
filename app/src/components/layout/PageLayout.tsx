import { useLoaderData } from "react-router-dom";
import type { IBundleJsonResponse } from "../../@interfaces/layout/bundle.interface";
import Menu from "../temporary/Menu";

export default function PageLayout() {
  const bundleData = useLoaderData() as IBundleJsonResponse;

  return (
    <div>
      PageLayout
      <Menu menu={bundleData} />
    </div>
  );
}
