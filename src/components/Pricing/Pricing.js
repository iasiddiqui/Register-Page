import React, { useState } from "react";
import "./pricing.css";

const Pricing = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelection = (index) => {
    setSelectedItem(index);
  };

  const pricingData = [
    {
      title: "ACADEMIC",
      items: [
        { label: "EARLY BIRD" },
        { label: "MID TERM" },
        { label: "FINAL" },
        { label: "Speaker - ", value: 799.00 },
        { label: "Speaker - ", value: 899.00 },
        { label: "Speaker - ", value: 999.00 },
        { label: "Item1", value: 1030.45 },
        { label: "Item2", value: 10040.99 },
        { label: "Item3", value: 10030.75 },
        { label: "Item 4", value: 1030.25 },
        { label: "Item5", value: 10400.50 },
        { label: "Item6", value: 10600.33 },
      ],
    },
  ];

  return (
    <div className="Pricing">
      <div className="pricing-container">
        {pricingData.map((pricingBox, boxIndex) => (
          <div key={boxIndex} className="pricing-box">
            <h2 className="pricing-heading">{pricingBox.title}</h2>
            {pricingBox.items.map((item, itemIndex) => (
              <label
                key={itemIndex}
                className="grid-item"
                htmlFor={`item-${boxIndex}-${itemIndex}`}
                onClick={() => handleSelection(`${boxIndex}-${itemIndex}`)}
              >
                {item.value !== undefined && (
                  <input
                    type="radio"
                    id={`item-${boxIndex}-${itemIndex}`}
                    name="pricing"
                    checked={selectedItem === `${boxIndex}-${itemIndex}`}
                    onChange={() => handleSelection(`${boxIndex}-${itemIndex}`)}
                    style={{ display: "none" }} // Hide the actual radio button
                  />
                )}
                {item.value !== undefined && (
                  <span className="item-value">
                    <input type="checkbox" checked={selectedItem === `${boxIndex}-${itemIndex}`} />
                  </span>
                )}
                <span className="item-label">{item.label}</span>
                {item.value !== undefined && (
                  <span className="item-value">${item.value.toFixed(2)}</span>
                )}
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
