"use client";
// First, we import the necessary React hooks
import React, { useEffect, useState } from "react";

// We seem to have imported useState twice, which is unnecessary, I'll remove one
// import { useState } from "react"; 

// Here we're declaring a stateful functional component named 'Card'
export default function Card() {
  // We're initializing a piece of state called 'state' and giving it an initial value of an empty string
  const [state, setState] = useState(""); 

  // Since this component does not render anything, it returns an empty fragment
  return <></>;
}

// This is another stateful functional component named 'Chart'
// It receives a few props: percentage, strokeWidth and size
const Chart = ({ percentage, strokeWidth, size }) => {
  // We're initializing two pieces of state: 'offset' and 'circumference' and set both to 0 initially
  const [offset, setOffset] = useState(0);
  const [circumference, setCircumference] = useState(0);

  // When 'percentage' or 'size' change, we recalculate the 'offset' and 'circumference'
  useEffect(() => {
    const progress = percentage / 100; // converting the percentage to a decimal
    const calculatedCircumference = 2 * Math.PI * (size / 2); // formula for calculating the circumference of a circle
    const offsetValue = calculatedCircumference * (1 - progress); // calculating the stroke offset value

    setOffset(offsetValue); // updating the 'offset' state
    setCircumference(calculatedCircumference); // updating the 'circumference' state
  }, [percentage, size]);

  // We're returning an SVG element that represents a progress chart
  // It contains two circles (background and progress) and a text element to show the percentage
  return (
    <svg className="chart" width={size} height={size}>
      // Background circle
      <circle
        className="chart-background"
        cx={size / 2}
        cy={size / 2}
        r={(size - strokeWidth) / 2}
        strokeWidth={strokeWidth}
      />
      // Progress circle
      <circle
        className="chart-progress"
        cx={size / 2}
        cy={size / 2}
        r={(size - strokeWidth) / 2}
        strokeWidth={strokeWidth}
        strokeDasharray={`${offset} ${circumference}`} // we use the 'offset' and 'circumference' to create a dash effect that represents progress
      />
      // Text element to display the percentage
      <text
        className="chart-text"
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default Chart; // exporting the 'Chart' component
