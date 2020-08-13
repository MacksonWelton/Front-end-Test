import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import HomeImage from '../../assets/images/home.png';

import './styles.css';

const Home = () => {
  return (
    <>
      <Header url1="/sobre" url2="/login" link1="SOBRE" link2="LOGIN"/>
      <main id="container-home">
        <section id="section-home-left">
          <h2>Lorem Ipsum</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </section>
        <section id="section-home-right">
          <img src={HomeImage}  alt=""/>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home;