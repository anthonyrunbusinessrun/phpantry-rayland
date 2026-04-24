'use client'
import { useState } from 'react'

export default function GetInvolved() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', location:'', type:'volunteer', message:'' })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <style>{`
        .gi-cards { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .form-row  { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
        @media(max-width:768px){
          .gi-cards { grid-template-columns:1fr !important; }
          .form-row  { grid-template-columns:1fr !important; }
          .submit-btn { width:100% !important; justify-content:center !important; }
        }
      `}</style>

      {/* HERO */}
      <section style={{ paddingTop:120, paddingBottom:80, paddingLeft:'5%', paddingRight:'5%', background:'linear-gradient(112deg,#05102A 0%,#0D2468 35%,#1565C0 65%,#C62828 100%)', position:'relative', overflow:'hidden' }}>
        <div className="grid-overlay" />
        <div style={{ maxWidth:1200, margin:'0 auto', position:'relative', zIndex:1 }}>
          <span className="section-tag" style={{ color:'rgba(255,255,255,0.6)' }}>Take Action</span>
          <h1 style={{ fontSize:'clamp(32px,6vw,80px)', color:'white', lineHeight:1.05 }}>
            Be Part of the <span style={{ fontFamily:'var(--font-script)', fontWeight:400 }}>Movement</span>
          </h1>
          <div style={{ width:40, height:2, background:'var(--red)', marginTop:20, marginBottom:24 }} />
          <p style={{ fontSize:'clamp(14px,2vw,17px)', color:'rgba(255,255,255,0.7)', maxWidth:520, lineHeight:1.8, fontWeight:300 }}>
            Whether you're donating, volunteering, or spreading the word — you are part of something bigger than yourself.
          </p>
        </div>
      </section>

      {/* 3 WAYS */}
      <section style={{ padding:'64px 5%', background:'var(--bg-card2)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div className="gi-cards">
            {[
              { emoji:'🙌', title:'Volunteer', text:'Offer your time and heart. Help sort, distribute, and serve your community at a PHPantry hub near you. No experience needed — just a willing heart.', color:'var(--blue)' },
              { emoji:'💙', title:'Donate', text:'Your donation — whether food, supplies, or financial support — directly feeds families across the Philippines. Every contribution matters.', color:'var(--red)' },
              { emoji:'📣', title:'Spread the Word', text:'Share our mission with your network. Every voice amplifies hope and invites more helpers to join the table. Tell a friend today.', color:'var(--blue-light)' },
            ].map((card,i)=>(
              <div key={i} className="card card-blue-glow" style={{ padding:'28px 22px', textAlign:'center' }}>
                <div style={{ width:60, height:60, background:`${card.color}1A`, border:`1px solid ${card.color}44`, borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 18px', fontSize:26 }}>{card.emoji}</div>
                <div style={{ fontFamily:'var(--font-cond)', fontSize:20, fontWeight:700, color:'var(--text)', marginBottom:10 }}>{card.title}</div>
                <div style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.8 }}>{card.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section style={{ padding:'80px 5%', background:'var(--bg)' }}>
        <div style={{ maxWidth:680, margin:'0 auto' }}>
          <span className="section-tag">Sign Up</span>
          <h2 style={{ fontSize:'clamp(24px,4vw,44px)', color:'var(--text)', marginBottom:12 }}>
            Join the <span className="text-blue">PHPantry</span> Family
          </h2>
          <div className="accent-line" />
          <p style={{ fontSize:15, color:'var(--text-muted)', lineHeight:1.8, marginBottom:36, marginTop:14 }}>
            Fill out the form below and our team will reach out to you about the next steps to get involved.
          </p>

          {status === 'success' ? (
            <div style={{ padding:'36px 28px', background:'var(--bg-card)', border:'1px solid rgba(46,125,50,0.3)', borderRadius:6, textAlign:'center' }}>
              <div style={{ fontSize:40, marginBottom:14 }}>🎉</div>
              <div style={{ fontFamily:'var(--font-cond)', fontSize:22, fontWeight:700, color:'var(--text)', marginBottom:10 }}>Thank You!</div>
              <div style={{ fontSize:14, color:'var(--text-muted)', lineHeight:1.7 }}>Your application has been received. We'll reach out to you soon. Welcome to the movement!</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display:'flex', flexDirection:'column', gap:18 }}>
              <div className="form-row">
                <div>
                  <label>Full Name</label>
                  <input type="text" placeholder="Juan dela Cruz" required value={form.name} onChange={e=>setForm(p=>({...p,name:e.target.value}))} />
                </div>
                <div>
                  <label>Email Address</label>
                  <input type="email" placeholder="juan@email.com" required value={form.email} onChange={e=>setForm(p=>({...p,email:e.target.value}))} />
                </div>
              </div>
              <div className="form-row">
                <div>
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+63 912 345 6789" value={form.phone} onChange={e=>setForm(p=>({...p,phone:e.target.value}))} />
                </div>
                <div>
                  <label>City / Location</label>
                  <input type="text" placeholder="Manila, NCR" value={form.location} onChange={e=>setForm(p=>({...p,location:e.target.value}))} />
                </div>
              </div>
              <div>
                <label>How would you like to help?</label>
                <select value={form.type} onChange={e=>setForm(p=>({...p,type:e.target.value}))}>
                  <option value="volunteer">Volunteer at a Pantry Hub</option>
                  <option value="donate">Make a Donation</option>
                  <option value="church">Church Partnership</option>
                  <option value="corporate">Corporate / Organization Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label>Message (Optional)</label>
                <textarea placeholder="Tell us a little about yourself or how you'd like to help..." rows={4} value={form.message} onChange={e=>setForm(p=>({...p,message:e.target.value}))} />
              </div>
              <button type="submit" className="btn-primary submit-btn" disabled={status==='loading'} style={{ alignSelf:'flex-start', opacity:status==='loading'?0.7:1 }}>
                {status==='loading' ? 'Submitting...' : 'Submit Application'}
                {status!=='loading' && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>}
              </button>
              {status==='error' && <div style={{ fontSize:13, color:'var(--red-light)' }}>Something went wrong. Please try again or contact us directly.</div>}
            </form>
          )}
        </div>
      </section>
    </>
  )
}
