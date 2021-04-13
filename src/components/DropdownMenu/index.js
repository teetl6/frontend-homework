import DropdownMenuActions from './DropdownMenuActions'
import DropdownMenuCompanies from './DropdownMenuCompanies'
import DropdownMenuLinks from './DropdownMenuLinks'
const DropdownMenu = () => {
  return (
    <div className="dropdown-menu">
      <DropdownMenuCompanies />
      <DropdownMenuLinks />
      <DropdownMenuActions />
    </div>
  )
}

export default DropdownMenu
