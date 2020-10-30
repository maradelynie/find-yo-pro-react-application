import React from 'react';

import logo from '../../assets/logo.svg';

import {MainHeader} from './styles';

export default function Header() {
  return (
    <MainHeader>
      <div className="header_container">
       <img src={logo} alt="Logo findo yo pro" /> 
       <h1>
          Find yo pro
        </h1>
      </div>
      </MainHeader>
  );
}


