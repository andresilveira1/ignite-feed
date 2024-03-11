import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post, PostType } from "./components/Post"

import styles from './App.module.css'
import "./global.css"

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/andresilveira1.png",
      name: "André Silveira",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'andresilveira1/doctorcare'},
    ],
    publishedAt: new Date('2024-03-08 07:23:35'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @ Rocketseat"
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'link', content: 'andresilveira1/doctorcare'},
    ],
    publishedAt: new Date('2024-03-09 08:14:05'),
  },
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  post={post}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}