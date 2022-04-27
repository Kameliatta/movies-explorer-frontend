import React from 'react';
import './InfoTooltip.css';

export default function InfoTooltip(props) {
  return (
    <div className={`info-tooltip ${props.infoTooltip.class}`}>
      <h3 className="info-tooltip__message">
        {props.infoTooltip.message}
      </h3>
    </div>
)}