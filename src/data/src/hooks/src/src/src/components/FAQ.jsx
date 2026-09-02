import { useState } from "react";

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div className="faq-item" key={item.q}>
            <button
              className="faq-item__q"
              aria-expanded={open}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span>{item.q}</span>
              <span className="faq-item__icon" aria-hidden="true">+</span>
            </button>
            <div
              className="faq-item__a"
              id={`faq-panel-${i}`}
              data-open={open}
            >
              <p style={{ margin: 0 }}>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
