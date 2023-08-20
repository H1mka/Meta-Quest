import { FC, useState, useEffect } from 'react';
import s from './styles.module.scss';
import { ReviewsInfo } from 'mocks/ReviewsInfo';
import { ICustomer } from 'types/ICustomer';
import CustomerItem from './CustomerItem/CustomerItem';

const Customers: FC = () => {
    const [currentCustomer, setCurrentCustomer] = useState<ICustomer | null>(null);

    useEffect(() => {
        if (ReviewsInfo.length) setCurrentCustomer(ReviewsInfo[0]);
    }, []);

    useEffect(() => {
        console.log(currentCustomer);
    }, [currentCustomer]);

    return (
        <article className={s.customersWrap} id='reviews'>
            <h1>Our Customers Say</h1>
            <article>
                <div className={s.textBlock}>
                    <hr />
                    <p>{currentCustomer?.description}</p>
                    <hr />
                </div>

                <div className={s.customersInfo}>
                    {ReviewsInfo &&
                        ReviewsInfo.map((item, index) => {
                            return (
                                <CustomerItem
                                    customerName={item.customerName}
                                    avatarSrc={item.avatar}
                                    rating={item.rating}
                                    key={index}
                                    currCustomer={currentCustomer}
                                    changeCustomer={() => setCurrentCustomer(item)}
                                />
                            );
                        })}
                </div>
            </article>
        </article>
    );
};

export default Customers;
