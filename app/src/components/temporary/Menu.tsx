import type { IBundleJsonResponse } from "../../@interfaces/layout/bundle.interface";

export default function Menu({ menu }: { menu: IBundleJsonResponse }) {
  return (
    <div>
      {menu.data.menu.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
