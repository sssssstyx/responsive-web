import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import tw from 'twin.macro';
import Home from './app/home';

const AppContainer = styled.div`
    ${tw`
        flex
        w-full
        h-full
        overflow-x-hidden
    `};
`;

function App() {
  return (
      <div>
          <Router>
              <AppContainer>
                  <Home />
              </AppContainer>
          </Router>
      </div>
      
  );
}

export default App;
