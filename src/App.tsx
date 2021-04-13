import "./stylesheets/index.scss";

import DropdownLink from "./DropdownLink";
import DropdownMenu from "./DropdownMenu";

const App = () => (
  <nav className="nav">
    <DropdownLink />
    <DropdownMenu />
  </nav>
);

export default App;
