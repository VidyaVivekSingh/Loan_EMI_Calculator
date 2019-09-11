import React from 'react';
/* eslint-disable */
import Slider, { Range } from 'rc-slider';
import { UncontrolledAlert } from 'reactstrap';
// We can just import Slider or Range to reduce bundle size
// import Slider from 'rc-slider/lib/Slider';
// import Range from 'rc-slider/lib/Range';
import 'rc-slider/assets/index.css';
import './Slider.css'

const AppSlider = (props) => {
  
  return (
    <div className="App-Slider">
      <Slider
        min={props.min}
        defaultValue={props.defaultValue}
        max={props.max}
        marks={props.marks}
        step={props.step}
        onChange={props.onChange}
      />
    </div>
  );
};

export default AppSlider;
