import React, { Component, Fragment } from 'react';
import css from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

export default class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sidedrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    sidedrawerToggleHandler = () => {
        this.setState((prevState) => ({ showSideDrawer: !prevState.showSideDrawer }));
    };

    render() {
        return (
            <Fragment>
                <Toolbar drawerToggleClicked={this.sidedrawerToggleHandler}/>
                <Sidedrawer open={this.state.showSideDrawer} closed={this.sidedrawerClosedHandler} />
                <main className={css.Content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}