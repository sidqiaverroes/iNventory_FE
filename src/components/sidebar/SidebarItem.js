import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";

const activeLink = ({ isActive }) => (isActive ? "active" : "link");
const activeSublink = ({ isActive }) => (isActive ? "active" : "link");

const SidebarItem = ({ item, isOpen }) => {
  const [expandMenu, setExpandMenu] = useState(false);

  if (item.childrens) {
    return (
      <div className={expandMenu ? "sidebar-item open" : "sidebar-item"}>
        <div
          className="sidebar-title"
          onClick={() => setExpandMenu(!expandMenu)}
        >
          <span>
            {item.icon && <div className="icon">{item.icon}</div>}
            {isOpen && <div>{item.title}</div>}
          </span>
          <MdKeyboardArrowRight size={24} className="arrow-icon" />
        </div>
        <div className="sidebar-content">
          {item.childrens.map((child, index) => {
            return (
              <div key={index} className="s-child">
                <NavLink to={child.path} className={activeSublink}>
                  <div className="sidebar-item">
                    <div className="sidebar-title">
                      <span>
                        {child.icon && <div className="icon">{child.icon}</div>}
                        {isOpen && <div>{child.title}</div>}
                      </span>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <NavLink to={item.path} className={activeLink}>
        <div className="sidebar-item s-parent">
          <div className="sidebar-title">
            <span>
              {item.icon && <div className="icon">{item.icon}</div>}
              {isOpen && <div>{item.title}</div>}
            </span>
          </div>
        </div>
      </NavLink>
    );
  }
};

export default SidebarItem;
