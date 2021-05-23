import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Series1 from './pages/Series1';
import Series2 from './pages/Series2';
import ScpDetail1 from './components/ScpDetail1'
import ScpDetail2 from './components/ScpDetail2'
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const Section = styled.section`
  overflow-x: hidden;
`;

function App() {
  let location = useLocation();

  return (
    <Section>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact component={Home} />
          <Route path='/series1' exact component={Series1} />
          <Route path='/series1/:_id' component={ScpDetail1} />
          <Route path='/series2' exact component={Series2} />
          <Route path='/series2/:_id' component={ScpDetail2} />
        </Switch>
      </AnimatePresence>
    </Section>
  );
}

export default App;
