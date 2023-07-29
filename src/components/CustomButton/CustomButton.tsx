import { FC } from 'react';

interface ICustomButton {
    text: string;
    padding: string;
    color: string;
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

const CustomButton: FC<ICustomButton> = ({ text, padding, color }) => {
    const style: IStyle = {
        flex: '0 0 auto',
        padding: `${padding}`,
        borderRadius: '100px',
        border: 'none',
        lineHeight: '24px',
        color: `${color}`,
        fontSize: '1.125rem',
        cursor: 'pointer',
    };

    return <button style={style}>{text}</button>;
};

export default CustomButton;
