import s from './styles.module.scss';
import svg from 'assets/images/logo.svg';
import CustomButton from 'components/CustomButton/CustomButton';

const Header = () => {
    return (
        <header>
            <div className={s.logo}>
                <img src={svg} alt=''></img>
                <span>Meta</span>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href='#overview'>Overview</a>
                    </li>
                    <li>
                        <a href=''>Features</a>
                    </li>
                    <li>
                        <a href=''>Tech Specs</a>
                    </li>
                    <li>
                        <a href=''>Reviews</a>
                    </li>
                </ul>
            </nav>
            <CustomButton text='Buy now' padding='15px 45px' color='var(--textDark)' />
        </header>
    );
};

export default Header;
