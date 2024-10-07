import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/2305ray.png" />
                    <div className={styles.authorinfo}>
                        <strong>Rayssa Garcia</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

            <time title='04 de outubro de 2024' dateTime="2024-10-04 13:47:38">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p> 

                <p>👉 <a href='#'>jane.design/doctorcare</a></p>

                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>    

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea placeholder='Deixe um comentário'>
                </textarea>
         
         <footer>
                <button type='submit'>Publicar</button>
         </footer>
            </form>
        </article>
    )
}