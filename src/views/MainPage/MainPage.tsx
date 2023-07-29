import s from './styles.module.scss';
import { Header, Overview, Presentation } from 'components';

function MainPage() {
    return (
        <div className={s.mainWrapper}>
            <Header />
            <main>
                <Presentation />
                <Overview />
            </main>
        </div>
    );
}

export default MainPage;
