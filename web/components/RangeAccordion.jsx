"use client";

import { useState } from "react";
import ProductImage from "./ProductImage";

export default function RangeAccordion({ ranges, typeLabel }) {
  const [openId, setOpenId] = useState(ranges[0]?._id ?? null);

  if (ranges.length === 0) {
    return (
      <p className="text-sm text-ink-muted">
        Ranges are being added here — check back soon, or visit the showroom to see the full
        collection in person.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {ranges.map((range) => {
        const isOpen = openId === range._id;
        const panelId = `range-panel-${range._id}`;
        const buttonId = `range-button-${range._id}`;
        const images = [...(range.images ?? [])].sort((a, b) => a.order - b.order);

        return (
          <div key={range._id} className="card border border-black/5 bg-white">
            <h3 className="m-0">
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : range._id)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span>
                  <span className="text-lg font-medium text-ink">{range.brand}</span>
                  <span className="ml-3 text-sm text-ink-muted">{range.origin}</span>
                </span>
                <span aria-hidden="true" className={`text-2xl text-ink-muted transition-transform ${isOpen ? "rotate-45" : ""}`}>
                  +
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen} className="px-6 pb-8">
              <p className="max-w-2xl text-left text-sm leading-relaxed text-ink-muted">
                {range.description}
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {images.length > 0 ? (
                  images.map((image, idx) => <ProductImage key={idx} image={image} ratio="4/3" />)
                ) : (
                  <ProductImage ratio="4/3" fallbackLabel={`${range.brand} ${typeLabel}`} />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
