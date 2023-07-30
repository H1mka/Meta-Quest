import { FC } from 'react';
import s from './styles.module.scss';
import Slider from 'react-slick';
import SliderItem from './SliderItem';
import imgSrc from 'assets/images/features_vrHeadSet.png';

const Features: FC = () => {
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
        autoplaySpeed: 4500,
        pauseOnFocus: true,
    };
    return (
        <div className={s.featuresWrapper} id='features'>
            <Slider {...settings}>
                <SliderItem
                    imgSrc={imgSrc}
                    caption={'Key Features'}
                    text={
                        'Everything from multiplayer games to 360° videos look beyond incredible, with 20 pixels per degree visuals and a Fast-Switch LCD Display spanning 1832 x 1920 pixels per eye'
                    }
                />
                <SliderItem
                    imgSrc={imgSrc}
                    caption={'Slide 2 Feature'}
                    text={
                        'SLIDE 2 SLIDE 2 SLIDE 2 SLIDE 2 SLIDE 2 SLIDE 2 SLIDE 2 SLIDE 2 SLIDE 2 '
                    }
                />
                <SliderItem
                    imgSrc={imgSrc}
                    caption={'Slide 3 Feature'}
                    text={
                        'SLIDE 3 SLIDE 3 SLIDE 3 SLIDE 3 SLIDE 3 SLIDE 3 SLIDE 3 SLIDE 3 SLIDE 3 '
                    }
                />
            </Slider>
        </div>
    );
};

export default Features;
