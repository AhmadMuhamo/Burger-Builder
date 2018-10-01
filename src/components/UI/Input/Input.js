import React from 'react';
import css from './Input.css';

const input = props => {
    let inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={!props.valid && props.touched ? css.Invalid : ''} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={!props.valid && props.touched ? css.Invalid : ''} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
                <select value={props.value} onChange={props.changed}>
                    {
                        props.elementConfig.options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.display}
                            </option>
                        ))
                    }
                </select>
            );
            break;
        default:
            inputElement = <input className={!props.valid && props.touched ? css.Invalid : ''} {...props.elementConfig} value={props.value} onChange={props.changed} />;
    }
    return (
        <div className={css.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
};

export default input;