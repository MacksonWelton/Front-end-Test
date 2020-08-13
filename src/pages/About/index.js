import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import about from '../../assets/images/about.png';

import './styles.css';

const About = () => {
  return (
    <>
      <Header url1="/sobre" url2="/login" link1="SOBRE" link2="LOGIN"/>
      <main id="container">
        <section id="section-about-left">
          <img src={about} alt="" />
        </section>
        <section id="section-about-right">
          <div id="box">
            <h2>Sobre</h2>
            <div id="box-text">
              <p>Esse projeto foi feito usando:</p>
              <p>- HTML</p>
              <p>- JAVASCRIPT</p>
              <p>- CSS</p>
              <p>- REACT.JS</p>
              <p>- AXIOS</p>
              <p>- REDUX</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default About;