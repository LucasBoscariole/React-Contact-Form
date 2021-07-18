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
        <FaSun className='sun' />
        <FaMoon className='moon' />
        <div
          className={theme === 'light-theme' ? 'ball' : 'ball translate'}
        ></div>
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
    background: var(--third-color);
    border-radius: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    height: 26px;
    width: 50px;
    transform: scale(1.5);
    border: none;
    .sun {
      color: #ffe100;
    }
    .moon {
      color: #707070;
    }
    .ball {
      background-color: var(--fourth-color);
      border-radius: 50%;
      position: absolute;
      top: 2.8px;
      left: 3px;
      height: 20px;
      width: 20px;
      transform: translateX(0px);
      transition: transform 0.2s linear;
    }
    .ball.translate {
      transform: translateX(24px);
    }
  }
  @media screen and (max-width: 768px) {
    width: 80vw;
  }
`;
