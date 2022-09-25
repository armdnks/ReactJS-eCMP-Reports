import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";

import useAuthContext from "../../context/actions/auth-context";
import useReportContext from "../../context/actions/report-context";
import links from "../../utils/links";
import styled from "styled-components";

const Navigation = () => {
  const location = useLocation();

  const { logoutUser } = useAuthContext();
  const { resetForm } = useReportContext();

  return (
    <Wrapper>
      <div className="main-nav-container">
        <div className="main-nav-logo">
          <img src="img/company-logo-white.png" alt="company-logo-white.png" />
        </div>

        <div className="main-nav-links">
          {links.map((link) => {
            const { id, title, path, icon } = link;
            return (
              <NavLink
                key={id}
                to={path}
                onClick={resetForm}
                className={
                  path === location.pathname
                    ? "main-nav-item main-nav-item-active"
                    : "main-nav-item main-nav-item-inactive"
                }
              >
                <span className="main-nav-item-icon">{icon}</span>
                <p className="main-nav-item-title">{title}</p>
              </NavLink>
            );
          })}
          <button onClick={logoutUser} className="main-nav-item">
            <span className="main-nav-item-icon">
              <AiOutlineLogout />
            </span>
            <p className="main-nav-item-title">logout</p>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  background: var(--color-primary-main);

  .main-nav-container {
    width: 100%;
    height: 100%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1.5rem;
  }

  .main-nav-logo {
    width: 200px;
    height: 70px;
  }

  .main-nav-logo img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .main-nav-logo {
    height: 100%;
  }

  .main-nav-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .main-nav-item {
    display: flex;
    align-items: center;
    color: var(--color-white);
    transition: all 0.25s ease;
    padding: 0.25rem;
  }

  .main-nav-item:hover:not(.main-nav-item-active) {
    border-bottom: 2px solid var(--color-white);
  }

  .main-nav-item-icon {
    font-size: 1.25rem;
  }

  .main-nav-item-title {
    text-transform: capitalize;
    font-size: 1rem;
  }

  .main-nav-item-active {
    border-bottom: 2px solid var(--color-white);
  }

  .main-nav-footer-version {
    color: var(--color-gray-light);
  }

  @media (max-width: 720px) {
    .main-nav-container {
      flex-direction: column;
    }

    .main-nav-logo {
      margin: 0.5rem 0;
    }
  }
`;

export default Navigation;
