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
        </article>
    )
}