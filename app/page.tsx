'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import VideoSection from '@/components/VideoSection'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement
          setTimeout(() => el.classList.add('visible'), Number(el.dataset.delay || 0))
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
    const selectors = '.reveal, .apple-fade, .apple-fade-only, .apple-scale, .apple-left, .apple-right'
    document.querySelectorAll(selectors).forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ══ HERO ══ */}
      <section style={{
        minHeight: '100vh',
        background: 'var(--hero-grad)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '130px 5% 80px', position: 'relative', overflow: 'hidden',
      }}>
        <div className="grid-overlay" />
        {/* Glow accents matching the uploaded gradient */}
        <div style={{ position:'absolute', bottom:'-5%', left:'-5%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,116,144,0.18),transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-5%', right:'5%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(59,31,163,0.2),transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:'10%', right:'-5%', width:300, height:300, borderRadius:'50%', background:'radial-gradient(circle,rgba(10,18,40,0.6),transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'0', right:'15%', width:200, height:200, borderRadius:'50%', background:'radial-gradient(circle,rgba(123,0,40,0.15),transparent 70%)', pointerEvents:'none' }} />

        <div style={{ display:'inline-flex', alignItems:'center', gap:8, marginBottom:28, background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:100, padding:'6px 18px', fontFamily:'var(--font-cond)', fontSize:11, fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(255,255,255,0.8)' }}>
          <span style={{ width:6, height:6, borderRadius:'50%', background:'#4CAF50', animation:'blink 2s infinite', display:'inline-block' }} />
          Active Community Movement · Philippines
        </div>

        <div style={{ fontFamily:'var(--font-script)', fontSize:'clamp(15px,2vw,20px)', color:'rgba(255,255,255,0.5)', marginBottom:6 }}>Welcome to</div>
        <h1 style={{ fontFamily:'var(--font-script)', fontSize:'clamp(60px,10vw,118px)', color:'white', lineHeight:1, marginBottom:6, fontWeight:700 }}>PH Pantry</h1>
        <div style={{ fontFamily:'var(--font-cond)', fontSize:'clamp(11px,1.5vw,14px)', fontWeight:600, letterSpacing:'0.35em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)', marginBottom:32 }}>PHILIPPINES</div>

        <p style={{ fontSize:'clamp(15px,2vw,19px)', color:'rgba(255,255,255,0.75)', maxWidth:580, lineHeight:1.8, marginBottom:14, fontWeight:300 }}>
          A simple idea. A shared responsibility. A growing movement of hope.
        </p>
        <div style={{ fontFamily:'var(--font-cond)', fontStyle:'italic', fontSize:'clamp(14px,1.8vw,18px)', color:'rgba(255,255,255,0.85)', marginBottom:48, letterSpacing:'0.02em' }}>
          "Take what you need, give what you can."
        </div>

        <div style={{ display:'flex', gap:14, flexWrap:'wrap', justifyContent:'center' }}>
          <Link href="/get-involved" className="btn-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            Join the Movement
          </Link>
          <Link href="/about" className="btn-outline" style={{ color:'white', borderColor:'rgba(255,255,255,0.2)' }}>
            Learn More
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </Link>
        </div>

        <div style={{ position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
          <div style={{ fontFamily:'var(--font-cond)', fontSize:10, fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(255,255,255,0.25)' }}>Scroll</div>
          <div style={{ width:1, height:36, background:'linear-gradient(to bottom,rgba(255,255,255,0.35),transparent)', animation:'scrollpulse 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ══ STATS BAR ══ */}
      <div style={{ background:'#050D1A', borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)' }}>
          {[
            { num:'50+',  label:'Pantry Hubs' },
            { num:'10K+', label:'Families Served' },
            { num:'200+', label:'Volunteers' },
            { num:'30+',  label:'Church Partners' },
          ].map((s, i) => (
            <div key={i} style={{ padding:'32px 24px', textAlign:'center', borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}>
              <div className="stat-num">{s.num}</div>
              <div className="label" style={{ marginTop:6 }}>{s.label}</div>
              <div style={{ width:24, height:2, background: i % 2 === 0 ? '#0E7490' : '#3B1FA3', margin:'10px auto 0', borderRadius:1 }} />
            </div>
          ))}
        </div>
      </div>

      {/* ══ VIDEO SECTION ══ */}
      <VideoSection />

      {/* ══ WELCOME / ABOUT ══ */}
      <section style={{ padding:'100px 5%', background:'var(--bg)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }}>

          {/* Visual */}
          <div className="apple-left" data-delay="0" style={{ position:'relative' }}>
            <div style={{ borderRadius:6, height:500, background:'var(--hero-grad)', border:'1px solid rgba(255,255,255,0.07)', position:'relative', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <div style={{ textAlign:'center', position:'relative', zIndex:1 }}>
                <div style={{ fontFamily:'var(--font-script)', fontSize:90, opacity:0.18, color:'white', lineHeight:1 }}>PH</div>
                <div style={{ fontFamily:'var(--font-script)', fontSize:36, color:'rgba(255,255,255,0.7)', marginTop:-12 }}>Pantry</div>
              </div>
              <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(to top,rgba(5,13,24,0.97),transparent)', padding:'32px 32px 32px' }}>
                <div style={{ width:32, height:2, background:'#0E7490', marginBottom:14 }} />
                <div style={{ fontFamily:'var(--font-cond)', fontStyle:'italic', fontSize:18, color:'white', lineHeight:1.55 }}>"No Filipino should have to worry about their next meal."</div>
                <div style={{ fontFamily:'var(--font-cond)', fontSize:11, fontWeight:600, letterSpacing:'0.12em', color:'var(--text-muted)', marginTop:10, textTransform:'uppercase' }}>— Raymond Land III, Founder</div>
              </div>
            </div>
            <div style={{ position:'absolute', bottom:-24, right:-24, background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:6, padding:'18px 24px', boxShadow:'0 8px 30px rgba(0,0,0,0.4)' }}>
              <div style={{ fontFamily:'var(--font-script)', fontSize:32, background:'linear-gradient(135deg,#22D3EE,#42A5F5)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', lineHeight:1 }}>2022</div>
              <div className="label" style={{ marginTop:4 }}>Founded</div>
            </div>
          </div>

          {/* Text */}
          <div className="apple-right" data-delay="120">
            <span className="section-tag">Welcome to PHPantry Philippines</span>
            <h2 style={{ fontSize:'clamp(28px,4vw,50px)', lineHeight:1.1, marginBottom:16, color:'var(--text)' }}>
              A Heartfelt Initiative<br />for Every <span className="text-teal">Filipino</span>
            </h2>
            <div className="accent-line" />
            <p style={{ fontSize:15, color:'var(--text-muted)', lineHeight:1.9, marginBottom:18, fontWeight:300 }}>
              PHPantry Philippines is a heartfelt initiative founded by Raymond Land III, built on the belief that no Filipino should have to worry about their next meal. Through strategically placed community pantries, we create safe and reliable spaces where individuals and families can access essential food and supplies with dignity.
            </p>
            <p style={{ fontSize:15, color:'var(--text-muted)', lineHeight:1.9, marginBottom:32, fontWeight:300 }}>
              More than just giving, PHPantry is about sharing. It brings together communities, churches, volunteers, and partners to lift each other up—proving that even the smallest act of kindness can make a lasting difference.
            </p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14 }}>
              {[
                { icon:'🎯', title:'Our Mission', text:'To make food accessible, consistent, and dignified for every Filipino in need by building community-driven pantries rooted in compassion, faith, and shared responsibility.', accent:'#0E7490' },
                { icon:'🌟', title:'Our Vision',  text:'A Philippines where no one goes hungry and every community is strengthened through unity, care, and hope.', accent:'#3B1FA3' },
              ].map(item => (
                <div key={item.title} style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:6, padding:'22px 20px', position:'relative', overflow:'hidden' }}>
                  <div style={{ position:'absolute', left:0, top:0, bottom:0, width:3, background:item.accent, borderRadius:'6px 0 0 6px' }} />
                  <div style={{ fontSize:22, marginBottom:10 }}>{item.icon}</div>
                  <div style={{ fontFamily:'var(--font-cond)', fontSize:16, fontWeight:700, color:'var(--text)', marginBottom:8 }}>{item.title}</div>
                  <div style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.75 }}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section style={{ padding:'100px 5%', background:'var(--bg-card2)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:20 }}>
            <span className="section-tag" style={{ display:'block' }}>The Process</span>
            <h2 style={{ fontSize:'clamp(28px,4vw,48px)', color:'var(--text)', marginBottom:12 }}>How <span className="text-teal">It Works</span></h2>
            <div style={{ width:40, height:2, background:'linear-gradient(90deg,#0E7490,transparent)', margin:'0 auto 20px' }} />
            <p style={{ fontSize:17, color:'rgba(255,255,255,0.7)', maxWidth:540, margin:'0 auto 48px', lineHeight:1.75, fontWeight:300 }}>
              At the heart of PHPantry is one simple principle:
            </p>
            <div style={{ display:'inline-block', background:'rgba(14,116,144,0.1)', border:'1px solid rgba(14,116,144,0.25)', borderRadius:6, padding:'16px 32px', marginBottom:60 }}>
              <span style={{ fontFamily:'var(--font-cond)', fontStyle:'italic', fontSize:'clamp(16px,2vw,22px)', color:'#67E8F9', letterSpacing:'0.02em' }}>"Take what you need, give what you can."</span>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:2, position:'relative' }}>
            <div style={{ position:'absolute', top:44, left:'12.5%', right:'12.5%', height:1, background:'linear-gradient(90deg,#0E7490,#3B1FA3,rgba(123,0,40,0.5))', zIndex:0 }} />
            {[
              { n:'01', title:'Central Warehouse', text:'Food and supplies are organized from central warehouses—sorted, checked, and prepared for distribution.', emoji:'📦', color:'#0E7490' },
              { n:'02', title:'Distribution',       text:'With the help of volunteers and partners, supplies are transported to local pantry hubs consistently and on time.', emoji:'🚐', color:'#1565C0' },
              { n:'03', title:'Church Hubs',        text:'Churches serve as trusted community anchors—offering space, volunteers, and guidance to help each pantry run smoothly.', emoji:'⛪', color:'#3B1FA3' },
              { n:'04', title:'Community Access',   text:'Each pantry ensures resources reach the right people at the right time—fairly, consistently, and with dignity.', emoji:'🤝', color:'#7B0028' },
            ].map((step, i) => (
              <div key={i} className="apple-fade" data-delay={`${i * 80}`} style={{ textAlign:'center', padding:'0 20px', position:'relative', zIndex:1 }}>
                <div style={{ width:88, height:88, borderRadius:'50%', margin:'0 auto 20px', background:`linear-gradient(135deg,${step.color},${step.color}CC)`, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:2, boxShadow:`0 8px 24px ${step.color}55` }}>
                  <div style={{ fontSize:22 }}>{step.emoji}</div>
                  <div style={{ fontFamily:'var(--font-cond)', fontSize:10, fontWeight:700, letterSpacing:'0.12em', color:'rgba(255,255,255,0.7)' }}>{step.n}</div>
                </div>
                <div style={{ fontFamily:'var(--font-cond)', fontSize:17, fontWeight:700, color:'var(--text)', marginBottom:10 }}>{step.title}</div>
                <div style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.75 }}>{step.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CORE VALUES ══ */}
      <section style={{ padding:'100px 5%', background:'var(--bg)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'-10%', left:'5%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,116,144,0.05),transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-10%', right:'5%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(59,31,163,0.06),transparent 70%)', pointerEvents:'none' }} />
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:60 }}>
            <span className="section-tag" style={{ display:'block' }}>What We Stand For</span>
            <h2 style={{ fontSize:'clamp(28px,4vw,48px)', color:'var(--text)', marginBottom:16 }}>Our Core <span className="text-chrome">Values</span></h2>
            <div style={{ width:80, height:2, background:'linear-gradient(90deg,transparent,#0E7490,#3B1FA3,transparent)', margin:'0 auto' }} />
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
            {[
              { n:'01', name:'Compassion',    desc:'We serve with care and treat every individual with dignity.' },
              { n:'02', name:'Community',     desc:'We believe in collective effort—neighbors helping neighbors.' },
              { n:'03', name:'Faith in Action', desc:'We partner with churches to turn love into service.' },
              { n:'04', name:'Integrity',     desc:'We ensure safe, organized, and responsible distribution—no expired goods, proper handling always.' },
              { n:'05', name:'Stewardship',   desc:'We manage resources wisely to maximize impact.' },
              { n:'06', name:'Hope',          desc:'We believe small acts of kindness can create lasting change.' },
            ].map((v, i) => (
              <div key={i} className="apple-scale value-card-hover" data-delay={`${(i % 3) * 100}`} style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:6, padding:'30px 26px' }}>
                <div style={{ fontFamily:'var(--font-cond)', fontSize:10, fontWeight:700, letterSpacing:'0.2em', color:'rgba(14,116,144,0.8)', marginBottom:14, textTransform:'uppercase' }}>{v.n}</div>
                <div style={{ fontFamily:'var(--font-cond)', fontSize:24, fontWeight:700, color:'var(--text)', marginBottom:12 }}>{v.name}</div>
                <div style={{ fontSize:14, color:'var(--text-muted)', lineHeight:1.8 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STORY + CHURCH ══ */}
      <section style={{ padding:'100px 5%', background:'var(--bg-card2)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:80 }}>
          {/* Story */}
          <div className="apple-left" data-delay="0">
            <span className="section-tag">The Story Behind the Pantry</span>
            <h2 style={{ fontSize:'clamp(24px,3vw,40px)', color:'var(--text)', marginBottom:16 }}>Born from <span className="text-gradient">Compassion</span></h2>
            <div className="accent-line" />
            <p style={{ fontSize:15, color:'var(--text-muted)', lineHeight:1.9, marginBottom:18, fontWeight:300 }}>
              PHPantry began as a response to the daily struggles of Filipino families trying to put food on the table. What started as a small act of compassion quickly grew into a community movement.
            </p>
            <p style={{ fontSize:15, color:'var(--text-muted)', lineHeight:1.9, fontWeight:300 }}>
              With churches opening their doors and volunteers offering their time, each pantry became more than a place for food—it became a space of hope, dignity, and connection.
            </p>
            <div style={{ marginTop:36, position:'relative', paddingLeft:32 }}>
              <div style={{ position:'absolute', left:9, top:8, bottom:8, width:2, background:'linear-gradient(to bottom,#0E7490,#3B1FA3,rgba(123,0,40,0.3))' }} />
              {[
                { title:'A Seed of Compassion',     text:"One person's response to hunger—a simple act that refused to look away.", color:'#0E7490' },
                { title:'Churches Open Their Doors', text:'Local churches stepped forward as trusted community anchors.', color:'#1565C0' },
                { title:'Volunteers Join',            text:'A growing network of hearts giving time, resources, and energy.', color:'#3B1FA3' },
                { title:'A Movement Grows',           text:'Today, PHPantry Philippines reaches families across the nation.', color:'#7B0028' },
              ].map((item, i) => (
                <div key={i} className="apple-fade" data-delay={`${i * 100}`} style={{ display:'flex', gap:20, marginBottom:28, position:'relative' }}>
                  <div style={{ position:'absolute', left:-32+9-9, top:4, width:18, height:18, borderRadius:'50%', background:item.color, border:'2px solid var(--bg-card2)', zIndex:1, boxShadow:`0 0 10px ${item.color}88` }} />
                  <div>
                    <div style={{ fontFamily:'var(--font-cond)', fontSize:15, fontWeight:700, color:'var(--text)', marginBottom:5 }}>{item.title}</div>
                    <div style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.7 }}>{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Church + Quote */}
          <div className="apple-right" data-delay="100" style={{ display:'flex', flexDirection:'column', gap:16 }}>
            <div style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderLeft:'3px solid #0E7490', borderRadius:6, padding:36 }}>
              <div style={{ fontSize:38, marginBottom:16 }}>⛪</div>
              <div style={{ fontFamily:'var(--font-cond)', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:14 }}>The Role of the Church</div>
              <p style={{ fontSize:14.5, color:'var(--text-muted)', lineHeight:1.85, marginBottom:14 }}>
                Churches play a vital role in PHPantry Philippines. They serve as trusted community anchors—offering space, volunteers, and guidance to help each pantry operate smoothly.
              </p>
              <p style={{ fontSize:14.5, color:'var(--text-muted)', lineHeight:1.85 }}>
                More importantly, they bring heart into the mission, turning faith into action and service into something deeply meaningful for the community.
              </p>
            </div>
            <div style={{ borderRadius:6, padding:36, textAlign:'center', background:'var(--hero-grad)', border:'1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontFamily:'var(--font-cond)', fontStyle:'italic', fontSize:19, color:'white', lineHeight:1.6, marginBottom:16 }}>"Each pantry became more than a place for food—it became a space of hope, dignity, and connection."</div>
              <div style={{ width:32, height:2, background:'rgba(14,116,144,0.8)', margin:'0 auto 14px' }} />
              <div className="label" style={{ color:'rgba(255,255,255,0.4)' }}>The PHPantry Story</div>
            </div>
            <div style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderLeft:'3px solid #3B1FA3', borderRadius:6, padding:28 }}>
              <div style={{ fontFamily:'var(--font-cond)', fontSize:10, fontWeight:600, letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(103,232,249,0.7)', marginBottom:8 }}>Founder</div>
              <div style={{ fontFamily:'var(--font-script)', fontSize:28, color:'var(--text)', marginBottom:6 }}>Raymond Land III</div>
              <div style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.7 }}>Driven by compassion and the belief that every Filipino deserves food with dignity.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GALLERY PREVIEW ══ */}
      <section style={{ padding:'100px 5%', background:'var(--bg)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'end', marginBottom:48 }}>
            <div>
              <span className="section-tag">In the Community</span>
              <h2 style={{ fontSize:'clamp(28px,4vw,48px)', color:'var(--text)', marginBottom:12 }}>Moments of <span className="text-teal">Hope</span></h2>
              <div className="accent-line" />
            </div>
            <div>
              <p style={{ fontSize:15, color:'var(--text-muted)', lineHeight:1.8 }}>Every photo tells a story of neighbors coming together—of dignity restored, of hunger answered, and of a community choosing to care for its own.</p>
              <Link href="/gallery" className="btn-outline" style={{ marginTop:20, display:'inline-flex' }}>
                View Full Gallery
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
              </Link>
            </div>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
            {[
              { emoji:'🤲', label:'Community distribution day', large:true,  c1:'061822', c2:'0E5F8A' },
              { emoji:'⛪', label:'Church partner hub',         large:false, c1:'0C1A2E', c2:'1565C0' },
              { emoji:'🍱', label:'Pantry essentials ready',    large:false, c1:'070F22', c2:'0E7490' },
              { emoji:'👨‍👩‍👧‍👦', label:'Families receiving support', large:false, c1:'0A1228', c2:'3B1FA3' },
              { emoji:'🙌', label:'Volunteers in action',       large:false, c1:'06101E', c2:'1565C0' },
              { emoji:'❤️', label:'Community first, always',    large:false, c1:'0A0818', c2:'7B0028' },
            ].map((item, i) => (
              <div key={i} className="gallery-item" style={{ gridColumn: i===0 ? 'span 2':'span 1', height: i===0 ? 360:170 }}>
                <div className="gallery-img" style={{ background:`linear-gradient(145deg,#${item.c1},#${item.c2})`, display:'flex', alignItems:'center', justifyContent:'center', fontSize: i===0?64:38, width:'100%', height:'100%' }}>{item.emoji}</div>
                <div className="gallery-overlay" />
                <div className="gallery-caption"><div style={{ fontFamily:'var(--font-cond)', fontSize:12, fontWeight:500, color:'rgba(255,255,255,0.9)' }}>{item.label}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GUIDELINES ══ */}
      <section style={{ padding:'100px 5%', background:'var(--hero-grad)', position:'relative', overflow:'hidden' }}>
        <div className="grid-overlay" />
        <div style={{ maxWidth:1200, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, position:'relative', zIndex:1 }}>
          <div>
            <span className="section-tag" style={{ color:'rgba(103,232,249,0.7)' }}>Guidelines for Everyone</span>
            <h2 style={{ fontSize:'clamp(28px,4vw,44px)', color:'white', marginBottom:16 }}>Keeping It <span style={{ color:'#67E8F9' }}>Fair & Safe</span></h2>
            <div style={{ width:40, height:2, background:'#0E7490', marginBottom:20 }} />
            <p style={{ fontSize:15, color:'rgba(255,255,255,0.65)', lineHeight:1.8, marginBottom:24, fontWeight:300 }}>To keep the pantry fair, safe, and organized for everyone in our community:</p>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:14 }}>
              {['Take only what you need', 'Give what you can', 'No expired or unsafe food donations', 'Practice proper food handling and cleanliness', 'Respect volunteers and fellow community members', 'Help keep the pantry clean and accessible'].map((item, i) => (
                <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:14, fontSize:15, color:'rgba(255,255,255,0.8)', lineHeight:1.6 }}>
                  <div style={{ width:22, height:22, borderRadius:'50%', background:'rgba(14,116,144,0.25)', border:'1px solid rgba(14,116,144,0.4)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, padding:36, textAlign:'center' }}>
              <div style={{ fontFamily:'var(--font-cond)', fontSize:10, fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(103,232,249,0.5)', marginBottom:24 }}>Our Core Principle</div>
              <div style={{ fontFamily:'var(--font-script)', fontSize:34, color:'white', lineHeight:1.45, marginBottom:20 }}>"Take what you need,<br />give what you can."</div>
              <div style={{ width:40, height:2, background:'#0E7490', margin:'0 auto 20px' }} />
              <p style={{ fontSize:14, color:'rgba(255,255,255,0.55)', lineHeight:1.8 }}>Each PHPantry location operates on a consistent schedule to ensure reliability for the community. Please check your local pantry for specific days and hours of operation.</p>
              <Link href="/get-involved" className="btn-primary" style={{ marginTop:28, display:'inline-flex' }}>Find a Pantry</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA — BE PART OF THE MOVEMENT ══ */}
      <section style={{ padding:'100px 5%', background:'var(--bg)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ borderRadius:8, padding:'80px 60px', textAlign:'center', position:'relative', overflow:'hidden', background:'var(--hero-grad)', border:'1px solid rgba(255,255,255,0.07)' }}>
            <div className="grid-overlay" />
            <div style={{ position:'relative', zIndex:1 }}>
              <span className="section-tag" style={{ color:'rgba(103,232,249,0.7)', display:'block' }}>Take Action</span>
              <h2 style={{ fontSize:'clamp(28px,4vw,54px)', color:'white', marginBottom:16 }}>Be Part of the Movement</h2>
              <p style={{ fontSize:17, color:'rgba(255,255,255,0.7)', maxWidth:560, margin:'0 auto 16px', lineHeight:1.8, fontWeight:300 }}>
                Whether you're donating, volunteering, or simply spreading the word, you are part of something bigger.
              </p>
              <p style={{ fontSize:16, color:'rgba(255,255,255,0.6)', maxWidth:540, margin:'0 auto 40px', lineHeight:1.8, fontStyle:'italic' }}>
                Together, we can build a future where fewer Filipinos go hungry—and where every act of kindness matters.
              </p>
              <div style={{ display:'flex', gap:14, justifyContent:'center', flexWrap:'wrap' }}>
                <Link href="/get-involved" style={{ background:'white', color:'#061822', padding:'12px 32px', borderRadius:4, fontFamily:'var(--font-cond)', fontSize:13, fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', textDecoration:'none', transition:'all 0.25s', display:'inline-flex', alignItems:'center', gap:8, boxShadow:'0 4px 20px rgba(0,0,0,0.3)' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  Volunteer Now
                </Link>
                <Link href="/get-involved" className="btn-outline" style={{ color:'white', borderColor:'rgba(255,255,255,0.25)' }}>
                  Make a Donation
                </Link>
              </div>
            </div>
          </div>

          {/* 3 ways */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginTop:40 }}>
            {[
              { emoji:'🙌', title:'Volunteer',       text:'Offer your time and heart. Help sort, distribute, and serve your community at a PHPantry hub near you. No experience needed—just a willing heart.', color:'#0E7490' },
              { emoji:'💙', title:'Donate',          text:'Your donation—whether food, supplies, or financial support—directly feeds families across the Philippines. Every contribution matters and creates real change.', color:'#3B1FA3' },
              { emoji:'📣', title:'Spread the Word', text:'Share our mission with your network. Every voice amplifies hope and invites more helpers to join the table. Together we build a stronger movement.', color:'#7B0028' },
            ].map((card, i) => (
              <div key={i} className="apple-fade involve-card-hover" data-delay={`${i * 120}`} style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:6, padding:'32px 28px', textAlign:'center' }}>
                <div style={{ width:60, height:60, background:`${card.color}1A`, border:`1px solid ${card.color}55`, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 18px', fontSize:26 }}>{card.emoji}</div>
                <div style={{ fontFamily:'var(--font-cond)', fontSize:20, fontWeight:700, color:'var(--text)', marginBottom:10 }}>{card.title}</div>
                <div style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.8 }}>{card.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
