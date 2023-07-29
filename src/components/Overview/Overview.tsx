import { FC } from 'react';
import s from './styles.module.scss';
import imgSrc from 'assets/images/overview_girl.png';
import { CustomButton } from 'components';

const Overview: FC = () => {
    return (
        <div className={s.wrapper} id='overview'>
            <div className={s.info}>
                <h1>Meta Quest 2: Embark on a Multiversal Adventure!</h1>
                <p>
                    Embark on an epic journey through uncharted dimensions in Meta Quest 2! As the
                    chosen hero, wield mighty powers, face off against formidable foes, and restore
                    balance to the multiverse. Join the quest now and immerse yourself in this
                    action-packed RPG adventure!
                </p>
                <CustomButton text='Join now' padding='26px 50px' color='var(--textDark)' />
            </div>
            <img src={imgSrc} alt=''></img>
        </div>
    );
};

export default Overview;
