import React from "react";

function DropdownMenuActions() {
  return (
    <div>
      <ul className="actions">
        <li className="link">
          <a href="#">
            <i className="material-icons-outlined nav__link-icon">
              phone_iphone
            </i>
            Get the mobile app
          </a>
        </li>
        <li className="link">
          <a href="#">
            <i className="material-icons-outlined nav__link-icon">people</i>
            Community
          </a>
        </li>
        <li className="link">
          <a href="#">
            <i className="material-icons-outlined nav__link-icon">book</i>
            Knowledge base
          </a>
        </li>
      </ul>
    </div>
  );
}

export default DropdownMenuActions;
