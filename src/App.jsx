import { useState } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

const PEAKS = [
  { id: 'manimahesh', name: 'Manimahesh Kailash', tag: 'Chamba Valley', top: '38%', left: '10%' },
  { id: 'adi', name: 'Adi Kailash', tag: 'Sacred Summit', top: '32%', left: '68%' },
  { id: 'mount', name: 'Mount Kailash', tag: 'Kailash Mansarovar', top: '28%', left: '45%' },
  { id: 'kinnaur', name: 'Kinnaur Kailash', tag: 'Sacred Range', top: '40%', left: '25%' },
  { id: 'shrikhand', name: 'Shrikhand Mahadev', tag: 'Sacred Trek', top: '35%', left: '55%' },
]

function App() {
  const [selected, setSelected] = useState(null)
  const [interacting, setInteracting] = useState(false)

  return (
    <div style={{ background: '#0b1520', color: '#f5f5f0', fontFamily: 'Archivo, sans-serif' }}>
      <nav
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.1rem 1.5rem',
        }}
      >
        <span style={{ fontWeight: 700, letterSpacing: '0.08em', fontSize: '0.95rem' }}>
          PANCH KAILASH
        </span>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', opacity: 0.75 }}>MENU</span>
      </nav>

      <div style={{ position: 'relative', width: '100%', height: '58vh', overflow: 'hidden' }}>
        <TransformWrapper
          initialScale={1}
          minScale={1}
          maxScale={3}
          centerOnInit
          wheel={{ step: 0.15 }}
          pinch={{ step: 5 }}
          doubleClick={{ mode: 'zoomIn' }}
          onPanningStart={() => setInteracting(true)}
          onPanningStop={() => setInteracting(false)}
          onZoomStart={() => setInteracting(true)}
          onZoomStop={() => setInteracting(false)}
        >
          <TransformComponent
            wrapperStyle={{ width: '100%', height: '100%' }}
            contentStyle={{ width: '100%', height: '100%' }}
          >
            <div style={{ position: 'relative', width: '100%', height: '58vh' }}>
              <img
                src="/panch-kailash/0db44277-5b9b-4617-9a13-0b1ba8492cb0.webp"
                alt="Panch Kailash panorama"
                draggable="false"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  userSelect: 'none',
                }}
              />

              <svg
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
                preserveAspectRatio="none"
              >
                <polyline
                  points={PEAKS.map((p) => `${p.left},${p.top}`).join(' ')}
                  fill="none"
                  stroke="rgba(212, 175, 120, 0.85)"
                  strokeWidth="2"
                  strokeDasharray="2,8"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>

              {PEAKS.map((peak) => (
                <button
                  key={peak.id}
                  onClick={() => setSelected(peak)}
                  aria-label={peak.name}
                  style={{
                    position: 'absolute',
                    top: peak.top,
                    left: peak.left,
                    transform: 'translate(-50%, -50%)',
                    width: 22,
                    height: 22,
                    borderRadius: '50%',
                    background: 'rgba(212, 175, 120, 0.9)',
                    border: '2px solid #f5f5f0',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </TransformComponent>
        </TransformWrapper>

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '1.5rem',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.45))',
            opacity: interacting ? 0.12 : 1,
            transition: 'opacity 0.2s ease',
            pointerEvents: 'none',
          }}
        >
          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(2rem, 10vw, 3.8rem)',
              letterSpacing: '0.02em',
              lineHeight: 1,
              margin: 0,
              textTransform: 'uppercase',
            }}
          >
            Panch Kailash
          </h1>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(1rem, 3.5vw, 1.3rem)',
              fontStyle: 'italic',
              opacity: 0.9,
              marginTop: '0.6rem',
            }}
          >
            A Journey Across Five Sacred Peaks
          </p>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: '0.75rem',
            left: 0,
            right: 0,
            textAlign: 'center',
            fontSize: '0.7rem',
            letterSpacing: '0.1em',
            opacity: interacting ? 0 : 0.55,
            transition: 'opacity 0.2s ease',
            pointerEvents: 'none',
          }}
        >
          ↔ DRAG • PINCH TO ZOOM
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '1.75rem 1.5rem' }}>
        <button
          style={{
            padding: '0.9rem 2rem',
            fontSize: '0.85rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            background: 'transparent',
            border: '1px solid #f5f5f0',
            color: '#f5f5f0',
            borderRadius: '2px',
            cursor: 'pointer',
            textTransform: 'uppercase',
          }}
        >
          Explore The Five
        </button>
      </div>

      <p
        style={{
          textAlign: 'center',
          fontSize: '0.7rem',
          letterSpacing: '0.12em',
          opacity: 0.5,
          padding: '0 1.5rem 2rem',
        }}
      >
        FOUNDER — AAKASH KAINTHLA
      </p>

      {selected && (
        <div
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(11, 21, 32, 0.97)',
            borderTop: '1px solid rgba(245,245,240,0.2)',
            padding: '1.25rem 1.5rem 1.75rem',
            zIndex: 10,
          }}
        >
          <button
            onClick={() => setSelected(null)}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '0.75rem',
              right: '1rem',
              background: 'none',
              border: 'none',
              color: '#f5f5f0',
              fontSize: '1.1rem',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
          <h2 style={{ fontWeight: 700, fontSize: '1.2rem', margin: 0 }}>{selected.name}</h2>
          <p style={{ opacity: 0.75, fontSize: '0.9rem', marginTop: '0.4rem' }}>{selected.tag}</p>
          <p style={{ opacity: 0.6, fontSize: '0.85rem', marginTop: '0.75rem' }}>
            Full destination details coming soon.
          </p>
        </div>
      )}
    </div>
  )
}

export default App
