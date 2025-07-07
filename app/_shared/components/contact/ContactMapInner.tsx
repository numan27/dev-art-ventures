"use client";
import Map, { Marker, Popup } from "@vis.gl/react-maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useState } from "react";

const LOCATIONS = [
  {
    name: "Vienna Office",
    address: "Mariahilfer Straße 123, 1060 Vienna, Austria",
    phone: "+43 1 234 5678",
    email: "vienna@coreitventures.com",
    lat: 48.2082,
    lng: 16.3738,
  },
  {
    name: "Budapest Office",
    address: "Andrássy út 45, 1061 Budapest, Hungary",
    phone: "+36 1 234 5678",
    email: "budapest@coreitventures.com",
    lat: 47.4979,
    lng: 19.0402,
  },
  {
    name: "Berlin Office",
    address: "Unter den Linden 77, 10117 Berlin, Germany",
    phone: "+49 30 1234 5678",
    email: "berlin@coreitventures.com",
    lat: 52.52,
    lng: 13.405,
  },
];

export default function ContactMapInner() {
  const [popup, setPopup] = useState<number | null>(null);

  return (
    <div
      style={{
        width: "100%",
        height: 600,
        position: "relative",
        background:
          "linear-gradient(to right, rgba(15,118,178,0.18), rgba(65,200,241,0.18))",
        borderRadius: 18,
      }}
    >
      <Map
        initialViewState={{
          longitude: 16.5,
          latitude: 49.5,
          zoom: 4.5,
        }}
        style={{ width: "100%", height: 600, borderRadius: 18, zIndex: 1 }}
        mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
        mapLib={import("maplibre-gl")}
      >
        {LOCATIONS.map((loc, i) => (
          <Marker
            key={i}
            longitude={loc.lng}
            latitude={loc.lat}
            anchor="bottom"
            onClick={(e) => {
              e.originalEvent.stopPropagation();
              setPopup(i);
            }}
          >
            <div
              style={{
                width: 24,
                height: 24,
                background: "#18417E",
                borderRadius: "50%",
                border: "3px solid white",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
                cursor: "pointer",
              }}
            />
          </Marker>
        ))}
        {popup !== null && (
          <>
            <style>{`
              .maplibregl-popup-close-button {
                font-size: 1.2rem !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                width: 1.5rem !important;
                height: 1.5rem !important;
                line-height: 2.5rem !important;
                top: 0.1rem !important;
                right: 0.1rem !important;
                color: #000 !important;
              }
            `}</style>
            <Popup
              longitude={LOCATIONS[popup].lng}
              latitude={LOCATIONS[popup].lat}
              anchor="top"
              onClose={() => setPopup(null)}
              closeOnClick={false}
            >
              <div style={{ color: "#222" }}>
                <strong>{LOCATIONS[popup].name}</strong>
                <div>{LOCATIONS[popup].address}</div>
                <div>
                  <a
                    href={`tel:${LOCATIONS[popup].phone.replace(
                      /[^+\d]/g,
                      ""
                    )}`}
                    style={{ color: "#18417E", textDecoration: "underline" }}
                  >
                    {LOCATIONS[popup].phone}
                  </a>
                </div>
                <div>
                  <a
                    href={`mailto:${LOCATIONS[popup].email}`}
                    style={{ color: "#18417E", textDecoration: "underline" }}
                  >
                    {LOCATIONS[popup].email}
                  </a>
                </div>
              </div>
            </Popup>
          </>
        )}
      </Map>
    </div>
  );
}
