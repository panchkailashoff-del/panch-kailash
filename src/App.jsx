import { useState } from 'react'

const PEAKS = [
  { id: 'manimahesh', name: 'Manimahesh Kailash', tag: 'Chamba Valley', top: '58%', left: '10%' },
  { id: 'adi', name: 'Adi Kailash', tag: 'Sacred Summit', top: '38%', left: '78%' },
  { id: 'mount', name: 'Mount Kailash', tag: 'Kailash Mansarovar', top: '30%', left: '50%' },
  { id: 'kinnaur', name: 'Kinnaur Kailash', tag: 'Sacred Range', top: '48%', left: '30%' },
  { id: 'shrikhand', name: 'Shrikhand Mahadev', tag: 'Sacred Trek', top: '45%', left: '62%' },
]

function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        backgroundImage: 'url(/0db44277-5b9b-4617-9a13-0b1ba8492cb0.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontFamily: 'Archivo, sans-serif',
        color: '#f5f5f0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.6))',
        }}
      />

      <nav
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.2rem 1.5rem',
        }}
      >
        <span style={{ fontWeight: 700, letterSpacing: '0.08em', fontSize: '0.95rem' }}>
          PANCH KAILASH
        </span>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', opacity: 0.75 }}>
          MENU
        </span>
      </nav>

      <div style={{ position: 'relative', textAlign: 'center', padding: '3rem 1.5rem 2rem' }}>
        <h1
          style={{
            fontWeight: 900,
            fontSize: 'clamp(2.3rem, 11vw, 4.5rem)',
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
            fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
            fontStyle: 'italic',
            opacity: 0.9,
            marginTop: '0.75rem',
          }}
        >
          A Journey Across Five Sacred Peaks
        </p>
      </div>

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

      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', paddingBottom: '2.5rem' }}>
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

      <div
        style={{
          position: 'absolute',
          right: '0.75rem',
          top: '50%',
          transform: 'translateY(-50%) rotate(90deg)',
          transformOrigin: 'right center',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          opacity: 0.6,
          whiteSpace: 'nowrap',
        }}
      >
        FOUNDER — AAKASH KAINTHLA
      </div>

      {selected && (
        <div
          style={{
            position: 'fixed',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(11, 21, 32, 0.96)',
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
