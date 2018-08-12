import React, {Fragment} from 'react'
import css from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
const modal = props => (
    <Fragment>
    <Backdrop show={props.show} clicked={props.modalClosed}/>
        <div
            className={css.Modal}
            style={{
                transfrom: props.show ? 'trnaslateY(0)' : 'translateY(-100hv)',
                opacity: props.show ? '1' : '0'
            }}
        >
            {props.children}
        </div>
    </Fragment>
);

export default modal;