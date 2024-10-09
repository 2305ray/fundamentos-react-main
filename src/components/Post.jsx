import { format, formatDistanceToNow } from 'date-fns'; 
import ptBR from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';




//estado 

export function Post({author, publishedAt, content}) {
    const [comments, setcomments] = useState([
       'Post muito bacana, hein?'
        
        
    ])


    /* exemplo de uso de data pelo js
    const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month:'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt);
    */

    const [newCommentText, setNewCommentText] = useState('')

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm", {
        locale: ptBR, })

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleCreatNewComment() {
        event.preventDefault();

        setcomments([...comments, newCommentText]);
        setNewCommentText('');
    }

    return(
        <article className={styles.post}> 
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorinfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

            <time title='04 de outubro de 2024' dateTime={publishedAt.toISOString()}>
               {publishedDateFormatted}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph'){
                        return <p>{line.content}</p>
                    } else if (line.type == 'link') {
                        return <p><a href=''>{line.content}</a></p>
                    }
                })}
            </div>    

            <form  onSubmit={handleCreatNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                name='comment'
                placeholder='Deixe um comentário'
                value={newCommentText}
               onChange={handleNewCommentChange}
               > 
               </textarea>
                
         
         <footer>
                <button type='submit'>Publicar</button>
         </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return <Comment content={comment}/>
                })}
            </div>
        </article>
    )
}