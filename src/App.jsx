function App() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        backgroundImage: 'url(/panch-kailash/0db44277-5b9b-4617-9a13-0b1ba8492cb0.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#f5f5f0',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.6))',
        }}
      />

      <div style={{ position: 'relative', padding: '1.5rem' }}>
        <h1
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2rem, 8vw, 3.5rem)',
            letterSpacing: '0.05em',
            marginBottom: '0.75rem',
          }}
        >
          PANCH KAILASH
        </h1>
        <p
          style={{
            fontSize: 'clamp(1rem, 3vw, 1.3rem)',
            opacity: 0.9,
            marginBottom: '2.5rem',
          }}
        >
          A Journey Across Five Sacred Peaks
        </p>

        <button
          style={{
            padding: '0.9rem 2rem',
            fontSize: '1rem',
            letterSpacing: '0.08em',
            background: 'transparent',
            border: '1px solid #f5f5f0',
            color: '#f5f5f0',
            borderRadius: '2px',
            cursor: 'pointer',
          }}
        >
          EXPLORE THE FIVE
        </button>
      </div>
    </div>
  )
}

export default App
