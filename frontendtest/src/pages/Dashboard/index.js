import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Post from '../../components/Post';
import api from '../../services/api';

import './styles.css';



const Dashboard = () => {
  const [posts, setPosts] = useState([]);

  const username = useSelector((state) => state.user.username);

  const getPosts = async () => {
    const response = await api.get('posts');

    setPosts(response.data);
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <>
      <Header url1="/dashboard" url2="/login" link1="DASHBOARD" link2="SAIR" />

      <main id="container-dashboard">
        <section id="welcome-message">
          <h2>Seja bem vindo!</h2>
          <h3>Olá {username}, essa é a parte de dentro da minha aplicação MY FRONTEND TEST</h3>
          <hr />
          <section id="feed">
            <h2>Feed</h2>
            {posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  title={post.title}
                  body={post.body}
                  imageURL={post.imageURL}
                  id={post.id}
                />
              )
            })}
          </section>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Dashboard;