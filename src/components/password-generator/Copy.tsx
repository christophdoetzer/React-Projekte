import React from 'react';

interface Props {
    password: string,
}

export const Copy: React.FC<Props> = (props) => {
    const handleClick = () => {
        navigator.clipboard
            .writeText(props.password)
            .then(() => {
                alert("Successfully copied!");
            })
            .catch(() => {
                alert("something went wrong");
            });
    }
    return (
        <button className='copy' onClick={handleClick}>
            .<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path fill="currentColor" d="M8 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8ZM7 4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4ZM4 6a2 2 0 0 1 1-1.732V14.5A2.5 2.5 0 0 0 7.5 17h6.232A2 2 0 0 1 12 18H7.5A3.5 3.5 0 0 1 4 14.5V6Z" /></svg>
        </button>
    );
}