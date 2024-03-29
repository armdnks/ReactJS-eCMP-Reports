import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineLogout } from "react-icons/ai";

import useAuthContext from "../../context/actions/auth-context";
import links from "../../utils/links";
import styled from "styled-components";

const SideNavigation = () => {
  const location = useLocation();

  const { logoutUser } = useAuthContext();

  return (
    <Wrapper>
      <div className="side-nav-container">
        <div className="side-nav-header">
          <button className="side-nav-toggle-btn">
            <AiOutlineMenu />
          </button>
        </div>

        <ul className="side-nav-links">
          {links.map((link) => {
            const { id, title, path, icon } = link;
            return (
              <NavLink
                key={id}
                to={path}
                className={
                  path === location.pathname
                    ? "side-nav-item side-nav-item-active"
                    : "side-nav-item side-nav-item-inactive"
                }
              >
                <span className="side-nav-item-icon">{icon}</span>
                <p className="side-nav-item-title">{title}</p>
              </NavLink>
            );
          })}
        </ul>

        <div className="side-nav-footer">
          <button onClick={logoutUser} className="side-nav-item">
            <span className="side-nav-item-icon">
              <AiOutlineLogout />
            </span>
            <p className="side-nav-item-title">logout</p>
          </button>

          <p className="side-nav-footer-version">
            <strong>eCMP reports</strong> version 1.0.0
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 480px;
  height: 100vh;
  position: sticky;
  top: 0;
  right: 0;

  @media (max-width: 900px) {
    & {
      display: none;
    }
  }

  .side-nav-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1.5rem;
  }

  .side-nav-header,
  .side-nav-footer {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .side-nav-footer-version {
    width: 100%;
    text-align: center;
  }

  .side-nav-toggle-btn {
    font-size: 2.5rem;
    color: var(--color-primary-main);
  }

  .side-nav-links {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .side-nav-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    padding: 1rem 1.25rem;
    color: var(--color-gray-main);
    border-radius: 0.25rem;
    transition: all 0.25s ease;
  }

  .side-nav-item:hover {
    transform: translateX(-3%);
  }

  .side-nav-item:hover:not(.side-nav-item-active) {
    box-shadow: inset 0 0 0 0.2rem var(--color-primary-light);
  }

  .side-nav-item-icon {
    width: 35px;
    height: 35px;
    font-size: 1.75rem;
    color: var(--color-primary-main);
  }

  .side-nav-item-title {
    text-transform: capitalize;
    font-size: 1.25rem;
  }

  .side-nav-item-active {
    color: var(--color-white);
    background: linear-gradient(
      90deg,
      var(--color-primary-light),
      var(--color-primary-main)
    );
  }

  .side-nav-item-active .side-nav-item-icon {
    color: var(--color-white);
  }

  .side-nav-item-inactive {
    background: none;
  }

  .side-nav-footer-version {
    color: var(--color-gray-light);
  }
`;

export default SideNavigation;
