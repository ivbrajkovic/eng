import './style/style.css';

import './vendor/fa';

import { h, render, Fragment } from 'preact';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

const App = () => (
  <>
    <Header />
    <Main />
    <Footer />
  </>
);

render(<App />, document.getElementById('app'));
