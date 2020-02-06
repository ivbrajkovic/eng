import './style/style.css';

import './vendor/fa';

import { h, render, Fragment } from 'preact';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

const App = () => (
    <>
        <Header />
        <Form />
        <Footer />
    </>
);

render(<App />, document.getElementById('app'));
