import { Link } from "react-router-dom";
import type { IBundleJsonResponse } from "../../@interfaces/layout/bundle.interface";

export default function Header({ bundle }: { bundle: IBundleJsonResponse }) {
  return (
    <div>
      {bundle.data.menu.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
      <Link to={'/mycreative/good/alias/123_ensk'}>Node Page</Link>
      <Link to={'/aintnobodyelseinvited/butilikeit'}>Taxonomy Page</Link>
      <Link to={'/'}>Homepage</Link>
      <Link to={'/test'}>Test</Link>
    </div>
  );
}
