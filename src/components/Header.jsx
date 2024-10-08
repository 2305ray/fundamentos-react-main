import styles from './Header.module.css'
import ignitelogo from '../img/ignite-logo.svg'
 

console.log(styles);
export function Header() {
    return (
        <header className= {styles.header}>
      
         <img src={ignitelogo} alt='logotipo do Ignite' />
        </header>
    
    );
}