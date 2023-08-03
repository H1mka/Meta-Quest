import { FC } from 'react';

interface ICustomButton {
    text: string;
    padding: string;
    color: string;
    fontSize?: string;
}

interface IStyle {
    flex: string;
    padding: string;
    borderRadius: string;
    border: string;
    lineHeight: string;
    color: string;
    fontSize: string;
    cursor: string;
}

const CustomButton: FC<ICustomButton> = ({ text, padding, color, fontSize = '1.5rem' }) => {
    const style: IStyle = {
        flex: '0 0 auto',
        padding: `${padding}`,
        fontSize: `${fontSize}`,
        color: `${color}`,
        borderRadius: '100px',
        border: 'none',
        lineHeight: '24px',
        cursor: 'pointer',
    };

    return <button style={style}>{text}</button>;
};

export default CustomButton;
