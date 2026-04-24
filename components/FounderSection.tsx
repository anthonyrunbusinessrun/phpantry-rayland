export default function FounderSection() {
  return (
    <section style={{ padding:'100px 5%', background:'var(--bg-card2)', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:'20%', left:'-5%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,116,144,0.07),transparent 70%)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'10%', right:'-5%', width:350, height:350, borderRadius:'50%', background:'radial-gradient(circle,rgba(59,31,163,0.08),transparent 70%)', pointerEvents:'none' }} />

      <div style={{ maxWidth:1200, margin:'0 auto' }}>
        <div className="apple-fade" style={{ textAlign:'center', marginBottom:52 }}>
          <span className="section-tag" style={{ display:'block', marginBottom:10 }}>The Founder</span>
          <h2 style={{ fontSize:'clamp(26px,4vw,48px)', color:'var(--text)', lineHeight:1.1, marginBottom:12 }}>
            The Man Behind <span className="text-teal">the Mission</span>
          </h2>
          <div style={{ width:40, height:2, background:'linear-gradient(90deg,#0E7490,#3B1FA3,transparent)', margin:'0 auto' }} />
        </div>

        {/* Card — uses grid-founder class for responsive collapse */}
        <div className="apple-fade grid-founder" style={{
          background:'var(--bg-card)',
          border:'1px solid var(--border)',
          borderRadius:12,
          padding:'48px 52px',
          position:'relative',
          overflow:'hidden',
        }}>
          <div style={{ position:'absolute', top:0, left:0, width:'100%', height:3, background:'linear-gradient(90deg,#0E7490,#3B1FA3,#C62828,transparent)' }} />

          {/* ── AVATAR COLUMN ── */}
          <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:18 }}>
            <div style={{ position:'relative', width:180, height:180 }}>
              {/* Spinning chrome ring */}
              <div style={{ position:'absolute', inset:-4, borderRadius:'50%', background:'conic-gradient(from 0deg,#B0BEC5 0%,#ECEFF1 15%,#708090 30%,#E8E8E8 45%,#C0C0C0 60%,#ECEFF1 75%,#90A4AE 90%,#B0BEC5 100%)', animation:'chromeSpin 8s linear infinite', zIndex:1 }} />
              <div style={{ position:'absolute', inset:-1, borderRadius:'50%', background:'var(--bg-card)', zIndex:2 }} />
              <div style={{ position:'absolute', inset:2, borderRadius:'50%', boxShadow:'0 0 20px rgba(14,116,144,0.35),inset 0 0 20px rgba(59,31,163,0.15)', zIndex:3 }} />
              <div style={{ position:'absolute', inset:4, borderRadius:'50%', overflow:'hidden', zIndex:4, background:'linear-gradient(145deg,#0E5F8A,#3B1FA3)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/Rayland.jpeg" alt="Ray Land — Founder" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', display:'block' }} />
              </div>
              <div style={{ position:'absolute', bottom:4, right:-8, zIndex:5, background:'linear-gradient(135deg,#0E7490,#3B1FA3)', border:'2px solid var(--bg-card)', borderRadius:100, padding:'4px 10px' }}>
                <span style={{ fontSize:10, fontFamily:'var(--font-cond)', fontWeight:700, letterSpacing:'0.12em', textTransform:'uppercase', color:'white' }}>Founder</span>
              </div>
            </div>

            <div style={{ textAlign:'center' }}>
              <div style={{ fontFamily:'var(--font-script)', fontSize:24, color:'var(--text)', lineHeight:1.1, marginBottom:4 }}>Ray Land</div>
              <div style={{ fontFamily:'var(--font-cond)', fontSize:10, fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(14,116,144,0.8)' }}>@itsRayLand</div>
            </div>

            <div style={{ display:'flex', flexWrap:'wrap', gap:6, justifyContent:'center' }}>
              {['Entrepreneur','Philanthropist','Speaker'].map(tag=>(
                <span key={tag} style={{ fontFamily:'var(--font-cond)', fontSize:9, fontWeight:700, letterSpacing:'0.14em', textTransform:'uppercase', padding:'3px 10px', borderRadius:3, background:'rgba(14,116,144,0.15)', color:'#67E8F9', border:'1px solid rgba(14,116,144,0.3)' }}>{tag}</span>
              ))}
            </div>

            <a href="https://www.rayland.com" target="_blank" rel="noopener noreferrer" style={{ display:'inline-flex', alignItems:'center', gap:6, fontFamily:'var(--font-cond)', fontSize:10, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--text-muted)', textDecoration:'none', border:'1px solid var(--border)', borderRadius:4, padding:'7px 14px' }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              rayland.com
            </a>
          </div>

          {/* ── BIO COLUMN ── */}
          <div>
            <div style={{ width:32, height:2, background:'#0E7490', marginBottom:18 }} />
            <p style={{ fontSize:15, color:'var(--text)', lineHeight:1.9, marginBottom:16, fontWeight:300 }}>
              <strong style={{ fontFamily:'var(--font-cond)', fontWeight:700, letterSpacing:'0.05em' }}>RAY LAND</strong> is an award-winning American entrepreneur with experience across a broad range of industries. An innovator, speaker, and builder — Land has founded and led multiple companies spanning transportation, technology, manufacturing, and community impact.
            </p>
            <p style={{ fontSize:14.5, color:'var(--text-muted)', lineHeight:1.9, marginBottom:22, fontWeight:300 }}>
              Beyond business, Ray is driven by a deep belief in people and community. PHPantry Philippines is the embodiment of that belief — a movement rooted in compassion, built on faith, and sustained by the generosity of neighbors helping neighbors.
            </p>
            <div style={{ borderLeft:'2px solid #0E7490', paddingLeft:18, marginBottom:24 }}>
              <p style={{ fontFamily:'var(--font-cond)', fontStyle:'italic', fontSize:16, color:'rgba(255,255,255,0.85)', lineHeight:1.6 }}>
                "No Filipino should have to worry about their next meal. That's not just a goal — it's a responsibility we all share."
              </p>
              <div style={{ fontFamily:'var(--font-cond)', fontSize:10, fontWeight:600, letterSpacing:'0.14em', textTransform:'uppercase', color:'var(--text-muted)', marginTop:8 }}>— Ray Land</div>
            </div>
            <div style={{ display:'flex', gap:18, flexWrap:'wrap', marginBottom:28 }}>
              {[{icon:'🏆',label:'Award-Winning Entrepreneur'},{icon:'🎤',label:'International Speaker'},{icon:'🤝',label:'Community Leader'}].map((item,i)=>(
                <div key={i} style={{ display:'flex', alignItems:'center', gap:8 }}>
                  <span style={{ fontSize:14 }}>{item.icon}</span>
                  <span style={{ fontFamily:'var(--font-cond)', fontSize:10, fontWeight:600, letterSpacing:'0.08em', color:'var(--text-muted)', textTransform:'uppercase' }}>{item.label}</span>
                </div>
              ))}
            </div>
            <a href="https://www.rayland.com/about" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
              Full Story
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes chromeSpin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
        @media(max-width:900px){
          .grid-founder{padding:32px 24px !important}
          .grid-founder > div:first-child{margin-bottom:8px}
        }
      `}</style>
    </section>
  )
}
