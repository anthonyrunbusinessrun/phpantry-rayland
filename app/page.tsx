'use client'
import { useEffect } from 'react'
import Link from 'next/link'

const STATS = [
  { num: '50+',  label: 'Pantry Hubs' },
  { num: '10K+', label: 'Families Served' },
  { num: '200+', label: 'Volunteers' },
  { num: '30+',  label: 'Church Partners' },
]

const VALUES = [
  { num: '01', name: 'Compassion',    desc: 'We serve with care and treat every individual with dignity. Everyone who walks through our pantry doors deserves respect.' },
  { num: '02', name: 'Community',     desc: 'We believe in collective effort — neighbors helping neighbors. Together we are stronger than any challenge we face.' },
  { num: '03', name: 'Faith in Action', desc: 'We partner with churches to turn love into service — making faith tangible and deeply meaningful for every community.' },
  { num: '04', name: 'Integrity',     desc: 'We ensure safe, organized, and responsible distribution. No expired goods. Proper handling always. Trust is everything.' },
  { num: '05', name: 'Stewardship',   desc: 'We manage resources wisely to maximize impact. Every peso, every kilo of rice, every volunteer hour is treated as precious.' },
  { num: '06', name: 'Hope',          desc: 'We believe small acts of kindness can create lasting change. Every pantry visit is a seed of hope planted in our nation.' },
]

const GALLERY = [
  { emoji: '🤲', label: 'Community distribution day', large: true,  bg: '#071830,#1565C0' },
  { emoji: '⛪', label: 'Church partner hub',         large: false, bg: '#0D1B3E,#1976D2' },
  { emoji: '🍱', label: 'Pantry essentials ready',    large: false, bg: '#071830,#0D47A1' },
  { emoji: '👨‍👩‍👧‍👦', label: 'Families receiving support', large: false, bg: '#0A1628,#1565C0' },
  { emoji: '🙌', label: 'Volunteers in action',       large: false, bg: '#071830,#0D2B6E' },
  { emoji: '❤️', label: 'Community first, always',    large: false, bg: '#0A1628,#1976D2' },
]

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            const delay = Number(el.dataset.delay || 0)
            setTimeout(() => el.classList.add('visible'), delay)
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        .hero-btn-white { background:white; color:#0D1B3E; padding:12px 28px; border-radius:4px; font-family:var(--font-cond); font-size:12px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; text-decoration:none; border:none; cursor:pointer; transition:all 0.25s; box-shadow:0 4px 20px rgba(0,0,0,0.2); display:inline-flex; align-items:center; gap:8px; }
        .hero-btn-white:hover { transform:translateY(-2px); box-shadow:0 8px 30px rgba(0,0,0,0.35); }
        .hero-btn-ghost { background:transparent; color:white; padding:11px 28px; border-radius:4px; font-family:var(--font-cond); font-size:12px; font-weight:600; letter-spacing:0.15em; text-transform:uppercase; text-decoration:none; border:1px solid rgba(255,255,255,0.3); cursor:pointer; transition:all 0.25s; display:inline-flex; align-items:center; gap:8px; }
        .hero-btn-ghost:hover { border-color:rgba(255,255,255,0.7); background:rgba(255,255,255,0.08); transform:translateY(-2px); }
        .value-card-hover { transition:all 0.3s; }
        .value-card-hover:hover { transform:translateY(-4px); border-color:rgba(255,255,255,0.18) !important; box-shadow:0 20px 40px rgba(0,0,0,0.3); }
        .involve-card-hover { transition:all 0.3s; }
        .involve-card-hover:hover { transform:translateY(-5px); border-color:rgba(21,101,192,0.3) !important; box-shadow:0 20px 50px rgba(21,101,192,0.1); }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes scrollpulse { 0%{transform:scaleY(0);transform-origin:top} 50%{transform:scaleY(1);transform-origin:top} 100%{transform:scaleY(0);transform-origin:bottom} }
      `}</style>

      {/* ══ HERO ══ */}
      <section style={{ minHeight:'100vh', background:'linear-gradient(112deg,#05102A 0%,#0D2468 20%,#1565C0 42%,#6A1B9A 62%,#C62828 80%,#7B0000 100%)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'130px 5% 80px', position:'relative', overflow:'hidden' }}>
        <div className="grid-overlay" />
        <div style={{ position:'absolute', top:-100, left:-100, width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(21,101,192,0.2),transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:-80, right:-80, width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(198,40,40,0.2),transparent 70%)', pointerEvents:'none' }} />

        <div style={{ display:'inline-flex', alignItems:'center', gap:8, marginBottom:28, background:'rgba(255,255,255,0.08)', border:'1px solid rgba(255,255,255,0.15)', borderRadius:100, padding:'6px 18px', fontFamily:'var(--font-cond)', fontSize:11, fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(255,255,255,0.85)' }}>
          <span style={{ width:6, height:6, borderRadius:'50%', background:'#4CAF50', animation:'blink 2s infinite', display:'inline-block' }} />
          Active Community Movement
        </div>

        <div style={{ fontFamily:'var(--font-script)', fontSize:'clamp(15px,2vw,20px)', color:'rgba(255,255,255,0.55)', marginBottom:8 }}>Welcome to</div>
        <h1 style={{ fontFamily:'var(--font-script)', fontSize:'clamp(60px,10vw,120px)', color:'white', lineHeight:1, marginBottom:4, fontWeight:700 }}>PH Pantry</h1>
        <div style={{ fontFamily:'var(--font-cond)', fontSize:'clamp(11px,1.5vw,14px)', fontWeight:600, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(255,255,255,0.45)', marginBottom:28 }}>PHILIPPINES</div>
        <p style={{ fontSize:'clamp(15px,2vw,18px)', color:'rgba(255,255,255,0.72)', maxWidth:560, lineHeight:1.75, marginBottom:14, fontWeight:300 }}>A simple idea. A shared responsibility. A growing movement of hope.</p>
        <div style={{ fontFamily:'var(--font-cond)', fontStyle:'italic', fontSize:'clamp(14px,1.8vw,18px)', color:'rgba(255,255,255,0.85)', marginBottom:44 }}>"Take what you need, give what you can."</div>

        <div style={{ display:'flex', gap:12, flexWrap:'wrap', justifyContent:'center' }}>
          <Link href="/get-involved" className="hero-btn-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            Join the Movement
          </Link>
          <Link href="/about" className="hero-btn-ghost">
            Learn More
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </Link>
        </div>

        <div style={{ position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
          <div style={{ fontFamily:'var(--font-cond)', fontSize:10, fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)' }}>Scroll</div>
          <div style={{ width:1, height:36, background:'linear-gradient(to bottom,rgba(255,255,255,0.4),transparent)', animation:'scrollpulse 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ══ STATS ══ */}
      <div style={{ background:'#07101D', borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ padding:'32px 24px', textAlign:'center', borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ fontFamily:'var(--font-script)', fontSize:52, lineHeight:1, background:'linear-gradient(135deg,#ECEFF1,#90A4AE)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>{s.num}</div>
              <div className="label" style={{ marginTop:6 }}>{s.label}</div>
              <div style={{ width:24, height:2, background: i % 2 === 0 ? 'var(--blue)' : 'var(--red)', margin:'10px auto 0', borderRadius:1 }} />
            </div>
          ))}
        </div>
      </div>

      {/* ══ MISSION ══ */}
      <section style={{ padding:'100px 5%', background:'var(--bg)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>
          <div className="reveal" data-delay="0">
            <div style={{ borderRadius:6, overflow:'hidden', height:480, background:'linear-gradient(145deg,#071830,#1565C0)', border:'1px solid var(--border)', position:'relative', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <div style={{ position:'absolute', inset:0, background:'radial-gradient(circle at 30% 70%,rgba(198,40,40,0.15),transparent 60%)' }} />
              <div style={{ textAlign:'center', position:'relative', zIndex:1 }}>
                <div style={{ fontFamily:'var(--font-script)', fontSize:80, opacity:0.2, color:'white', lineHeight:1 }}>PH</div>
                <div style={{ fontFamily:'var(--font-script)', fontSize:32, color:'rgba(255,255,255,0.75)', marginTop:-10 }}>Pantry</div>
              </div>
              <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(to top,rgba(5,16,42,0.95),transparent)', padding:'28px 28px 28px' }}>
                <div style={{ width:28, height:2, background:'var(--red)', marginBottom:12 }} />
                <div style={{ fontFamily:'var(--font-cond)', fontStyle:'italic', fontSize:18, color:'white', lineHeight:1.5 }}>"No Filipino should worry about their next meal."</div>
                <div style={{ fontFamily:'var(--font-cond)', fontSize:11, fontWeight:600, letterSpacing:'0.12em', color:'var(--text-muted)', marginTop:8, textTransform:'uppercase' }}>— Raymond Land III, Founder</div>
              </div>
            </div>
            <div style={{ position:'absolute', bottom:-20, right:-20, background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:6, padding:'18px 22px' }}>
              <div style={{ fontFamily:'var(--font-script)', fontSize:32, background:'linear-gradient(135deg,#42A5F5,#90CAF9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', lineHeight:1 }}>2022</div>
              <div className="label" style={{ marginTop:4 }}>Founded</div>
            </div>
          </div>

          <div className="reveal" data-delay="120">
            <span className="section-tag">Our Purpose</span>
            <h2 style={{ fontSize:'clamp(28px,4vw,48px)', lineHeight:1.1, marginBottom:16, color:'var(--text)' }}>A Heartfelt Initiative<br />for Every <span style={{ background:'linear-gradient(135deg,#42A5F5,#90CAF9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Filipino</span></h2>
            <div className="accent-line" />
            <p style={{ fontSize:15, color:'var(--text-muted)', lineHeight:1.85, marginBottom:32, fontWeight:300 }}>PHPantry Philippines is built on the belief that no Filipino should worry about their next meal. Through strategically placed community pantries, we create safe and reliable spaces where individuals and families can access essential food and supplies with dignity.</p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
              {[
                { icon:'🎯', title:'Our Mission', text:'To make food accessible, consistent, and dignified for every Filipino in need — rooted in compassion, faith, and shared responsibility.', color:'var(--blue)' },
                { icon:'🌟', title:'Our Vision',  text:'A Philippines where no one goes hungry and every community is strengthened through unity, care, and hope.', color:'var(--red)' },
              ].map(item => (
                <div key={item.title} style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:6, padding:'22px 20px', position:'relative', overflow:'hidden' }}>
                  <div style={{ position:'absolute', left:0, top:0, bottom:0, width:3, background:item.color, borderRadius:'6px 0 0 6px' }} />
                  <div style={{ fontSize:22, marginBottom:10 }}>{item.icon}</div>
                  <div style={{ fontFamily:'var(--font-cond)', fontSize:16, fontWeight:700, color:'var(--text)', marginBottom:8 }}>{item.title}</div>
                  <div style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.7 }}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section style={{ padding:'100px 5%', background:'var(--bg-card2)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:60 }}>
            <span className="section-tag" style={{ display:'block' }}>The Process</span>
            <h2 style={{ fontSize:'clamp(28px,4vw,48px)', color:'var(--text)', marginBottom:16 }}>How <span style={{ background:'linear-gradient(135deg,#42A5F5,#90CAF9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>It Works</span></h2>
            <div style={{ width:40, height:2, background:'linear-gradient(90deg,var(--red),transparent)', margin:'0 auto' }} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:2, position:'relative' }}>
            <div style={{ position:'absolute', top:44, left:'12.5%', right:'12.5%', height:1, background:'linear-gradient(90deg,var(--blue),rgba(198,40,40,0.6))', zIndex:0 }} />
            {[
              { n:'01', title:'Central Warehouse', text:'Food and supplies are organized and sorted from central hubs across the region.', emoji:'📦', blue:true },
              { n:'02', title:'Distribution',       text:'Dedicated volunteers transport resources to local pantry hubs.', emoji:'🚐', blue:true },
              { n:'03', title:'Church Hubs',        text:'Churches serve as trusted community anchors — offering space and heart.', emoji:'⛪', blue:false },
              { n:'04', title:'Community Access',   text:'Families access essentials with dignity — fairly and consistently.', emoji:'🤝', blue:false },
            ].map((step, i) => (
              <div key={i} className="reveal" data-delay={`${i * 100}`} style={{ textAlign:'center', padding:'0 20px', position:'relative', zIndex:1 }}>
                <div style={{ width:88, height:88, borderRadius:'50%', margin:'0 auto 20px', background:`linear-gradient(135deg,${step.blue ? '#1565C0,#1976D2' : '#C62828,#B71C1C'})`, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:2, boxShadow:`0 8px 24px rgba(${step.blue ? '21,101,192' : '198,40,40'},0.3)` }}>
                  <div style={{ fontSize:20 }}>{step.emoji}</div>
                  <div style={{ fontFamily:'var(--font-cond)', fontSize:10, fontWeight:700, letterSpacing:'0.12em', color:'rgba(255,255,255,0.7)' }}>{step.n}</div>
                </div>
                <div style={{ fontFamily:'var(--font-cond)', fontSize:17, fontWeight:700, color:'var(--text)', marginBottom:10 }}>{step.title}</div>
                <div style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.7 }}>{step.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CORE VALUES ══ */}
      <section style={{ padding:'100px 5%', background:'var(--bg)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:-100, left:'10%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(21,101,192,0.06),transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:-100, right:'10%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(198,40,40,0.06),transparent 70%)', pointerEvents:'none' }} />
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:60 }}>
            <span className="section-tag" style={{ display:'block' }}>What We Stand For</span>
            <h2 style={{ fontSize:'clamp(28px,4vw,48px)', color:'var(--text)', marginBottom:16 }}>Our Core <span style={{ background:'linear-gradient(135deg,#90A4AE,#ECEFF1)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Values</span></h2>
            <div style={{ width:80, height:2, background:'linear-gradient(90deg,transparent,var(--red),transparent)', margin:'0 auto' }} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
            {VALUES.map((v, i) => (
              <div key={i} className="reveal value-card-hover" data-delay={`${(i % 3) * 80}`} style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:6, padding:'30px 26px' }}>
                <div style={{ fontFamily:'var(--font-cond)', fontSize:10, fontWeight:700, letterSpacing:'0.2em', color:'var(--red-light)', marginBottom:14, textTransform:'uppercase' }}>{v.num} — {v.name}</div>
                <div style={{ fontFamily:'var(--font-cond)', fontSize:24, fontWeight:700, color:'var(--text)', marginBottom:12 }}>{v.name}</div>
                <div style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.8 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GALLERY PREVIEW ══ */}
      <section style={{ padding:'100px 5%', background:'var(--bg-card2)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'end', marginBottom:48 }}>
            <div>
              <span className="section-tag">In the Community</span>
              <h2 style={{ fontSize:'clamp(28px,4vw,48px)', color:'var(--text)', marginBottom:12 }}>Moments of <span style={{ background:'linear-gradient(135deg,#42A5F5,#90CAF9)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Hope</span></h2>
              <div className="accent-line" />
            </div>
            <div>
              <p style={{ fontSize:15, color:'var(--text-muted)', lineHeight:1.8 }}>Every photo tells a story of neighbors coming together — of dignity restored, of hunger answered, and of a community choosing to care for its own.</p>
              <Link href="/gallery" className="btn-outline" style={{ marginTop:20, display:'inline-flex' }}>
                View Full Gallery
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              </Link>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
            {GALLERY.map((item, i) => (
              <div key={i} className="gallery-item" style={{ gridColumn: i===0 ? 'span 2' : 'span 1', height: i===0 ? 360 : 170 }}>
                <div className="gallery-img" style={{ background:`linear-gradient(145deg,#${item.bg.split(',')[0].replace('#','')},#${item.bg.split(',')[1].replace('#','')})`, display:'flex', alignItems:'center', justifyContent:'center', fontSize: i===0 ? 64 : 36, width:'100%', height:'100%' }}>{item.emoji}</div>
                <div className="gallery-overlay" />
                <div className="gallery-caption"><div style={{ fontFamily:'var(--font-cond)', fontSize:12, fontWeight:500, color:'rgba(255,255,255,0.9)' }}>{item.label}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ padding:'100px 5%', background:'var(--bg)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ borderRadius:8, padding:'80px 60px', textAlign:'center', position:'relative', overflow:'hidden', background:'linear-gradient(112deg,#071830 0%,#0D2468 30%,#1565C0 55%,#6A1B9A 75%,#C62828 90%,#7B0000 100%)', border:'1px solid var(--border)' }}>
            <div className="grid-overlay" />
            <div style={{ position:'relative', zIndex:1 }}>
              <span className="section-tag" style={{ color:'rgba(255,255,255,0.55)', display:'block' }}>Take Action</span>
              <h2 style={{ fontSize:'clamp(28px,4vw,52px)', color:'white', marginBottom:16 }}>Be Part of the Movement</h2>
              <p style={{ fontSize:17, color:'rgba(255,255,255,0.7)', maxWidth:500, margin:'0 auto 40px', lineHeight:1.75, fontWeight:300 }}>Whether you're donating, volunteering, or spreading the word — you are part of something bigger.</p>
              <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
                <Link href="/get-involved" className="hero-btn-white">Volunteer Now</Link>
                <Link href="/get-involved" className="hero-btn-ghost">Make a Donation</Link>
              </div>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginTop:40 }}>
            {[
              { emoji:'🙌', title:'Volunteer',        text:'Offer your time and heart. Help sort, distribute, and serve at a PHPantry hub near you.', color:'var(--blue)' },
              { emoji:'💙', title:'Donate',           text:'Your donation — food, supplies, or financial support — directly feeds families across the Philippines.', color:'var(--red)' },
              { emoji:'📣', title:'Spread the Word',  text:'Share our mission. Every voice amplifies hope and invites more helpers to the table.', color:'var(--blue-light)' },
            ].map((card, i) => (
              <div key={i} className="reveal involve-card-hover" data-delay={`${i * 100}`} style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:6, padding:'32px 28px', textAlign:'center' }}>
                <div style={{ width:60, height:60, background:`${card.color}1A`, border:`1px solid ${card.color}44`, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 18px', fontSize:26 }}>{card.emoji}</div>
                <div style={{ fontFamily:'var(--font-cond)', fontSize:20, fontWeight:700, color:'var(--text)', marginBottom:10 }}>{card.title}</div>
                <div style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.75 }}>{card.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
