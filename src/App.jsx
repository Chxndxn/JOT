import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './routes';

import { Header, Footer } from './layout/components';

function App() {
 return (
  <>
   <Router>
    <Header />
    <Routing />
    <Footer />
   </Router>
  </>
 );
}

export default App;
