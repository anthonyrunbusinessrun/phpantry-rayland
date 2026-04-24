const TEAM = [
  {
    src:   '/Rayland.jpeg',
    name:  'Ray Land',
    title: 'Chief Executive Officer / System Owner',
    tags:  ['Founder', 'CEO'],
    accent: '#0E7490',
  },
  {
    src:   '/Ereika.jpeg',
    name:  'Ereika Espiritu',
    title: 'Administration; FEMA–APL Coordination; ActionOps / Secretary Function',
    tags:  ['Administration', 'Operations'],
    accent: '#3B1FA3',
  },
  {
    src:   '/Kaye.png',
    name:  'Kaye Degayo',
    title: 'Philippines Field Operations',
    tags:  ['Field Ops', 'Philippines'],
    accent: '#0E7490',
  },
  {
    src:   '/Joseph.jpg',
    name:  'Anthony Duran',
    title: 'Softwares / Design / Technology',
    tags:  ['Tech', 'Design'],
    accent: '#3B1FA3',
  },
]

export default function TeamSection() {
  return (
    <section style={{
      padding: '100px 5%',
      background: 'var(--bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Ambient glows */}
      <div style={{ position:'absolute', top:'10%', left:'-5%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,116,144,0.06),transparent 70%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'10%', right:'-5%', width:350, height:350, borderRadius:'50%', background:'radial-gradient(circle,rgba(59,31,163,0.07),transparent 70%)', pointerEvents:'none' }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <div className="apple-fade" style={{ textAlign: 'center', marginBottom: 64 }}>
          <span className="section-tag" style={{ display: 'block', marginBottom: 10 }}>The People Behind the Mission</span>
          <h2 style={{ fontSize: 'clamp(28px,4vw,50px)', color: 'var(--text)', lineHeight: 1.1, marginBottom: 14 }}>
            Meet the <span className="text-teal">Team</span>
          </h2>
          <div style={{ width: 80, height: 2, background: 'linear-gradient(90deg,transparent,#0E7490,#3B1FA3,transparent)', margin: '0 auto 18px' }} />
          <p style={{ fontSize: 15, color: 'var(--text-muted)', maxWidth: 480, margin: '0 auto', lineHeight: 1.8, fontWeight: 300 }}>
            Dedicated individuals working every day to make PHPantry Philippines a reality — one community at a time.
          </p>
        </div>

        {/* Team grid */}
        <div className="grid-team" style={{ gap: 20 }}>
          {TEAM.map((member, i) => (
            <div
              key={i}
              className="apple-fade card"
              data-delay={`${i * 80}`}
              style={{ padding: '36px 24px 28px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}
            >
              {/* Top accent line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,transparent,${member.accent},transparent)` }} />

              {/* Chrome circular avatar */}
              <div style={{ position: 'relative', width: 110, height: 110, margin: '0 auto 20px' }}>
                {/* Spinning chrome ring */}
                <div style={{
                  position: 'absolute', inset: -3, borderRadius: '50%',
                  background: 'conic-gradient(from 0deg, #90A4AE 0%, #ECEFF1 20%, #607D8B 35%, #CFD8DC 50%, #90A4AE 65%, #ECEFF1 80%, #78909C 100%)',
                  animation: 'chromeSpin 10s linear infinite',
                  zIndex: 1,
                }} />
                {/* Gap */}
                <div style={{ position:'absolute', inset:-1, borderRadius:'50%', background:'var(--bg-card)', zIndex:2 }} />
                {/* Inner glow */}
                <div style={{ position:'absolute', inset:2, borderRadius:'50%', boxShadow:`0 0 16px ${member.accent}55`, zIndex:3 }} />
                {/* Photo */}
                <div style={{ position:'absolute', inset:3, borderRadius:'50%', overflow:'hidden', zIndex:4, background:'var(--bg-card2)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={member.src}
                    alt={member.name}
                    style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block' }}
                  />
                </div>
              </div>

              {/* Name */}
              <div style={{ fontFamily:'var(--font-script)', fontSize:22, color:'var(--text)', lineHeight:1.1, marginBottom:8 }}>
                {member.name}
              </div>

              {/* Title */}
              <div style={{ fontFamily:'var(--font-cond)', fontSize:11, fontWeight:600, color:'var(--text-muted)', lineHeight:1.6, letterSpacing:'0.03em', marginBottom:16 }}>
                {member.title}
              </div>

              {/* Tags */}
              <div style={{ display:'flex', gap:6, justifyContent:'center', flexWrap:'wrap' }}>
                {member.tags.map(tag => (
                  <span key={tag} style={{
                    fontFamily:'var(--font-cond)', fontSize:9, fontWeight:700,
                    letterSpacing:'0.14em', textTransform:'uppercase',
                    padding:'3px 10px', borderRadius:3,
                    background:`${member.accent}18`,
                    color: member.accent === '#0E7490' ? '#67E8F9' : '#A78BFA',
                    border:`1px solid ${member.accent}35`,
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes chromeSpin {
          0%   { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @media(max-width: 900px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media(max-width: 500px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
