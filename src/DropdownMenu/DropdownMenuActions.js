import React from "react";

function DropdownMenuActions() {
  return (
    <div>
      <ul className="actions">
        <li className="link">
          <a href="/">
            <i className="material-icons-outlined nav__link-icon">settings</i>
            Settings
          </a>
        </li>
        <li className="link">
          <a href="/">
            <i className="material-icons-outlined nav__link-icon">logout</i>
            Log out
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenuActions;
