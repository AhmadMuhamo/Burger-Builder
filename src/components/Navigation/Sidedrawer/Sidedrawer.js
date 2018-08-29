import React, { Fragment } from 'react';
import Logo from '../../UI/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import css from './Sidedrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop';

const sidedrawer = props => {
    let attachedClasses = [css.Sidedrawer, css.Close];
    if (props.open) {
        attachedClasses = [css.Sidedrawer, css.Open];
    }
    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={css.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    );
};

export default sidedrawer;