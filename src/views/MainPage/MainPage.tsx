import s from './styles.module.scss';
import { Header, Overview, Presentation, Features, TechSpecs } from 'components';

function MainPage() {
    return (
        <div className={s.mainWrapper}>
            <Header />
            <main>
                <Presentation />
                <Overview />
                <Features />
                <TechSpecs />
            </main>
        </div>
    );
}

export default MainPage;
