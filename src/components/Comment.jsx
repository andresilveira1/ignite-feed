/* eslint-disable react/prop-types */
import { ThumbsUp, Trash } from 'phosphor-react'

import { Avatar } from './Avatar'

import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/andresilveira1.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>André Silveira</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} weight="bold" />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}