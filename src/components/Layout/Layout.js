import React, {Fragment} from 'react';
import css from './Layout.css';
const layout = props => (
    <Fragment>
        <div>Toolbar, Siderbar, Backdrop</div>
        <main className={css.Content}>
            {props.children}
        </main>
    </Fragment>
);

export default layout;