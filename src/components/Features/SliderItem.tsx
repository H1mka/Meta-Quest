import { FC } from 'react';
import s from './styles.module.scss';

interface ISliderItem {
    imgSrc: string;
    caption: string;
    text: string;
}

const SliderItem: FC<ISliderItem> = ({ imgSrc, caption, text }) => {
    return (
        <section className={s.slider_item}>
            <div className={s.pictureWrap}>
                <img src={imgSrc} alt='slider_image' />
            </div>
            <div className={s.infoWrap}>
                <h2>{caption}</h2>
                <p>{text}</p>
            </div>
        </section>
    );
};

export default SliderItem;
