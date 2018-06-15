import React from 'react';

import classes from './BuildControl.css';

const buildControl = (props) => (
    <div className={classes.BuildControll}>
        <div className={classes.Label}>{props.label}</div>
        <div className={classes.Less}>Less</div>
        <div className={classes.More} onClick={props.added}>More</div>
    </div>
);

export default buildControl;