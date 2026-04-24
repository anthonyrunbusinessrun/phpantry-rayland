'use client'
import { useEffect } from 'react'
import Link from 'next/link'
import VideoSection from '@/components/VideoSection'
import FounderSection from '@/components/FounderSection'

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
    document.querySelectorAll('.reveal,.apple-fade,.apple-fade-only,.apple-scale,.apple-left,.apple-right').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
        @keyframes scrollpulse{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}100%{transform:scaleY(0);transform-origin:bottom}}
        .hero-badge{display:inline-flex;align-items:center;gap:8px;margin-bottom:28px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.12);border-radius:100px;padding:6px 18px;font-family:var(--font-cond);font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:rgba(255,255,255,0.8)}
        @media(max-width:600px){.hero-badge{font-size:9px;letter-spacing:0.1em;padding:5px 12px}}
        .stat-border-r{border-right:1px solid var(--border)}
        @media(max-width:900px){.stat-border-r:nth-child(2){border-right:none}.stat-border-r:nth-child(3){border-top:1px solid var(--border)}.stat-border-r:nth-child(4){border-top:1px solid var(--border);border-right:none}}
        .how-connector{position:absolute;top:44px;left:12.5%;right:12.5%;height:1px;background:linear-gradient(90deg,#0E7490,#3B1FA3,rgba(123,0,40,0.5));z-index:0}
        @media(max-width:900px){.how-connector{display:none}}
        .mission-card{border-radius:6px;border:1px solid rgba(255,255,255,0.07);position:relative;overflow:hidden;height:500px}
        @media(max-width:900px){.mission-card{height:320px}}
        @media(max-width:600px){.mission-card{height:260px}}
        .cta-inner{border-radius:8px;text-align:center;position:relative;overflow:hidden;background:var(--hero-grad);border:1px solid rgba(255,255,255,0.07)}
        .gallery-preview-grid{display:grid;grid-template-columns:repeat(3,1fr);grid-auto-rows:180px;gap:12px}
        @media(max-width:900px){.gallery-preview-grid{grid-template-columns:1fr 1fr;grid-auto-rows:160px}}
        @media(max-width:600px){.gallery-preview-grid{grid-template-columns:1fr;grid-auto-rows:200px}}
        @media(max-width:600px){.gallery-preview-grid .gallery-item{grid-column:span 1 !important;grid-row:span 1 !important}}
        .involve-cards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:40px}
        @media(max-width:900px){.involve-cards{grid-template-columns:1fr}}
      `}</style>

      {/* ══ HERO ══ */}
      <section style={{ minHeight:'100vh', background:'var(--hero-grad)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'130px 5% 80px', position:'relative', overflow:'hidden' }}>
        <div className="grid-overlay" />
        <div style={{ position:'absolute', bottom:'-5%', left:'-5%', width:500, height:500, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,116,144,0.18),transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-5%', right:'5%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(59,31,163,0.2),transparent 70%)', pointerEvents:'none' }} />

        <div className="hero-badge">
          <span style={{ width:6, height:6, borderRadius:'50%', background:'#4CAF50', animation:'blink 2s infinite', display:'inline-block' }} />
          Active Community Movement · Philippines
        </div>

        <div style={{ fontFamily:'var(--font-script)', fontSize:'clamp(15px,2vw,20px)', color:'rgba(255,255,255,0.5)', marginBottom:6 }}>Welcome to</div>
        <h1 style={{ fontFamily:'var(--font-script)', fontSize:'clamp(56px,10vw,118px)', color:'white', lineHeight:1, marginBottom:6, fontWeight:700 }}>PH Pantry</h1>
        <div style={{ fontFamily:'var(--font-cond)', fontSize:'clamp(10px,1.5vw,14px)', fontWeight:600, letterSpacing:'0.35em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)', marginBottom:28 }}>PHILIPPINES</div>
        <p style={{ fontSize:'clamp(14px,2vw,18px)', color:'rgba(255,255,255,0.75)', maxWidth:560, lineHeight:1.8, marginBottom:12, fontWeight:300, padding:'0 8px' }}>A simple idea. A shared responsibility. A growing movement of hope.</p>
        <div style={{ fontFamily:'var(--font-cond)', fontStyle:'italic', fontSize:'clamp(13px,1.8vw,18px)', color:'rgba(255,255,255,0.85)', marginBottom:40 }}>"Take what you need, give what you can."</div>

        <div className="flex-btns" style={{ justifyContent:'center' }}>
          <Link href="/get-involved" className="btn-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            Join the Movement
          </Link>
          <Link href="/about" className="btn-outline" style={{ color:'white', borderColor:'rgba(255,255,255,0.2)' }}>
            Learn More <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </Link>
        </div>

        <div style={{ position:'absolute', bottom:32, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
          <div style={{ fontFamily:'var(--font-cond)', fontSize:10, fontWeight:600, letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(255,255,255,0.25)' }}>Scroll</div>
          <div style={{ width:1, height:36, background:'linear-gradient(to bottom,rgba(255,255,255,0.35),transparent)', animation:'scrollpulse 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* ══ STATS ══ */}
      <div style={{ background:'#050D1A', borderBottom:'1px solid var(--border)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }} className="grid-stats">
          {[{num:'50+',label:'Pantry Hubs'},{num:'10K+',label:'Families Served'},{num:'200+',label:'Volunteers'},{num:'30+',label:'Church Partners'}].map((s,i)=>(
            <div key={i} className={`stat-border-r`} style={{ padding:'28px 16px', textAlign:'center' }}>
              <div className="stat-num">{s.num}</div>
              <div className="label" style={{ marginTop:6 }}>{s.label}</div>
              <div style={{ width:24, height:2, background:i%2===0?'#0E7490':'#3B1FA3', margin:'10px auto 0', borderRadius:1 }} />
            </div>
          ))}
        </div>
      </div>

      {/* ══ VIDEO ══ */}
      <VideoSection />

      {/* ══ WELCOME ══ */}
      <section className="section-pad" style={{ background:'var(--bg)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }} className="grid-2col">
          <div className="apple-left" data-delay="0">
            <div className="mission-card">
              <img src="/IMG_3502.jpg" alt="PHPantry Philippines community" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', display:'block' }} />
              <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(to top,rgba(5,13,24,0.96) 0%,rgba(5,13,24,0.5) 60%,transparent 100%)', padding:'28px 24px 24px' }}>
                <div style={{ width:28, height:2, background:'#0E7490', marginBottom:12 }} />
                <div style={{ fontFamily:'var(--font-cond)', fontStyle:'italic', fontSize:'clamp(14px,1.5vw,17px)', color:'white', lineHeight:1.55 }}>"No Filipino should have to worry about their next meal."</div>
                <div style={{ fontFamily:'var(--font-cond)', fontSize:10, fontWeight:600, letterSpacing:'0.12em', color:'var(--text-muted)', marginTop:8, textTransform:'uppercase' }}>— Raymond Land III, Founder</div>
              </div>
            </div>
            <div style={{ position:'absolute', bottom:-24, right:-24, background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:6, padding:'16px 20px', boxShadow:'0 8px 30px rgba(0,0,0,0.4)' }}>
              <div style={{ fontFamily:'var(--font-script)', fontSize:28, background:'linear-gradient(135deg,#22D3EE,#42A5F5)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', lineHeight:1 }}>2022</div>
              <div className="label" style={{ marginTop:4 }}>Founded</div>
            </div>
          </div>

          <div className="apple-right" data-delay="120">
            <span className="section-tag">Welcome to PHPantry Philippines</span>
            <h2 style={{ fontSize:'clamp(26px,4vw,50px)', lineHeight:1.1, marginBottom:16, color:'var(--text)' }}>A Heartfelt Initiative<br/>for Every <span className="text-teal">Filipino</span></h2>
            <div className="accent-line" />
            <p style={{ fontSize:15, color:'var(--text-muted)', lineHeight:1.9, marginBottom:16, fontWeight:300 }}>PHPantry Philippines is a heartfelt initiative founded by Raymond Land III, built on the belief that no Filipino should have to worry about their next meal. Through strategically placed community pantries, we create safe and reliable spaces where individuals and families can access essential food and supplies with dignity.</p>
            <p style={{ fontSize:15, color:'var(--text-muted)', lineHeight:1.9, marginBottom:28, fontWeight:300 }}>More than just giving, PHPantry is about sharing. It brings together communities, churches, volunteers, and partners to lift each other up—proving that even the smallest act of kindness can make a lasting difference.</p>
            <div className="grid-2col" style={{ gap:12 }}>
              {[{icon:'🎯',title:'Our Mission',text:'To make food accessible, consistent, and dignified for every Filipino in need by building community-driven pantries rooted in compassion, faith, and shared responsibility.',accent:'#0E7490'},{icon:'🌟',title:'Our Vision',text:'A Philippines where no one goes hungry and every community is strengthened through unity, care, and hope.',accent:'#3B1FA3'}].map(item=>(
                <div key={item.title} style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:6, padding:'20px 18px', position:'relative', overflow:'hidden' }}>
                  <div style={{ position:'absolute', left:0, top:0, bottom:0, width:3, background:item.accent, borderRadius:'6px 0 0 6px' }} />
                  <div style={{ fontSize:20, marginBottom:8 }}>{item.icon}</div>
                  <div style={{ fontFamily:'var(--font-cond)', fontSize:15, fontWeight:700, color:'var(--text)', marginBottom:6 }}>{item.title}</div>
                  <div style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.75 }}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section className="section-pad" style={{ background:'var(--bg-card2)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:20 }}>
            <span className="section-tag" style={{ display:'block' }}>The Process</span>
            <h2 style={{ fontSize:'clamp(24px,4vw,48px)', color:'var(--text)', marginBottom:12 }}>How <span className="text-teal">It Works</span></h2>
            <div style={{ width:40, height:2, background:'linear-gradient(90deg,#0E7490,transparent)', margin:'0 auto 16px' }} />
            <p style={{ fontSize:16, color:'rgba(255,255,255,0.7)', maxWidth:480, margin:'0 auto 20px', lineHeight:1.8, fontWeight:300 }}>At the heart of PHPantry is one simple principle:</p>
            <div style={{ display:'inline-block', background:'rgba(14,116,144,0.1)', border:'1px solid rgba(14,116,144,0.25)', borderRadius:6, padding:'12px 24px', marginBottom:48 }}>
              <span style={{ fontFamily:'var(--font-cond)', fontStyle:'italic', fontSize:'clamp(14px,2vw,20px)', color:'#67E8F9' }}>"Take what you need, give what you can."</span>
            </div>
          </div>
          <div className="grid-how">
            <div className="how-connector" />
            {[{n:'01',title:'Central Warehouse',text:'Food and supplies are organized from central warehouses—sorted, checked, and prepared for distribution.',emoji:'📦',color:'#0E7490'},{n:'02',title:'Distribution',text:'With the help of volunteers and partners, each pantry ensures resources reach the right people—fairly and consistently.',emoji:'🚐',color:'#1565C0'},{n:'03',title:'Church Hubs',text:'Churches serve as trusted community anchors—offering space, volunteers, and guidance.',emoji:'⛪',color:'#3B1FA3'},{n:'04',title:'Community Access',text:'Each pantry ensures that resources reach the right people at the right time—with dignity.',emoji:'🤝',color:'#7B0028'}].map((step,i)=>(
              <div key={i} className="apple-fade" data-delay={`${i*80}`} style={{ textAlign:'center', padding:'0 12px', position:'relative', zIndex:1 }}>
                <div style={{ width:80, height:80, borderRadius:'50%', margin:'0 auto 18px', background:`linear-gradient(135deg,${step.color},${step.color}CC)`, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:2, boxShadow:`0 8px 24px ${step.color}55` }}>
                  <div style={{ fontSize:20 }}>{step.emoji}</div>
                  <div style={{ fontFamily:'var(--font-cond)', fontSize:9, fontWeight:700, letterSpacing:'0.1em', color:'rgba(255,255,255,0.7)' }}>{step.n}</div>
                </div>
                <div style={{ fontFamily:'var(--font-cond)', fontSize:15, fontWeight:700, color:'var(--text)', marginBottom:8 }}>{step.title}</div>
                <div style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.7 }}>{step.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CORE VALUES ══ */}
      <section className="section-pad" style={{ background:'var(--bg)', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'-10%', left:'5%', width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle,rgba(14,116,144,0.05),transparent 70%)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:'-10%', right:'5%', width:350, height:350, borderRadius:'50%', background:'radial-gradient(circle,rgba(59,31,163,0.06),transparent 70%)', pointerEvents:'none' }} />
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:48 }}>
            <span className="section-tag" style={{ display:'block' }}>What We Stand For</span>
            <h2 style={{ fontSize:'clamp(24px,4vw,48px)', color:'var(--text)', marginBottom:14 }}>Our Core <span className="text-chrome">Values</span></h2>
            <div style={{ width:80, height:2, background:'linear-gradient(90deg,transparent,#0E7490,#3B1FA3,transparent)', margin:'0 auto' }} />
          </div>
          <div className="grid-3col">
            {[{n:'01',name:'Compassion',desc:'We serve with care and treat every individual with dignity.'},{n:'02',name:'Community',desc:'We believe in collective effort—neighbors helping neighbors.'},{n:'03',name:'Faith in Action',desc:'We partner with churches to turn love into service.'},{n:'04',name:'Integrity',desc:'We ensure safe, organized, and responsible distribution—no expired goods, proper handling always.'},{n:'05',name:'Stewardship',desc:'We manage resources wisely to maximize impact.'},{n:'06',name:'Hope',desc:'We believe small acts of kindness can create lasting change.'}].map((v,i)=>(
              <div key={i} className="apple-scale value-card-hover" data-delay={`${(i%3)*100}`} style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:6, padding:'26px 22px' }}>
                <div style={{ fontFamily:'var(--font-cond)', fontSize:10, fontWeight:700, letterSpacing:'0.2em', color:'rgba(14,116,144,0.8)', marginBottom:12, textTransform:'uppercase' }}>{v.n}</div>
                <div style={{ fontFamily:'var(--font-cond)', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:10 }}>{v.name}</div>
                <div style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.8 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STORY + CHURCH ══ */}
      <section className="section-pad" style={{ background:'var(--bg-card2)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }} className="grid-2col">
          <div className="apple-left" data-delay="0">
            <span className="section-tag">The Story Behind the Pantry</span>
            <h2 style={{ fontSize:'clamp(22px,3vw,40px)', color:'var(--text)', marginBottom:14 }}>Born from <span className="text-gradient">Compassion</span></h2>
            <div className="accent-line" />
            <p style={{ fontSize:15, color:'var(--text-muted)', lineHeight:1.9, marginBottom:14, fontWeight:300 }}>PHPantry began as a response to the daily struggles of Filipino families trying to put food on the table. What started as a small act of compassion quickly grew into a community movement.</p>
            <p style={{ fontSize:15, color:'var(--text-muted)', lineHeight:1.9, fontWeight:300, marginBottom:32 }}>With churches opening their doors and volunteers offering their time, each pantry became more than a place for food—it became a space of hope, dignity, and connection.</p>
            <div style={{ position:'relative', paddingLeft:28 }}>
              <div style={{ position:'absolute', left:7, top:8, bottom:8, width:2, background:'linear-gradient(to bottom,#0E7490,#3B1FA3,rgba(123,0,40,0.3))' }} />
              {[{title:'A Seed of Compassion',text:"One person's response to hunger—a simple act that refused to look away.",color:'#0E7490'},{title:'Churches Open Their Doors',text:'Local churches stepped forward as trusted community anchors.',color:'#1565C0'},{title:'Volunteers Join',text:'A growing network of hearts giving time, resources, and energy.',color:'#3B1FA3'},{title:'A Movement Grows',text:'Today, PHPantry Philippines reaches families across the nation.',color:'#7B0028'}].map((item,i)=>(
                <div key={i} className="apple-fade" data-delay={`${i*100}`} style={{ display:'flex', gap:18, marginBottom:24, position:'relative' }}>
                  <div style={{ position:'absolute', left:-28+7-9, top:4, width:16, height:16, borderRadius:'50%', background:item.color, border:'2px solid var(--bg-card2)', zIndex:1, flexShrink:0 }} />
                  <div>
                    <div style={{ fontFamily:'var(--font-cond)', fontSize:14, fontWeight:700, color:'var(--text)', marginBottom:4 }}>{item.title}</div>
                    <div style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.7 }}>{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="apple-right" data-delay="100" style={{ display:'flex', flexDirection:'column', gap:16 }}>
            <div style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderLeft:'3px solid #0E7490', borderRadius:6, padding:28 }}>
              <div style={{ fontSize:34, marginBottom:14 }}>⛪</div>
              <div style={{ fontFamily:'var(--font-cond)', fontSize:20, fontWeight:700, color:'var(--text)', marginBottom:12 }}>The Role of the Church</div>
              <p style={{ fontSize:14, color:'var(--text-muted)', lineHeight:1.85, marginBottom:10 }}>Churches play a vital role in PHPantry Philippines. They serve as trusted community anchors—offering space, volunteers, and guidance to help each pantry operate smoothly.</p>
              <p style={{ fontSize:14, color:'var(--text-muted)', lineHeight:1.85 }}>More importantly, they bring heart into the mission, turning faith into action and service into something deeply meaningful for the community.</p>
            </div>
            <div style={{ borderRadius:6, padding:28, textAlign:'center', background:'var(--hero-grad)', border:'1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontFamily:'var(--font-cond)', fontStyle:'italic', fontSize:'clamp(15px,2vw,18px)', color:'white', lineHeight:1.6, marginBottom:14 }}>"Each pantry became more than a place for food—it became a space of hope, dignity, and connection."</div>
              <div style={{ width:28, height:2, background:'rgba(14,116,144,0.8)', margin:'0 auto 12px' }} />
              <div className="label" style={{ color:'rgba(255,255,255,0.4)' }}>The PHPantry Story</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ GALLERY PREVIEW ══ */}
      <section className="section-pad" style={{ background:'var(--bg)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div className="grid-2col" style={{ alignItems:'end', marginBottom:40 }}>
            <div>
              <span className="section-tag">In the Community</span>
              <h2 style={{ fontSize:'clamp(24px,4vw,48px)', color:'var(--text)', marginBottom:10 }}>Moments of <span className="text-teal">Hope</span></h2>
              <div className="accent-line" />
            </div>
            <div>
              <p style={{ fontSize:15, color:'var(--text-muted)', lineHeight:1.8, marginBottom:16 }}>Every photo tells a story of neighbors coming together—of dignity restored, of hunger answered, and of a community choosing to care for its own.</p>
              <a href="/gallery" className="btn-outline" style={{ textDecoration:'none', display:'inline-flex' }}>View Full Gallery <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg></a>
            </div>
          </div>
          <div className="gallery-preview-grid">
            {[{src:'/IMG_3486.jpg',label:'Community Pantry Day',large:true},{src:'/IMG_3490.jpg',label:'Pantry in Action',large:false},{src:'/IMG_3493.jpg',label:'Community Gathering',large:false},{src:'/IMG_3497.jpg',label:'Supplies Ready',large:false},{src:'/IMG_3499.jpg',label:'Church Partnership',large:false},{src:'/IMG_3501.jpg',label:'A Moment of Connection',large:false}].map((item,i)=>(
              <div key={i} className="gallery-item" style={{ gridColumn: item.large?'span 2':'span 1', gridRow: item.large?'span 2':'span 1', position:'relative', background:'var(--bg-card)' }}>
                <img src={item.src} alt={item.label} style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover', objectPosition:'center', display:'block' }} className="gallery-img" />
                <div className="gallery-overlay" />
                <div className="gallery-caption"><div style={{ fontFamily:'var(--font-cond)', fontSize:12, fontWeight:600, color:'rgba(255,255,255,0.95)' }}>{item.label}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOUNDER ══ */}
      <FounderSection />

      {/* ══ GUIDELINES ══ */}
      <section className="section-pad" style={{ background:'var(--hero-grad)', position:'relative', overflow:'hidden' }}>
        <div className="grid-overlay" />
        <div style={{ maxWidth:1200, margin:'0 auto', position:'relative', zIndex:1 }} className="grid-2col">
          <div>
            <span className="section-tag" style={{ color:'rgba(103,232,249,0.7)' }}>Guidelines for Everyone</span>
            <h2 style={{ fontSize:'clamp(22px,4vw,44px)', color:'white', marginBottom:14 }}>Keeping It <span style={{ color:'#67E8F9' }}>Fair & Safe</span></h2>
            <div style={{ width:40, height:2, background:'#0E7490', marginBottom:18 }} />
            <p style={{ fontSize:14, color:'rgba(255,255,255,0.65)', lineHeight:1.8, marginBottom:20, fontWeight:300 }}>To keep the pantry fair, safe, and organized:</p>
            <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:12 }}>
              {['Take only what you need','Give what you can','No expired or unsafe food donations','Practice proper food handling and cleanliness','Respect volunteers and fellow community members','Help keep the pantry clean and accessible'].map((item,i)=>(
                <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:12, fontSize:14, color:'rgba(255,255,255,0.8)', lineHeight:1.6 }}>
                  <div style={{ width:20, height:20, borderRadius:'50%', background:'rgba(14,116,144,0.25)', border:'1px solid rgba(14,116,144,0.4)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#67E8F9" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:8, padding:'36px 32px', textAlign:'center' }}>
            <div style={{ fontFamily:'var(--font-cond)', fontSize:10, fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(103,232,249,0.5)', marginBottom:20 }}>Pantry Hours</div>
            <div style={{ fontFamily:'var(--font-script)', fontSize:'clamp(26px,4vw,34px)', color:'white', lineHeight:1.45, marginBottom:16 }}>"Take what you need,<br/>give what you can."</div>
            <div style={{ width:36, height:2, background:'#0E7490', margin:'0 auto 16px' }} />
            <p style={{ fontSize:13, color:'rgba(255,255,255,0.55)', lineHeight:1.8, marginBottom:6 }}>Each PHPantry location operates on a consistent schedule to ensure reliability for the community.</p>
            <p style={{ fontSize:13, color:'rgba(255,255,255,0.55)', lineHeight:1.8, marginBottom:24 }}>Please check your local pantry for specific days and hours of operation.</p>
            <Link href="/get-involved" className="btn-primary" style={{ display:'inline-flex' }}>Find a Pantry</Link>
          </div>
        </div>
      </section>

      {/* ══ BE PART OF THE MOVEMENT ══ */}
      <section className="section-pad" style={{ background:'var(--bg)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div className="cta-inner cta-pad">
            <div className="grid-overlay" />
            <div style={{ position:'relative', zIndex:1 }}>
              <span className="section-tag" style={{ color:'rgba(103,232,249,0.7)', display:'block' }}>Take Action</span>
              <h2 style={{ fontSize:'clamp(24px,4vw,54px)', color:'white', marginBottom:14 }}>Be Part of the Movement</h2>
              <p style={{ fontSize:'clamp(14px,1.8vw,17px)', color:'rgba(255,255,255,0.7)', maxWidth:540, margin:'0 auto 12px', lineHeight:1.8, fontWeight:300 }}>Whether you're donating, volunteering, or simply spreading the word, you are part of something bigger.</p>
              <p style={{ fontSize:'clamp(13px,1.6vw,16px)', color:'rgba(255,255,255,0.6)', maxWidth:520, margin:'0 auto 36px', lineHeight:1.8, fontStyle:'italic' }}>Together, we can build a future where fewer Filipinos go hungry—and where every act of kindness matters.</p>
              <div className="flex-btns" style={{ justifyContent:'center' }}>
                <Link href="/get-involved" style={{ background:'white', color:'#061822', padding:'12px 28px', borderRadius:4, fontFamily:'var(--font-cond)', fontSize:12, fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8, boxShadow:'0 4px 20px rgba(0,0,0,0.3)', justifyContent:'center' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                  Volunteer Now
                </Link>
                <Link href="/get-involved" className="btn-outline" style={{ color:'white', borderColor:'rgba(255,255,255,0.25)', justifyContent:'center' }}>Make a Donation</Link>
              </div>
            </div>
          </div>
          <div className="involve-cards">
            {[{emoji:'🙌',title:'Volunteer',text:'Offer your time and heart. Help sort, distribute, and serve your community at a PHPantry hub near you.',color:'#0E7490'},{emoji:'💙',title:'Donate',text:'Your donation—whether food, supplies, or financial support—directly feeds families across the Philippines.',color:'#3B1FA3'},{emoji:'📣',title:'Spread the Word',text:'Share our mission with your network. Every voice amplifies hope and invites more helpers to join the table.',color:'#7B0028'}].map((card,i)=>(
              <div key={i} className="apple-fade involve-card-hover" data-delay={`${i*120}`} style={{ background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:6, padding:'28px 24px', textAlign:'center' }}>
                <div style={{ width:56, height:56, background:`${card.color}1A`, border:`1px solid ${card.color}55`, borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 16px', fontSize:24 }}>{card.emoji}</div>
                <div style={{ fontFamily:'var(--font-cond)', fontSize:18, fontWeight:700, color:'var(--text)', marginBottom:8 }}>{card.title}</div>
                <div style={{ fontSize:13, color:'var(--text-muted)', lineHeight:1.8 }}>{card.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
