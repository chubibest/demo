import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header_text">
          Transit <span className="header_text--gray">by Pixelarity </span>
      </h1>
      <div className="hamburger">
          <svg >
            <use xlinkHref="/bars-solid.svg" />
          </svg>
      </div>
    
    </header>
  )
}

export default Header;