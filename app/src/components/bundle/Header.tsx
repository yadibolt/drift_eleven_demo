import type { IBundleJsonResponse } from "../../@interfaces/layout/bundle.interface";

export default function Header({ bundle }: { bundle: IBundleJsonResponse }) {
  return (
    <div>
      {bundle.data.menu.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}
