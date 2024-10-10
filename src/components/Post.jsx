import { format, formatDistanceToNow } from 'date-fns'; 
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
       'Post muito bacana, hein?'
    ]);

    const [newCommentText, setNewCommentText] = useState('');

    function handleNewCommentChange(event) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    function handleNewCommentInvalid(event){
        event.target.setCustomValidity('Esse campo é obrigatório');
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete);
        setComments(commentsWithoutDeletedOne);
    }

    function handleCreateNewComment(event) {
        event.preventDefault();
        if (newCommentText.trim()) { // Verifique se o comentário não está vazio
            setComments([...comments, newCommentText]);
            setNewCommentText('');
        }
    }

    const isNewCommentEmpty = newCommentText.length === 0; // Use ===

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
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
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href=''>{line.content}</a></p>;
                    }
                    return null; // Para evitar warnings
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    placeholder='Deixe um comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form> 

            <div className={styles.commentList}>
                {comments.map((comment, index) => {
                    return (
                        <Comment
                            key={`${comment}-${index}`} // Uso de chave única
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    );
                })}
            </div>
        </article>
    );
}
