import React from 'react';
import PropTypes from 'prop-types';

export default function ProgressBar({percent, width, height=9}) {

  const getWidthAsPercent = () => {
    return Number((width * percent / 100))
  }

  const getColor = (per) => {
    if (per === 100) return "green";
    return per > 50 ? "blue": "red";
  }

  return (
    <div style={{border: "solid 1px lightgray", width: width, backgroundColor:"lightgray"}}>
      <div style={{
        width: getWidthAsPercent(),
        height: height,
        color: "#ddd",
        backgroundColor: getColor(percent)
      }}>
        <span 
            style={{fontSize:"0.6em", fontWeight:"bold"}}>
              {percent}%
          </span>
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
    percent: PropTypes.number.isRequired
}