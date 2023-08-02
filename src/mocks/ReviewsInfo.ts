import { ICustomer } from 'types/ICustomer';
import imgLinda from 'assets/images/avatarLinda.png';
import imgJacob from 'assets/images/avatarJacob.png';
import imgJason from 'assets/images/avatarJason.png';
import imgHouston from 'assets/images/avatarHouston.png';

const ReviewsInfo: Array<ICustomer> = [
    {
        customerName: 'Linda Wiza MD',
        rating: 5,
        description:
            'I can hardly get the head straps to fit properly. This makes my gaming less enjoyable and less playtime. I wish you would have done way better on the headset design and ability to make the fit better and more comfortable.',
        avatar: imgLinda,
    },
    {
        customerName: 'Jacob Miller',
        rating: 4,
        description:
            'I love the headset so much. I wish the IPD adjustment was continuous or there was a mod to allow for that.',
        avatar: imgJacob,
    },
    {
        customerName: 'Jason Herobs',
        rating: 5,
        description:
            'So far its great. I believe that Supernatural was included when I purchased it, but I had to pay $18 for a monthly subscription. ',
        avatar: imgJason,
    },
    {
        customerName: 'Houston BigMan',
        rating: 5,
        description:
            'Bought the Quest for my 16 year old son after experiencing the Quest for a work VR experience. While the work applications are fascinating, I can’t express the family fun and enjoyment with the games especially Beat Saber! Brings the gaming experience to a whole new level! Thank you Meta!',
        avatar: imgHouston,
    },
];

export { ReviewsInfo };
