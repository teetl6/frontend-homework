import DropdownMenuCompanies from "./DropdownMenuCompanies";
import DropdownMenuLinks from "./DropdownMenuLinks";
const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <DropdownMenuCompanies />
      <DropdownMenuLinks />
    </div>
  );
};

export default DropdownMenu;
