import React, { Component, Fragment } from 'react'
import css from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

export default class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show === this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className={css.Modal}
                    style={{
                        transfrom: this.props.show ? 'trnaslateY(0)' : 'translateY(-100hv)',
                        opacity: this.props.show ? '1' : '0',
                        top: this.props.show ? '30%' : '-60%'
                    }}
                >
                    {this.props.children}
                </div>
            </Fragment>
        );
    }
}