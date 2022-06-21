
import styles from './Header.module.css'
import Logo from './assets/Logo.svg';

export function Header(){
   return (
            <header  >
                 <div className={styles.logo}>
                  
                    <figure>
                       <img src={Logo} alt="Todo App logo"/>
                    </figure>
                 </div>
                     
            </header>
          );     
}