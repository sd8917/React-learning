import React from 'react';

const Input = ({ name, type, placeholder, onChangeHandler, value }) => {
    return (
        <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChangeHandler}
            value={value}
        />
    );
};

export default Input;
