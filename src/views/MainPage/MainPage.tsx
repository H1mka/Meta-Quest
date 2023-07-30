import s from './styles.module.scss';
import { Header, Overview, Presentation, Features } from 'components';

function MainPage() {
    return (
        <div className={s.mainWrapper}>
            <Header />
            <main>
                <Presentation />
                <Overview />
                <Features />
            </main>
        </div>
    );
}

export default MainPage;
