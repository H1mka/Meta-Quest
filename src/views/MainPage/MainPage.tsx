import s from './styles.module.scss';
import Header from 'components/Header/Header';
import Presetation from 'components/Presentation/Presetation';

function MainPage() {
    return (
        <div className={s.mainWrapper}>
            <Header />
            <main>
                <Presetation />
            </main>
        </div>
    );
}

export default MainPage;
