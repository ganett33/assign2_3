import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Scp from './pages/Scp';
import Movies from './pages/Movies';
import { AnimatePresence } from 'framer-motion';
import GlobalStyle from './globalStyles';
import styled from 'styled-components';

const Section = styled.section`
  overflow-x: hidden;
`;

function App() {
  let location = useLocation();

  return (
    <Section>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact component={Home} />
          <Route path='/scp' component={Scp} />
          <Route path='/movies' component={Movies} />
        </Switch>
      </AnimatePresence>
    </Section>
  );
}

export default App;
