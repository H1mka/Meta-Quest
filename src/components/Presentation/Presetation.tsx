import s from './styles.module.scss';
import image from 'assets/images/presentation_vr.png';

const Presetation = () => {
    return (
        <div className={s.presWrapper}>
            <img src={image} alt='Meta Quest 2' />
            <div className={s.textWrapper}>
                <p>The best way to experience virtual reality!</p>
                <h1>Meta Quest 2</h1>
            </div>
        </div>
    );
};

export default Presetation;
