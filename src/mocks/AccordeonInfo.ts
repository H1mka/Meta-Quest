import { IAccordeonContent } from 'types/IAccordeonContent';

// ** Accordeon info

const TechCharacterictics: Array<IAccordeonContent> = [
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

const MinimalCharacter: Array<IAccordeonContent> = [
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

export { TechCharacterictics, MinimalCharacter };
