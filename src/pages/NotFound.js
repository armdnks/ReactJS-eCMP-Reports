import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const progressBar = document.querySelector(".not-found-progress-bar");

    let progressStart = 0;

    let theProgress = setInterval(() => {
      const progress = progressStart++ * 0.05;

      progressBar.style.width = progress + "%";

      if (progress === 100) {
        clearInterval(theProgress);
        progressStart = 0;
        navigate("/");
      }
    });
  }, [navigate]);

  return (
    <Wrapper>
      <div className="not-found-progress">
        <div className="not-found-progress-bar"></div>
      </div>

      <div className="not-found-container">
        <div className="not-found-image">
          <img src="img/not-found-img.jpg" alt="not-found-img.jpg" />
        </div>

        <div className="not-found-info">
          <h1 className="not-found-title">page not found</h1>
          <p className="not-found-body">The page you're looking for is now beyond our reach.</p>
        </div>

        <Link to="/" className="not-found-btn">
          back to home
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .not-found-progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.75rem;
    background: var(--color-gray-100);
  }

  .not-found-progress-bar {
    width: 0;
    height: 100%;
    background: var(--color-primary);
  }

  .not-found-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 0 2rem;
  }

  .not-found-image {
    width: 100%;
    height: 360px;
  }

  .not-found-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .not-found-info {
    max-width: 720px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
  }

  .not-found-title {
    color: var(--color-primary);
    text-transform: uppercase;
  }

  .not-found-body {
    color: var(--color-gray-400);
  }

  .not-found-btn {
    background: var(--color-primary);
    color: var(--color-white);
    padding: 1.25rem 1.5rem;
    border-radius: 0.5rem;
    text-transform: capitalize;
    font-size: 1rem;
  }

  .not-found-btn:hover {
    background: var(--color-accent);
    color: var(--color-primary);
  }

  .not-found-btn:active {
    background: var(--color-primary);
    color: var(--color-white);
  }
`;

export default NotFound;
