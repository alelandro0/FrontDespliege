import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
// @ts-ignore
import Footer from './Footer';
import FrontPage from './FrontPage';
// @ts-ignore
import About from './About';
// @ts-ignore
import Advertising from './Advertising';

const Home : React.FC =() => {
  return (
    <DefaultLayout>
      <FrontPage/>
      <About/>
      <Advertising/>
      <Footer/>
    </DefaultLayout>
  );
};

export default Home;