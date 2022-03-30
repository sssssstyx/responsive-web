import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import tw from 'twin.macro';
import Home from './app/home';


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

const AppContainer = styled.div`
    ${tw`
        /* Display */
        flex
        
        /* 高、宽 */
        w-[100vw]
        h-[100vh]
        overflow-x-hidden
    `};
`;

export default App;
