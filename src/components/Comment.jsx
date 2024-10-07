import { ThumbsDown, ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src='https://github.com/2305ray.png'/>
          
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Rayssa Garcia</strong>
                            <time title='04 de outubro de 2024' dateTime="2024-10-04 13:47:38">Cerca de 2h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}></Trash>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp></ThumbsUp>
                        Aplaudir <span></span>
                    </button>
                </footer>
            </div>





        </div>
    )
}