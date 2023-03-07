import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content }) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" alt='' />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>David Flávio</strong>
              <time title='22 de Fevereiro de 2023' dateTime='2023-02-22 12:53:12'>Publicado há 1h</time>
            </div>
            <button title='erase comment'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div >
        <footer >
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>

        </footer>
      </div>
    </div>
  )
}