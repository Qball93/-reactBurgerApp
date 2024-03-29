import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'lettuce', type: 'lettuce'},
  { label: 'Bacon', type: 'bacon'},
  { label: 'Cheese', type: 'cheese'},
  { label: 'Meat', type: 'meat'},
]

const BuildControls = (props) => (
  <div className={classes.BuildControls}>
    {controls.map(ctrl => (
      <BuildControl key={ctrl.label} label={ctrl.label} />
    ))}
  </div>
);



export default BuildControls;