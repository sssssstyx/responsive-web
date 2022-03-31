import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import tw from 'twin.macro';
import Home from './app/home';

/**
 *
 * @Description: Responsive web app for a car video background show.
 * @author Shy
 * @date 20/03/2022
 *
 */

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
        w-full
        h-[100vh]
        overflow-x-hidden
    `};
`;

export default App;
