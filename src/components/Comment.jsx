import { ThumbsDown, ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export function Comment() {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} 
            src='https://github.com/diego3g.png'/>
          
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
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>





        </div>
    )
}