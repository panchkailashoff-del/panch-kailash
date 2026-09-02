cat > /home/claude/panch-kailash/src/App.jsx << 'EOF'
import { useState } from 'react'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

const PEAKS = [
  { id: 'kinnaur', name: 'Kinnaur Kailash', tag: 'Sacred Peak' },
  { id: 'manimahesh', name: 'Manimahesh Kailash', tag: 'Chamba Valley' },
  { id: 'adi', name: 'Adi Kailash', tag: 'Sacred Summit' },
  { id: 'shrikhand', name: 'Shrikhand Mahadev', tag: 'Sacred Peak' },
  { id: 'mount', name: 'Mount Kailash', tag: 'Kailash Mansarovar' },
]

function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div style={{ background: '#05070a', minHeight: '100vh', padding: '0.85rem', fontFamily: 'Archivo, sans-serif' }}>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: 'calc(100vh - 1.7rem)',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 25px 60px rgba(0,0,0,0.55)',
          color: '#f5f5f0',
        }}
      >
        {/* Pannable / zoomable background image */}
        <div style={{ position: 'absolute', inset: 0 }}>
          <TransformWrapper
            initialScale={1.6}
            minScale={1}
            maxScale={4}
            centerOnInit
            wheel={{ step: 0.15 }}
            pinch={{ step: 5 }}
            doubleClick={{ mode: 'zoomIn' }}
            panning={{ velocityDisabled: true }}
          >
            <TransformComponent
              wrapperStyle={{ width: '100%', height: '100%' }}
              contentStyle={{ width: '100%' }}
            >
              <img
                src="/panch-kailash/0db44277-5b9b-4617-9a13-0b1ba8492cb0.webp"
                alt="Panch Kailash panorama"
                draggable="false"
                style={{ width: '100%', height: 'auto', display: 'block', userSelect: 'none' }}
              />
            </TransformComponent>
          </TransformWrapper>
        </div>

        {/* Legibility gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.1) 40%, rgba(0,0,0,0.6))',
            pointerEvents: 'none',
          }}
        />

        {/* Nav */}
        <nav
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.5rem',
            zIndex: 2,
          }}
        >
          <span style={{ fontWeight: 700, letterSpacing: '0.06em', fontSize: '0.9rem' }}>
            PANCH KAILASH
          </span>
          <div style={{ display: 'flex', gap: '1.1rem', fontSize: '0.65rem', letterSpacing: '0.1em', opacity: 0.85 }}>
            <span>DESTINATIONS</span>
            <span>JOURNEY</span>
            <span>ABOUT</span>
          </div>
        </nav>

        {/* Headline */}
        <div style={{ position: 'absolute', top: '24%', left: '1.5rem', right: '1.5rem', zIndex: 2, pointerEvents: 'none' }}>
          <p
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 4vw, 1.4rem)',
              opacity: 0.9,
              margin: 0,
            }}
          >
            A Journey Across The
          </p>
          <h1
            style={{
              fontWeight: 900,
              fontSize: 'clamp(2.5rem, 13vw, 5rem)',
              lineHeight: 0.95,
              textTransform: 'uppercase',
              margin: '0.2rem 0 0',
            }}
          >
            Five Sacred
            <br />
            Peaks
          </h1>
        </div>

        {/* Explore link */}
        <div style={{ position: 'absolute', bottom: '5.5rem', left: 0, right: 0, textAlign: 'center', zIndex: 2 }}>
          <button
            style={{
              background: 'none',
              border: 'none',
              color: '#f5f5f0',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            EXPLORE THE FIVE →
          </button>
        </div>

        {/* Vertical founder credit, right edge */}
        <div
          style={{
            position: 'absolute',
            right: '1rem',
            top: '50%',
            transform: 'translateY(-50%) rotate(90deg)',
            transformOrigin: 'right center',
            fontSize: '0.62rem',
            letterSpacing: '0.15em',
            opacity: 0.6,
            whiteSpace: 'nowrap',
            zIndex: 2,
          }}
        >
          FOUNDER — AAKASH KAINTHLA
        </div>

        {/* Peak selector dots */}
        <div
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            zIndex: 2,
          }}
        >
          {PEAKS.map((peak) => (
            <button
              key={peak.id}
              onClick={() => setSelected(peak)}
              aria-label={peak.name}
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                border: '1px solid #f5f5f0',
                background: selected?.id === peak.id ? '#f5f5f0' : 'transparent',
                padding: 0,
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '1.5rem',
            right: '1.25rem',
            fontSize: '0.6rem',
            letterSpacing: '0.15em',
            opacity: 0.6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.3rem',
            zIndex: 2,
          }}
        >
          <span>SCROLL</span>
          <span>↓</span>
        </div>
      </div>

      {selected && (
        <div
          style={{
            position: 'fixed',
            left: '0.85rem',
            right: '0.85rem',
            bottom: '0.85rem',
            background: 'rgba(11, 21, 32, 0.97)',
            borderRadius: '16px',
            padding: '1.25rem 1.5rem 1.5rem',
            zIndex: 10,
            color: '#f5f5f0',
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
EOF
echo done
