import React, { useEffect, useState } from "react";

const Chart = ({ percentage, strokeWidth, size }) => {
  const [offset, setOffset] = useState(0);
  const [circumference, setCircumference] = useState(0);

  useEffect(() => {
    const progress = percentage / 100;
    const calculatedCircumference = 2 * Math.PI * (size / 2);
    const offsetValue = calculatedCircumference * (1 - progress);

    setOffset(offsetValue);
    setCircumference(calculatedCircumference);
  }, [percentage, size]);

  return (
    <svg className="chart" width={size} height={size}>
      <circle
        className="chart-background"
        cx={size / 2}
        cy={size / 2}
        r={(size - strokeWidth) / 2}
        strokeWidth={strokeWidth}
      />
      <circle
        className="chart-progress"
        cx={size / 2}
        cy={size / 2}
        r={(size - strokeWidth) / 2}
        strokeWidth={strokeWidth}
        strokeDasharray={`${offset} ${circumference}`}
      />
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

export default Chart;
