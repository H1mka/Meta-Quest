import s from './styles.module.scss';
import svg from 'assets/images/logo.svg';

const Header = () => {
    return (
        <header>
            <div className={s.logo}>
                <img src={svg} alt=''></img>
                <span>Meta</span>
            </div>
            <nav>
                <ul>
                    <li>Overview</li>
                    <li>Features</li>
                    <li>Tech Specs</li>
                    <li>Reviews</li>
                </ul>
            </nav>
            <button>Buy now</button>
        </header>
    );
};

export default Header;
