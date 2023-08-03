import s from './styles.module.scss';
import svg from 'assets/icons/logo.svg';
import CustomButton from 'components/CustomButton/CustomButton';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <header>
            <Link className={s.logo} to='presentation' smooth={true} offset={-90} duration={50}>
                <img src={svg} alt=''></img>
                <span>Meta</span>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to='overview' smooth={true} offset={-90} duration={0}>
                            Overview
                        </Link>
                    </li>
                    <li>
                        <Link to='features' smooth={true} offset={-90} duration={50}>
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link to='techSpecs' smooth={true} offset={-90} duration={50}>
                            Tech Specs
                        </Link>
                    </li>
                    <li>
                        <Link to='reviews' smooth={true} offset={-90} duration={50}>
                            Reviews
                        </Link>
                    </li>
                </ul>
            </nav>
            <Link to='diveInMeta' smooth={true} offset={-90} duration={50}>
                <CustomButton
                    text='Buy now'
                    padding='15px 45px'
                    color='var(--textDark)'
                    fontSize='1.125rem'
                />
            </Link>
        </header>
    );
};

export default Header;
