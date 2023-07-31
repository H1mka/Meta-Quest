import { FC, useState } from 'react';
import s from './styles.module.scss';
import Slider from 'react-slick';
import SliderItem from './SliderItem/SliderItem';
import imgHeadSet from 'assets/images/features_vrHeadSet.png';
import imgController from 'assets/images/features_controller.png';
import imgLenses from 'assets/images/features_lenses.png';

const Features: FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: true,
        beforeChange: (current: number, next: number) => setCurrentSlide(next),
    };
    return (
        <div className={s.featuresWrapper} id='features'>
            <div className={s.slider_dots}>
                <div className={currentSlide === 0 ? s.active : ''}></div>
                <div className={currentSlide === 1 ? s.active : ''}></div>
                <div className={currentSlide === 2 ? s.active : ''}></div>
            </div>
            <Slider {...settings}>
                <SliderItem
                    imgSrc={imgHeadSet}
                    caption={'Key Features'}
                    text={
                        'Everything from multiplayer games to 360° videos look beyond incredible, with 20 pixels per degree visuals and a Fast-Switch LCD Display spanning 1832 x 1920 pixels per eye'
                    }
                />
                <SliderItem
                    imgSrc={imgController}
                    caption={'Controller'}
                    text={
                        'Every controller has wrist straps and haptic feedback. This provides physical feedback to your hand movements to help reduce strain and prevent accidental drops.'
                    }
                />
                <SliderItem
                    imgSrc={imgLenses}
                    caption={'Lenses'}
                    text={
                        'The soft strap is designed to offer lightweight comfort for any type of player. Simply tighten or loosen the side straps and top strap for a more balanced feel and clearer picture.'
                    }
                />
            </Slider>
        </div>
    );
};

export default Features;
