import { useLoaderData, Outlet } from "react-router-dom";
import type { IBundleJsonResponse } from "../../@interfaces/layout/bundle.interface";
import Header from "../bundle/Header";
import Footer from "../bundle/Footer";

export default function PageLayout() {
  const bundleData = useLoaderData() as IBundleJsonResponse;

  return (
    <div className="bg-gray-950 px-8 py-12 text-white">
      <Header bundle={bundleData} />
      <Outlet />
      <Footer bundle={bundleData}/>
    </div>
  );
}
