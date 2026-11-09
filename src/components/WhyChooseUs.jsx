import { useState } from "react";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  const [weight, setWeight] = useState(1);
  const [paperPrice, setPaperPrice] = useState(40);
  const [conversion, setConversion] = useState(8);
  const [overhead, setOverhead] = useState(2);
  const [profit, setProfit] = useState(20);

  const paperCost = weight * paperPrice;
  const totalCost = paperCost + conversion + overhead;
  const profitAmount = totalCost * (profit / 100);
  const sellingPrice = totalCost + profitAmount;

  return (
    <div className="box-calculator">
      <h2>Corrugated Box Price Calculator</h2>

      <div className="calculator-inputs">
        <label>Box Weight (KG)</label>
        <input
          type="number"
          min="0"
          step="0.001"
          value={weight}
          onChange={(e) => setWeight(Number(e.target.value))}
        />

        <label>Kraft Paper Price (₹ / KG)</label>
        <input
          type="number"
          min="0"
          value={paperPrice}
          onChange={(e) => setPaperPrice(Number(e.target.value))}
        />

        <label>Conversion Cost (₹ / Box)</label>
        <input
          type="number"
          min="0"
          value={conversion}
          onChange={(e) => setConversion(Number(e.target.value))}
        />

        <label>Other Expenses (₹ / Box)</label>
        <input
          type="number"
          min="0"
          value={overhead}
          onChange={(e) => setOverhead(Number(e.target.value))}
        />

        <label>Profit Percentage (%)</label>
        <input
          type="number"
          min="0"
          value={profit}
          onChange={(e) => setProfit(Number(e.target.value))}
        />
      </div>

      <div className="calculator-results">
        <p>Paper Cost: ₹{paperCost.toFixed(2)}</p>
        <p>Total Production Cost: ₹{totalCost.toFixed(2)}</p>
        <p>Profit: ₹{profitAmount.toFixed(2)}</p>

        <div className="selling-price">
          <span>Selling Price / Box</span>
          <h2>₹{sellingPrice.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;