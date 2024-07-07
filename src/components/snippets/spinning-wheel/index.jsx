"use client";
import { Button } from "@/components/button";
import { PhoneXMarkIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect, useRef } from "react";

export function SpinningWheel() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [options, setOptions] = useState(["Option 1", "Option 2"]);
  const wheelRef = useRef(null);

  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#FED766",
    "#2AB7CA",
    "#F0B67F",
  ];

  const spinWheel = () => {
    if (spinning || options.length < 2) return;
    setSpinning(true);
    setResult(null);

    const randomDegrees = Math.floor(Math.random() * 360) + 1440; // At least 4 full spins
    if (wheelRef.current) {
      // Reset the transform to none before applying the new rotation
      wheelRef.current.style.transition = "none";
      wheelRef.current.style.transform = "none";

      // Force a reflow to apply the reset transform (necessary for some browsers)
      wheelRef.current.getBoundingClientRect();

      // Apply the new rotation
      wheelRef.current.style.transition =
        "transform 5s cubic-bezier(0.25, 0.1, 0.25, 1)";
      wheelRef.current.style.transform = `rotate(${randomDegrees}deg)`;
    }

    setTimeout(() => {
      setSpinning(false);
      const selectedIndex = Math.floor(
        (360 - (randomDegrees % 360)) / (360 / options.length)
      );
      setResult(options[selectedIndex]);
    }, 5000);
  };

  useEffect(() => {
    if (!spinning && wheelRef.current) {
      wheelRef.current.style.transition = "none";
    }
  }, [spinning]);

  if (options.length < 2) {
    return (
      <div className="text-red-500">
        Please provide at least 2 options for the wheel.
      </div>
    );
  }

  if (options.length > 6) {
    return (
      <div className="text-red-500">Please provide 6 or fewer options.</div>
    );
  }

  const wheelSize = 250;
  const centerX = wheelSize / 2;
  const centerY = wheelSize / 2;
  const radius = wheelSize / 2;

  return (
    <div className="flex flex-col md:flex-row items-start gap-4 border p-4 rounded-md">
      <div className="flex flex-col w-full justify-center text-center">
        <h3 className="mb-2">Enter Options (up to 6):</h3>
        {options.map((option, index) => (
          <div key={index} className="mb-2 flex items-center">
            <input
              type="text"
              value={option}
              onChange={(e) => {
                const newOptions = [...options];
                newOptions[index] = e.target.value;
                setOptions(newOptions);
              }}
              className="border p-2 rounded-md h-10 w-full"
              placeholder={`Option ${index + 1}`}
            />
            {index > 1 && (
              <Button
                onClick={() => {
                  const newOptions = options.filter((_, i) => i !== index);
                  setOptions(newOptions);
                }}
                variant="outline"
                className="ml-2"
              >
                X
              </Button>
            )}
          </div>
        ))}
        {options.length < 6 && (
          <button
            onClick={() => setOptions([...options, ""])}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Add Option
          </button>
        )}
      </div>
      <div className="flex flex-col items-center w-full justify-center">
        <div
          className="relative mb-4"
          style={{ width: wheelSize, height: wheelSize }}
        >
          {/* Arrow indicator */}
          <div className="rotate-180 absolute top-1/2 -right-5 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-l-[30px] border-l-red-500 z-10"></div>

          <svg
            ref={wheelRef}
            width={wheelSize}
            height={wheelSize}
            viewBox={`0 0 ${wheelSize} ${wheelSize}`}
            onClick={spinWheel}
            className="cursor-pointer"
          >
            {options.map((option, index) => {
              const angle = (index / options.length) * 2 * Math.PI;
              const nextAngle = ((index + 1) / options.length) * 2 * Math.PI;
              const x1 = centerX + radius * Math.cos(angle);
              const y1 = centerY + radius * Math.sin(angle);
              const x2 = centerX + radius * Math.cos(nextAngle);
              const y2 = centerY + radius * Math.sin(nextAngle);

              const largeArcFlag = nextAngle - angle <= Math.PI ? "0" : "1";

              const pathData = [
                `M ${centerX},${centerY}`,
                `L ${x1},${y1}`,
                `A ${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2}`,
                "Z",
              ].join(" ");

              const middleAngle = (angle + nextAngle) / 2;
              const textX = centerX + radius * 0.65 * Math.cos(middleAngle);
              const textY = centerY + radius * 0.65 * Math.sin(middleAngle);

              return (
                <g key={index}>
                  <path d={pathData} fill={colors[index % colors.length]} />
                  <text
                    x={textX}
                    y={textY}
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    transform={`rotate(${
                      (middleAngle * 180) / Math.PI + 90
                    }, ${textX}, ${textY})`}
                  >
                    {option}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400 disabled:cursor-not-allowed"
          onClick={spinWheel}
          disabled={spinning || options.length < 2}
        >
          {spinning ? "Spinning..." : "Spin the Wheel"}
        </button>
        {result && (
          <p className="mt-4 text-lg font-semibold">Result: {result}</p>
        )}
      </div>
    </div>
  );
}
