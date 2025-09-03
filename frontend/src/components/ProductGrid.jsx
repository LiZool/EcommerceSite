import React, { useState } from "react";

/**
 * Simple, self-contained ProductGrid that:
 * - shows a grid on >= 768px (tablet/desktop)
 * - shows a horizontal, scrollable row on < 768px (mobile)
 *
 * Usage: <ProductGrid products={[{id, name, image, price}, ...]} />
 */
const ProductGrid = ({ products = [] }) => {
  const hoverColors = ["#D3D3D3", "#B6D0E2", "#9FE2BF", "#FEF3C7", "#e5d0ff", "#FAA0A0"];
  const overlayColors = ["#818589", "#4682B4", "#10B981", "#FFD700", "#bf8bff", "#EC5800"]; // cleaned

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="pg-wrap" style={{ width: "100%", padding: "0 16px", boxSizing: "border-box" }}>
      {/* Inline CSS so this works regardless of your build/Tailwind */}
      <style>{`
        .pg-desktop { display: none; gap: 20px; }
        .pg-mobile { display: block; overflow-x: auto; -webkit-overflow-scrolling: touch; padding: 12px 0; }
        .pg-row { display: flex; gap: 16px; align-items: stretch; }
        .pg-card {
          background: #F3F4F6;
          border-radius: 14px;
          box-shadow: 0 6px 18px rgba(2,6,23,0.06);
          flex: 0 0 auto;
          min-width: 220px;
          overflow: hidden;
          transition: transform .22s ease, box-shadow .22s ease;
        }
        .pg-card:hover { transform: translateY(-6px); box-shadow: 0 12px 30px rgba(2,6,23,0.12); }
        .pg-card:hover .pg-overlay { opacity: 0.95; }
        .pg-img-wrap { height: 220px; display:flex; align-items:center; justify-content:center; position:relative; }
        .pg-img { max-width:150px; max-height:180px; object-fit:contain; display:block; }
        .pg-overlay {
          position:absolute; inset:0; display:flex; align-items:center; justify-content:center;
          opacity:0; transition:opacity .9s ease; pointer-events:none;
        }
        .pg-card:hover .pg-overlay { opacity: 0.8; }
        .pg-info { padding: 12px; text-align:center; }
        .pg-title { font-weight:600; margin:6px 0 4px; font-size:16px; }
        .pg-price { color:#334155; font-weight:700; }

        /* Desktop / tablet breakpoint: >=768px */
        @media (min-width: 768px) {
          .pg-desktop { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
          /* make grid 4 columns on wide screens */
          @media (min-width: 1100px) {
            .pg-desktop { grid-template-columns: repeat(4, 1fr); }
          }
          .pg-mobile { display: none; }
          .pg-card { min-width: auto; }
        }

        /* Scroll snapping (nice on mobile) */
        .pg-mobile { scroll-snap-type: x mandatory; }
        .pg-card { scroll-snap-align: start; }

        /* Optional: hide default scrollbar on some platforms (still usable) */
        .pg-mobile::-webkit-scrollbar { height: 8px; }
        .pg-mobile::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.12); border-radius: 8px; }
      
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Only hide image on desktop hover */
        @media (min-width: 768px) {
          .pg-card:hover .pg-img { opacity: 0; } /*  hides image */
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Bounce only when hovering */
        .pg-card:hover .pg-img {
          animation: bounce 0.6s ease;
        }
      `}
      </style>

      {/* DESKTOP / TABLET GRID */}
      <div className="pg-desktop" role="list">
        {products.map((p, i) => {
          const hoverColor = hoverColors[i % hoverColors.length];
          const overlayColor = overlayColors[i % overlayColors.length];
          return (
            <div
              key={p.id ?? i}
              className="pg-card"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ background: hoveredIndex === i ? hoverColor : undefined }}
              role="listitem"
            >
              <div className="pg-img-wrap">
              {i === 0 ? (
                // 👉 First grid is just text in the middle
                <div style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "700",
                  fontSize: "18px",
                  color: "#111"
                }}>
                  Featured Item
                </div>
              ) : (
                // 👉 Normal product with image
                <>
                  {p.image ? (
                    <img src={p.image} alt={p.name} className="pg-img" />
                  ) : (
                    <div style={{ width: 120, height: 120, background: "#e6e6e6", borderRadius: 8 }} />
                  )}
                  <div className="pg-overlay" style={{ background: overlayColor }}>
                    <span style={{ color: "white", fontWeight: 700 }}>{p.name}</span>
                  </div>
                </>
              )}
            </div>
              <div className="pg-info">
                <div className="pg-title">{p.name}</div>
                <div className="pg-price">{p.price ?? ""}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MOBILE HORIZONTAL SCROLL */}
      <div className="pg-mobile" aria-hidden={false}>
        <div className="pg-row">
          {products.map((p, i) => (
            <div className="pg-card" key={`m-${p.id ?? i}`}>
              <div className="pg-img-wrap">
                {i === 0 ? (
                  <div style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "18px",
                    color: "#111",
                    textAlign: "center",
                    padding: "0 8px",
                  }}>
                    Featured Item
                  </div>
                ) : p.image ? (
                  <img src={p.image} alt={p.name} className="pg-img" />
                ) : (
                  <div style={{ width: 120, height: 120, background: "#e6e6e6", borderRadius: 8 }} />
                )}
              </div>
              <div className="pg-info">
                <div className="pg-title">{p.name}</div>
                <div className="pg-price">{p.price ?? ""}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;