import { FC } from 'react';
import Accordeon from './Accordeon/Accordeon';

// ** Accordeon info
const TechCharacterictics: Array<{ subheading: string; text: string }> = [
    { subheading: 'Hardware', text: 'PC Optional' },
    { subheading: 'Tracking', text: 'Six Degrees of Freedom with 6DOF' },
    { subheading: 'Controllers', text: 'Redesigned Touch Controllers' },
    { subheading: 'Head Strap', text: 'Soft Strap' },
    {
        subheading: 'Optics',
        text: 'Fast-Switch LCD Display; 1832 x 1920 Resolution Per Eye; 60, 72, 90 Hz Refresh Rate; Supported Glasses Compatible',
    },
    { subheading: 'Sound', text: 'Positional Audio' },
    { subheading: 'Apps & Games', text: 'Meta Quest Store' },
    { subheading: 'Storage', text: '128GB | 256GB' },
];

const MinimalCharacter: Array<{ subheading: string; text: string }> = [
    { subheading: 'CPU', text: 'Intel i5-4590 / AMD Ryzen 5 1500X or greater' },
    { subheading: 'RAM', text: '8 GB' },
    { subheading: 'Video Card', text: 'NVIDIA GeForce GTX 970 / AMD Radeon 400 Series' },
    { subheading: 'Dedicated Video RAM', text: '3 GB' },
    { subheading: 'Pixel Shader', text: '5.1' },
    { subheading: 'Vertex Shader', text: '5.1' },
    { subheading: 'OS', text: 'Windows 10 (64-bit)' },
    { subheading: 'DirectX', text: 'Version 11' },
];

// **

const TechSpecs: FC = () => {
    return (
        <div
            id='techSpecs'
            style={{
                width: '1240px',
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
