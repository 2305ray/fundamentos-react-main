
import styles from './Avatar.module.css'

//const hasBorder = props.hasBorder != false;

export function Avatar ({hasBorder = true, src}) {
    return (
        
            <img className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            // se a minha propriedade tiver hasBorder colocar o estilo avatarWithBorder se não colocar só o avatar
            src={src}></img>


       
    );
}