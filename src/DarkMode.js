import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon } from 'react-icons/fa';

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

const DarkMode = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <Container>
      <button className='btn' onClick={toggleTheme}>
        toggle
      </button>
    </Container>
  );
};

export default DarkMode;

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 70vw;
  margin: 5vh auto 0 auto;
  button {
    background: var(--second-color);
    border: none;
    text-transform: uppercase;
    color: var(--third-color);
    padding: 0.5rem 1rem;
    border-radius: 5px;
  }
`;
