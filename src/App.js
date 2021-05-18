import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Scp from './pages/Scp';
import ScpDetail from './components/Scp/ScpDetail'
import Movies from './pages/Movies';
import MovieDetail from './components/Movie/MovieDetail';
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
          <Route path='/scp' exact component={Scp} />
          <Route path='/scp/:id' component={ScpDetail} />
          <Route path='/movies' exact component={Movies} />
          <Route path='/movies/:id' component={MovieDetail} />
        </Switch>
      </AnimatePresence>
    </Section>
  );
}

export default App;
