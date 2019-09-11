import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import './Input.css'

const AppInput = (props) => {
  return (
    <div className="InputGroup">
      <InputGroup>
        <InputGroupAddon addonType="prepend">{props.prepend}</InputGroupAddon>
        <Input placeholder={props.placeholder} min={props.min} max={props.max} type={props.type} step={props.step} />
        <InputGroupAddon addonType="append">{props.append}</InputGroupAddon>
      </InputGroup>
    </div>
  );
};

export default AppInput;