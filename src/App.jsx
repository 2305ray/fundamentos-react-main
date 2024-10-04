import React from 'react';
import {Post} from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/sidebar';

import styles from './App.module.css'

import './global.css';


 function App() {
  return (
    <div>
      <Header />
     
     <div className={styles.wrapper}>
       <Sidebar />
      
          <main>
            <Post
              author='diego fernandes'
              content='ijfoik0plklkjmihufywuj9okjih7gbuqjoi97y8uihij' />

            <Post
              author='diego fernandes'
              content='ijfoik0plklkjmihufywuj9okjih7gbuqjoi97y8uihij' />


          </main>
     </div>

  </div>
  )

}

export default App
