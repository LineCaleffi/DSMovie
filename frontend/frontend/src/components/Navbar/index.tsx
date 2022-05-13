//importa o react
import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css'
function Navbar(){
   return(
    <header>
        <nav className="container">
        <div className="dsmovie-nav-content">
            <h1>DSMovie</h1>
            {/* COMENTÁRIO JSX */}
            {/* A imagem do git vira um link */}
            {/* Ao clicar na imagem vai para o gitHub mencionado, no caso o meu */}
            <a href="https://github.com/LineCaleffi" target="_blank" rel="noopener noreferrer">
            <div className="dsmovie-contact-container">
                <GithubIcon />
                <p className="dsmovie-contact-link">/LineCaleffi</p>       
            </div>
            </a>
        </div>
        </nav>
    </header>
   );
}

export default Navbar;