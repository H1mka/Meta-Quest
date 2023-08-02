import { FC, useState, useEffect, useRef } from 'react';
import s from './Accordeon.module.scss';
import chevron from 'assets/icons/chevron-down-solid.svg';
import { IAccordeonContent } from 'types/IAccordeonContent';

interface IAccordeon {
    caption: string;
    contentData: Array<IAccordeonContent>;
}

const Accordeon: FC<IAccordeon> = ({ caption, contentData }) => {
    const [active, setActive] = useState<boolean>(false);
    const [height, setHeight] = useState<string>('0px');
    const refHeight: React.LegacyRef<HTMLDivElement> = useRef(null);

    useEffect(() => {
        if (refHeight.current) setHeight(`${refHeight.current.scrollHeight}px`);
    }, [active]);

    return (
        <article className={s.accordeon}>
            <div className={s.caption} onClick={() => setActive(!active)}>
                {caption}
                <img
                    src={chevron}
                    alt='chevron'
                    style={{ transform: active ? 'rotate(-180deg)' : 'rotate(0deg)' }}
                />
            </div>
            <div
                className={s.accordeonTogle}
                ref={refHeight}
                style={{ height: active ? height : '0px' }}
            >
                {contentData?.map((item, index) => {
                    return (
                        <section key={index}>
                            <div>{item.subheading}</div>
                            <div>{item.text}</div>
                        </section>
                    );
                })}
            </div>
        </article>
    );
};

export default Accordeon;
