import s from './styles.module.scss';
import {
    Header,
    Overview,
    Presentation,
    Features,
    TechSpecs,
    Customers,
    DiveInMeta,
    Footer,
} from 'components';

function MainPage() {
    return (
        <div className={s.mainWrapper}>
            <Header />
            <main>
                <Presentation />
                <Overview />
                <Features />
                <TechSpecs />
                <Customers />
                <DiveInMeta />
            </main>
            <Footer />
        </div>
    );
}

export default MainPage;
