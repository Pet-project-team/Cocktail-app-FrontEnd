import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderLink({
  linkName,
  linkPath,
  hasHandle,
  handleClick,
}) {
  return (
    <li className="nav_el flex p-0 text-[20px]">
      <NavLink
        className={({ isActive }) =>
          "flex items-center " +
          "text-primary-text no-underline font-normal hover:text-highlighted " +
          "h-[64px] leading-[22px] border-y-2 border-transparent " +
          "transition-all duration-300 " +
          (isActive ? "border-b-highlighted text-highlighted" : "")
        }
        to={linkPath}
        onClick={hasHandle && (() => handleClick)}
      >
        {linkName}
      </NavLink>
    </li>
  );
}
