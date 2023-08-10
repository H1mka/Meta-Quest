import { FC } from 'react';
import Accordeon from './Accordeon/Accordeon';
import { TechCharacterictics, MinimalCharacter } from 'mocks/AccordeonInfo';

const TechSpecs: FC = () => {
    return (
        <div
            id='techSpecs'
            style={{
                maxWidth: '1240px',
                width: '100%',
                margin: '0 auto',
                marginBottom: '186px',
                display: 'flex',
                flexDirection: 'column',
                gap: '40px',
            }}
        >
            <Accordeon caption='Technical Characteristics' contentData={TechCharacterictics} />
            <Accordeon caption='Minimal Computer Characteristics' contentData={MinimalCharacter} />
        </div>
    );
};

export default TechSpecs;
