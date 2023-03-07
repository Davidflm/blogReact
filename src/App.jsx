import { Post } from "./components/Post";
import { Header } from "./Components/Header";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/90347371?v=4",
      name: 'David Flávio',
      role: 'FullStack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera 👏🏽👏🏽' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto para o meu portifólio' },
      { type: 'link', content: 'david.dev/nossocomercio' },
    ],
    publishedAt: new Date('2023-03-03 12:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: 'Mayk Brito',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala Galera 👏🏽👏🏽' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto para o meu portifólio' },
      { type: 'link', content: 'david.dev/nossocomercio' },
    ],
    publishedAt: new Date('2023-03-07 12:07:00'),
  },
];


export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        < Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}

            />
            )
          }
          )}

        </main>

      </div>
    </div>
  )
}

