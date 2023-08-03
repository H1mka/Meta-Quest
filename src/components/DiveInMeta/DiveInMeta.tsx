import { FC } from 'react';
import s from './styles.module.scss';
import img from 'assets/images/diveMetaverse.png';
import CustomButton from 'components/CustomButton/CustomButton';

const DiveInMeta: FC = () => {
    return (
        <article className={s.diveWrapper} id='diveInMeta'>
            <h1>Dive in Metaverse!</h1>
            <CustomButton text='Buy now' padding='26px 52px' color='var(--textLight)' />
            <img src={img} alt='Meta Quest 2' />
        </article>
    );
};

export default DiveInMeta;
