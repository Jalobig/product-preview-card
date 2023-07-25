import './App.scss';
import Card from './components/Card/Card';
import Display from './components/Display/Display';
import Footer from './components/Footer/Footer';
import { Fragment } from 'react';
import Product from './components/Product/Product';

function App() {
  return (
    <Fragment>
      <Card>
        <Display/>
        <Product/>
      </Card>
      <Footer/>
    </Fragment>
  );
}

export default App;
