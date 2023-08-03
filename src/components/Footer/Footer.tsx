import { FC } from 'react';
import s from './styles.module.scss';
import chevron from 'assets/icons/chevron-down-solid.svg';

const Footer: FC = () => {
    return (
        <footer>
            <div className={s.language}>
                <p>English</p>
                <img src={chevron} alt='chevron' />
            </div>
            <div className={s.copyRight}>
                <p>Terms of Use</p>
                <p>Data Protection</p>
                <p>©2023 Meta</p>
            </div>
        </footer>
    );
};

export default Footer;
