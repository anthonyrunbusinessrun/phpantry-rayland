import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function About() {
  return (
    <>
      <ScrollReveal />
      <style>{`
        .guide-check { width:22px; height:22px; border-radius:50%; background:rgba(255,255,255,0.12); border:1px solid rgba(255,255,255,0.2); display:flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:1px; }
      `}</style>

      {/* HERO */}
      <section style={{ paddingTop:120, paddingBottom:80, paddingLeft:'5%', paddingRight:'5%', background:'linear-gradient(112deg,#05102A 0%,#0D2468 35%,#1565C0 65%,#C62828 100%)', position:'relative', overflow:'hidden' }}>
        <div className="grid-overlay" />
        <div style={{ maxWidth:1200, margin:'0 auto', position:'relative', zIndex:1 }}>
          <span className="section-tag" style={{ color:'rgba(255,255,255,0.6)' }}>About Us</span>
          <h1 style={{ fontSize:'clamp(36px,6vw,80px)', color:'white', lineHeight:1.05, maxWidth:700 }}>
            A Growing Movement<br />of <span style={{ fontFamily:'var(--font-script)', fontWeight:400 }}>Hope</span>
          </h1>
          <div style={{ width:40, height:2, background:'var(--red)', marginTop:20, marginBottom:24 }} />
          <p style={{ fontSize:17, color:'rgba(255,255,255,0.7)', maxWidth:580, lineHeight:1.8, fontWeight:300 }}>
            PHPantry Philippines is a heartfelt initiative founded by Raymond Land III, built on the belief that no Filipino should have to worry about their next meal.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section style={{ padding:'100px 5%', background:'var(--bg)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'start' }}>
          <div>
            <span className="section-tag">The Story Behind the Pantry</span>
            <h2 style={{ fontSize:'clamp(28px,4vw,44px)', color:'var(--text)', marginBottom:16 }}>Born from <span style={{ background:'linear-gradient(135deg,#EF5350,#FFCDD2)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Compassion</span></h2>
            <div className="accent-line" />
            <p style={{ fontSize:15, color:'var(--text-muted)', lineHeight:1.85, marginBottom:20 }}>PHPantry began as a response to the daily struggles of Filipino families trying to put food on the table. What started as a small act of compassion quickly grew into a community movement.</p>
            <p style={{ fontSize:15, color:'var(--text-muted)', lineHeight:1.85, marginBottom:20 }}>With churches opening their doors and volunteers offering their time, each pantry became more than a place for food — it became a space of hope, dignity, and connection.</p>
            <p style={{ fontSize:15, color:'var(--text-muted)', lineHeight:1.85 }}>More than just giving, PHPantry is about sharing. It brings together communities, churches, volunteers, and partners to lift each other up.</p>

            {/* Timeline */}
            <div style={{ marginTop:48, position:'relative', paddingLeft:32 }}>
              <div style={{ position:'absolute', left:9, top:8, bottom:8, width:2, background:'linear-gradient(to bottom,var(--blue),rgba(198,40,40,0.3))' }} />
              {[
                { title:'A Seed of Compassion',    text:"One person's response to hunger — a simple act that refused to look away." },
                { title:'Churches Open Their Doors', text:'Local churches stepped forward as trusted community anchors.' },
                { title:'Volunteers Join',           text:'A growing network of hearts giving time, resources, and energy.' },
                { title:'A Movement Grows',          text:'Today, PHPantry Philippines reaches families across the nation.', red:true },
              ].map((item, i) => (
                <div key={i} className="reveal" data-delay={`${i * 100}`} style={{ display:'flex', gap:20, marginBottom:28, position:'relative' }}>
                  <div style={{ position:'absolute', left:-32+9-8, top:4, width:18, height:18, borderRadius:'50%', background: item.red ? 'var(--red)' : 'var(--blue)', border:'2px solid var(--bg)', zIndex:1, boxShadow:`0 0 10px rgba(${item.red ? '198,40,40' : '21,101,192'},0.4)` }} />
                  <div>
                    <div style={{ fontFamily:'var(--font-cond)', fontSize:16, fontWeight:700, color:'var(--text)', marginBottom:6 }}>{item.title}</div>
                    <div style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.7 }}>{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            <div className="reveal" data-delay="0" style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderLeft:'3px solid var(--blue)', borderRadius:6, padding:36 }}>
              <div style={{ fontSize:36, marginBottom:16 }}>⛪</div>
              <div style={{ fontFamily:'var(--font-cond)', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:12 }}>The Role of the Church</div>
              <p style={{ fontSize:14, color:'var(--text-muted)', lineHeight:1.8, marginBottom:12 }}>Churches play a vital role in PHPantry Philippines — serving as trusted community anchors offering space, volunteers, and guidance.</p>
              <p style={{ fontSize:14, color:'var(--text-muted)', lineHeight:1.8 }}>They bring heart into the mission, turning faith into action and service into something deeply meaningful for the community.</p>
            </div>

            <div className="reveal" data-delay="100" style={{ borderRadius:6, padding:36, textAlign:'center', background:'linear-gradient(135deg,#071830,#1565C0)', border:'1px solid var(--border)' }}>
              <div style={{ fontFamily:'var(--font-cond)', fontStyle:'italic', fontSize:20, color:'white', lineHeight:1.55, marginBottom:16 }}>"Each pantry became more than a place for food — it became a space of hope, dignity, and connection."</div>
              <div style={{ width:32, height:2, background:'var(--red)', margin:'0 auto 14px' }} />
              <div className="label">The PHPantry Story</div>
            </div>

            <div className="reveal" data-delay="200" style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderLeft:'3px solid var(--red)', borderRadius:6, padding:28 }}>
              <div style={{ fontFamily:'var(--font-cond)', fontSize:11, fontWeight:600, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--red-light)', marginBottom:8 }}>Founder</div>
              <div style={{ fontFamily:'var(--font-script)', fontSize:28, color:'var(--text)', marginBottom:6 }}>Raymond Land III</div>
              <div style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.7 }}>Driven by compassion and the belief that every Filipino deserves food with dignity.</div>
            </div>
          </div>
        </div>
      </section>

      {/* GUIDELINES */}
      <section style={{ padding:'100px 5%', background:'linear-gradient(112deg,#071830 0%,#0D2468 35%,#1565C0 65%,#C62828 100%)', position:'relative', overflow:'hidden' }}>
        <div className="grid-overlay" />
        <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, position:'relative', zIndex:1 }}>
          <div>
            <span className="section-tag" style={{ color:'rgba(255,255,255,0.6)' }}>Pantry Guidelines</span>
            <h2 style={{ fontSize:'clamp(28px,4vw,44px)', color:'white', marginBottom:16 }}>Keeping It <span style={{ color:'#90CAF9' }}>Fair & Safe</span></h2>
            <div style={{ width:40, height:2, background:'var(--red)', marginBottom:24 }} />
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:16 }}>
              {['Take only what you need', 'Give what you can spare', 'No expired or unsafe food donations', 'Practice proper food handling and cleanliness', 'Respect volunteers and fellow community members', 'Help keep the pantry clean and accessible'].map((item, i) => (
                <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:14, fontSize:15, color:'rgba(255,255,255,0.8)', lineHeight:1.6 }}>
                  <div className="guide-check">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:8, padding:40, textAlign:'center' }}>
            <div className="label" style={{ color:'rgba(255,255,255,0.4)', marginBottom:28 }}>Our Core Principle</div>
            <div style={{ fontFamily:'var(--font-script)', fontSize:36, color:'white', lineHeight:1.4, marginBottom:20 }}>"Take what you need,<br />give what you can."</div>
            <div style={{ width:40, height:2, background:'var(--red)', margin:'0 auto 20px' }} />
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.6)', lineHeight:1.8 }}>Pantry hours operate on a consistent schedule. Please check your local pantry hub for specific days and hours.</p>
            <Link href="/get-involved" style={{ marginTop:28, display:'inline-flex', background:'white', color:'#0D1B3E', padding:'11px 28px', borderRadius:4, fontFamily:'var(--font-cond)', fontSize:12, fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', textDecoration:'none', transition:'all 0.25s' }}>Find a Pantry</Link>
          </div>
        </div>
      </section>
    </>
  )
}
