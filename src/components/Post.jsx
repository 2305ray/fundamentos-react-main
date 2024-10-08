import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';





export function Post(props) {
    
    return(
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/mayk.png" />
                    <div className={styles.authorinfo}>
                        <strong>Rayssa Garcia</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

            <time title='04 de outubro de 2024' dateTime="2024-10-04 13:47:38">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                
            </div>    

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário'>
                </textarea>
         
         <footer>
                <button type='submit'>Publicar</button>
         </footer>
            </form>

            <div className={styles.commentList}>
                <Comment></Comment>
                <Comment></Comment>
                <Comment></Comment>
            
            </div>
        </article>
    )
}