import { FC } from 'react';
import s from './CustomerItem.module.scss';
import { ICustomer } from 'types/ICustomer';
import { StarsByRating } from 'utils/starsByRating';

interface ICustomerItem {
    customerName: string;
    avatarSrc: string;
    rating: number;
    currCustomer: ICustomer | null;
    changeCustomer: () => void;
}

const CustomerItem: FC<ICustomerItem> = ({
    customerName,
    avatarSrc,
    rating,
    currCustomer,
    changeCustomer,
}) => {
    const userValidation = (): boolean => {
        return currCustomer?.customerName === customerName;
    };

    return (
        <section className={`${s.borderWrap} ${userValidation() ? s.active : ''}`}>
            <div className={`${s.customerItemWrap} ${userValidation() ? s.active : ''}`}>
                {/* Check current customer */}
                {userValidation() && (
                    <div className={s.info}>
                        <p className={s.customerName}>{customerName}</p>
                        <div className={s.ratingStars}>
                            <div className={s.stars}>
                                <StarsByRating rating={rating} />
                            </div>
                            <p className={s.rating}>{rating.toFixed(1)}/5.0</p>
                        </div>
                    </div>
                )}

                <img
                    className={`${s.avatar} ${userValidation() ? s.active : ''}`}
                    onClick={changeCustomer}
                    src={avatarSrc}
                    alt='customer avatar'
                />
            </div>
        </section>
    );
};

export default CustomerItem;
