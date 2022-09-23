import { NavLink } from "react-router-dom";

import links from "../utils/links";
import styled from "styled-components";

const SideNavigation = () => {
  return (
    <Wrapper>
      <div className="side-nav-container">
        <ul className="side-nav-links">
          {links.map((link) => {
            const { id, title, path } = link;
            return (
              <NavLink key={id} to={path}>
                {title}
              </NavLink>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default SideNavigation;
