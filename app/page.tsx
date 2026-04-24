'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

const STATS = [
  { num: '50+', label: 'Pantry Hubs' },
  { num: '10K+', label: 'Families Served' },
  { num: '200+', label: 'Volunteers' },
  { num: '30+', label: 'Church Partners' },
]

const VALUES = [
  { num: '01', name: 'Compassion', desc: 'We serve with care and treat every individual with dignity. Everyone who walks through our pantry doors deserves respect and kindness.' },
  { num: '02', name: 'Community', desc: 'We believe in collective effort — neighbors helping neighbors. Together we are stronger than any challenge we face.' },
  { num: '03', name: 'Faith in Action', desc: 'We partner with churches to turn love into service — making faith tangible and deeply meaningful for every community.' },
  { num: '04', name: 'Integrity', desc: 'We ensure safe, organized, and responsible distribution. No expired goods. Proper handling always. Trust is everything.' },
  { num: '05', name: 'Stewardship', desc: 'We manage resources wisely to maximize impact. Every peso, every kilo of rice, every volunteer hour is treated as precious.' },
  { num: '06', name: 'Hope', desc: 'We believe small acts of kindness can create lasting change. Every pantry visit is a seed of hope planted in our nation.' },
]

const GALLERY = [
  { label: 'Community distribution day — volunteers working with joy', color: 'from-blue-900 to-blue-700', emoji: '🤲', large: true },
  { label: 'Church partner hub', color: 'from-slate-900 to-blue-900', emoji: '⛪', large: false },
  { label: 'Pantry essentials', color: 'from-blue-900 to-indigo-800', emoji: '🍱', large: false },
  { label: 'Families receiving support', color: 'from-indigo-900 to-blue-800', emoji: '👨‍👩‍👧‍👦', large: false },
  { label: 'Volunteers in action', color: 'from-blue-800 to-sky-700', emoji: '🙌', large: false },
  { label: 'Community first, always', color: 'from-slate-900 to-blue-900', emoji: '❤️', large: false },
]

export default function Home() {
  const revealRefs = useRef<HTMLElement[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80)
        }
      }),
      { threshold: 0.1 }
    )
    revealRefs.current.forEach(el => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const addReveal = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  return (
    <>
      {/* ══ HERO ══ */}
      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(112deg, #05102A 0%, #0D2468 20%, #1565C0 42%, #6A1B9A 62%, #C62828 80%, #7B0000 100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '130px 5% 80px', position: 'relative', overflow: 'hidden',
      }}>
        <div className="grid-overlay" />

        {/* Orbs */}
        <div style={{ position: 'absolute', top: -100, left: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,101,192,0.2), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, right: -80, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(198,40,40,0.2), transparent 70%)', pointerEvents: 'none' }} />

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 28,
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: 100, padding: '6px 18px',
          fontFamily: 'var(--font-cond)', fontSize: 11, fontWeight: 600,
          letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)',
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4CAF50', animation: 'blink 2s infinite', display: 'inline-block' }} />
          Active Community Movement
        </div>

        {/* Title */}
        <div style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(16px, 2.5vw, 22px)', color: 'rgba(255,255,255,0.6)', marginBottom: 8, letterSpacing: '0.05em' }}>
          Welcome to
        </div>
        <h1 style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(64px, 10vw, 120px)', color: 'white', lineHeight: 1, marginBottom: 4, fontWeight: 700 }}>
          PH Pantry
        </h1>
        <div style={{ fontFamily: 'var(--font-cond)', fontSize: 'clamp(12px, 1.8vw, 16px)', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 28 }}>
          PHILIPPINES
        </div>

        <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'rgba(255,255,255,0.72)', maxWidth: 560, lineHeight: 1.75, marginBottom: 16, fontWeight: 300 }}>
          A simple idea. A shared responsibility. A growing movement of hope.
        </p>

        <div style={{ fontFamily: 'var(--font-cond)', fontStyle: 'italic', fontSize: 'clamp(14px, 1.8vw, 18px)', color: 'rgba(255,255,255,0.85)', marginBottom: 44, letterSpacing: '0.04em' }}>
          "Take what you need, give what you can."
        </div>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/get-involved" className="btn-primary">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
            Join the Movement
          </Link>
          <Link href="/about" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.25)' }}>
            Learn More
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ fontFamily: 'var(--font-cond)', fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Scroll</div>
          <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)', animation: 'scrollpulse 2s ease-in-out infinite' }} />
        </div>
        <style>{`@keyframes scrollpulse{0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}100%{transform:scaleY(0);transform-origin:bottom}}`}</style>
      </section>

      {/* ══ STATS BAR ══ */}
      <div style={{ background: '#07101D', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ padding: '32px 24px', textAlign: 'center', borderRight: i < 3 ? '1px solid var(--border)' : 'none' }}>
              <div className="stat-num">{s.num}</div>
              <div className="label" style={{ marginTop: 6 }}>{s.label}</div>
              <div style={{ width: 24, height: 2, background: i % 2 === 0 ? 'var(--blue)' : 'var(--red)', margin: '10px auto 0', borderRadius: 1 }} />
            </div>
          ))}
        </div>
      </div>

      {/* ══ MISSION ══ */}
      <section style={{ padding: '100px 5%', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          {/* Visual side */}
          <div ref={addReveal} className="reveal" style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 6, overflow: 'hidden', height: 480,
              background: 'linear-gradient(145deg, #071830, #1565C0)',
              border: '1px solid var(--border)', position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 70%, rgba(198,40,40,0.15), transparent 60%)' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 70% 30%, rgba(21,101,192,0.2), transparent 60%)' }} />
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ fontFamily: 'var(--font-script)', fontSize: 80, opacity: 0.25, color: 'white', lineHeight: 1 }}>PH</div>
                <div style={{ fontFamily: 'var(--font-script)', fontSize: 32, color: 'rgba(255,255,255,0.8)', marginTop: -10 }}>Pantry</div>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(5,16,42,0.95), transparent)', padding: '28px 28px 28px' }}>
                <div style={{ width: 28, height: 2, background: 'var(--red)', marginBottom: 12 }} />
                <div style={{ fontFamily: 'var(--font-cond)', fontStyle: 'italic', fontSize: 18, color: 'white', lineHeight: 1.5 }}>"No Filipino should worry about their next meal."</div>
                <div style={{ fontFamily: 'var(--font-cond)', fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', color: 'var(--text-muted)', marginTop: 8, textTransform: 'uppercase' }}>— Raymond Land III, Founder</div>
              </div>
            </div>
            {/* Accent card */}
            <div className="card card-blue-glow" style={{ position: 'absolute', bottom: -20, right: -20, padding: '18px 22px', background: 'var(--bg-card)' }}>
              <div style={{ fontFamily: 'var(--font-script)', fontSize: 32, background: 'linear-gradient(135deg,#42A5F5,#90CAF9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>2022</div>
              <div className="label" style={{ marginTop: 4 }}>Founded</div>
            </div>
          </div>

          {/* Text side */}
          <div ref={addReveal} className="reveal">
            <span className="section-tag">Our Purpose</span>
            <h2 style={{ fontSize: 'clamp(32px,4vw,52px)', lineHeight: 1.1, marginBottom: 16, color: 'var(--text)' }}>
              A Heartfelt<br /><span className="text-blue">Initiative</span> for<br />Every Filipino
            </h2>
            <div className="accent-line" />
            <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: 36, fontWeight: 300 }}>
              PHPantry Philippines is built on the belief that no Filipino should have to worry about their next meal. Through strategically placed community pantries, we create safe and reliable spaces where individuals and families can access essential food and supplies with dignity.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { icon: '🎯', title: 'Our Mission', text: 'To make food accessible, consistent, and dignified for every Filipino in need — rooted in compassion, faith, and shared responsibility.', color: 'var(--blue)' },
                { icon: '🌟', title: 'Our Vision', text: 'A Philippines where no one goes hungry and every community is strengthened through unity, care, and hope.', color: 'var(--red)' },
              ].map(item => (
                <div key={item.title} className="card" style={{ padding: '22px 20px', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: item.color, borderRadius: '6px 0 0 6px' }} />
                  <div style={{ fontSize: 22, marginBottom: 10 }}>{item.icon}</div>
                  <div style={{ fontFamily: 'var(--font-cond)', fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.7 }}>{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ══ */}
      <section style={{ padding: '100px 5%', background: 'var(--bg-card2)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="section-tag" style={{ display: 'block' }}>The Process</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', color: 'var(--text)', marginBottom: 16 }}>How <span className="text-blue">It Works</span></h2>
            <div style={{ width: 40, height: 2, background: 'linear-gradient(90deg,var(--red),transparent)', margin: '0 auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, position: 'relative' }}>
            {/* Connecting line */}
            <div style={{ position: 'absolute', top: 44, left: '12.5%', right: '12.5%', height: 1, background: 'linear-gradient(90deg, var(--blue), rgba(198,40,40,0.6))', zIndex: 0 }} />
            {[
              { n: '01', title: 'Central Warehouse', text: 'Food and supplies are organized from central hubs across the region.', emoji: '📦' },
              { n: '02', title: 'Distribution', text: 'Dedicated volunteers transport resources to local pantry hubs.', emoji: '🚐' },
              { n: '03', title: 'Church Hubs', text: 'Churches serve as trusted community anchors offering space and heart.', emoji: '⛪' },
              { n: '04', title: 'Community Access', text: 'Families access essentials with dignity — fairly and consistently.', emoji: '🤝' },
            ].map((step, i) => (
              <div key={i} ref={addReveal} className="reveal" style={{ textAlign: 'center', padding: '0 20px', position: 'relative', zIndex: 1, transitionDelay: `${i * 0.1}s` }}>
                <div style={{
                  width: 88, height: 88, borderRadius: '50%', margin: '0 auto 20px',
                  background: `linear-gradient(135deg, #${i < 2 ? '1565C0' : 'C62828'}, #${i < 2 ? '1976D2' : 'B71C1C'})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: `0 8px 24px rgba(${i < 2 ? '21,101,192' : '198,40,40'},0.3)`,
                  flexDirection: 'column', gap: 2,
                }}>
                  <div style={{ fontSize: 20 }}>{step.emoji}</div>
                  <div style={{ fontFamily: 'var(--font-cond)', fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.7)' }}>{step.n}</div>
                </div>
                <div style={{ fontFamily: 'var(--font-cond)', fontSize: 17, fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>{step.title}</div>
                <div style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.7 }}>{step.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CORE VALUES ══ */}
      <section style={{ padding: '100px 5%', background: 'var(--bg)', position: 'relative', overflow: 'hidden' }}>
        {/* Gradient blobs */}
        <div style={{ position: 'absolute', top: -100, left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(21,101,192,0.07),transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -100, right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(198,40,40,0.07),transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <span className="section-tag" style={{ display: 'block' }}>What We Stand For</span>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', color: 'var(--text)', marginBottom: 16 }}>Our Core <span className="text-chrome">Values</span></h2>
            <div style={{ width: 80, height: 2, background: 'linear-gradient(90deg,transparent,var(--red),transparent)', margin: '0 auto' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {VALUES.map((v, i) => (
              <div key={i} ref={addReveal} className="reveal card card-blue-glow" style={{ padding: '30px 26px', transitionDelay: `${(i % 3) * 0.08}s` }}>
                <div style={{ fontFamily: 'var(--font-cond)', fontSize: 10, fontWeight: 700, letterSpacing: '0.2em', color: 'var(--red-light)', marginBottom: 14, textTransform: 'uppercase' }}>{v.num} — {v.name}</div>
                <div style={{ fontFamily: 'var(--font-cond)', fontSize: 24, fontWeight: 700, color: 'var(--text)', marginBottom: 12 }}>{v.name}</div>
                <div style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.8 }}>{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ GALLERY PREVIEW ══ */}
      <section style={{ padding: '100px 5%', background: 'var(--bg-card2)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'end', marginBottom: 48 }}>
            <div>
              <span className="section-tag">In the Community</span>
              <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', color: 'var(--text)', marginBottom: 12 }}>Moments of <span className="text-blue">Hope</span></h2>
              <div className="accent-line" />
            </div>
            <div>
              <p style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.8 }}>Every photo tells a story of neighbors coming together — of dignity restored, of hunger answered, and of a community choosing to care for its own.</p>
              <Link href="/gallery" className="btn-outline" style={{ marginTop: 20, display: 'inline-flex' }}>
                View Full Gallery
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
              </Link>
            </div>
          </div>

          {/* Gallery grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto', gap: 12 }}>
            {GALLERY.map((item, i) => (
              <div key={i} className="gallery-item" style={{ gridColumn: i === 0 ? 'span 2' : 'span 1', gridRow: i === 0 ? 'span 2' : 'span 1', height: i === 0 ? 360 : 170 }}>
                <div className="gallery-img" style={{ background: `linear-gradient(145deg, #${i % 2 === 0 ? '071830' : '0D1B3E'}, #${i < 3 ? '1565C0' : '0D2468'})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: i === 0 ? 64 : 36, opacity: 0.7, width: '100%', height: '100%' }}>
                  {item.emoji}
                </div>
                <div className="gallery-overlay" />
                <div className="gallery-caption">
                  <div style={{ fontFamily: 'var(--font-cond)', fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section style={{ padding: '100px 5%', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            borderRadius: 8, padding: '80px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden',
            background: 'linear-gradient(112deg, #071830 0%, #0D2468 30%, #1565C0 55%, #6A1B9A 75%, #C62828 90%, #7B0000 100%)',
            border: '1px solid var(--border)',
          }}>
            <div className="grid-overlay" />
            <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <span className="section-tag" style={{ color: 'rgba(255,255,255,0.6)', display: 'block' }}>Take Action</span>
              <h2 style={{ fontSize: 'clamp(28px,4vw,52px)', color: 'white', marginBottom: 16 }}>Be Part of the Movement</h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.75, fontWeight: 300 }}>
                Whether you're donating, volunteering, or spreading the word — you are part of something bigger. Together, we build a future where fewer Filipinos go hungry.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/get-involved" className="btn-primary" style={{ background: 'white', color: '#0D1B3E' }}>
                  Volunteer Now
                </Link>
                <Link href="/get-involved" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                  Make a Donation
                </Link>
              </div>
            </div>
          </div>

          {/* 3 cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginTop: 40 }}>
            {[
              { emoji: '🙌', title: 'Volunteer', text: 'Offer your time and heart. Help sort, distribute, and serve at a PHPantry hub near you.', color: 'var(--blue)' },
              { emoji: '💙', title: 'Donate', text: 'Your donation — food, supplies, or financial support — directly feeds families across the Philippines.', color: 'var(--red)' },
              { emoji: '📣', title: 'Spread the Word', text: 'Share our mission. Every voice amplifies hope and invites more helpers to the table.', color: 'var(--blue-light)' },
            ].map((card, i) => (
              <div key={i} ref={addReveal} className="reveal card card-blue-glow" style={{ padding: '32px 28px', textAlign: 'center', transitionDelay: `${i * 0.1}s` }}>
                <div style={{ width: 60, height: 60, background: `${card.color}22`, border: `1px solid ${card.color}44`, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', fontSize: 26 }}>{card.emoji}</div>
                <div style={{ fontFamily: 'var(--font-cond)', fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 10 }}>{card.title}</div>
                <div style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.75 }}>{card.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
