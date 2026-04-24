'use client'
import { useState } from 'react'

// ─────────────────────────────────────────────────────────────
// YOUR VIDEO: https://youtu.be/U9EX3Pt0ff8
// IMPORTANT: Make sure the video is set to PUBLIC or UNLISTED
// on YouTube (not Private) — private videos block embeds.
// YouTube → Studio → Videos → click video → Details → Visibility
// ─────────────────────────────────────────────────────────────
const VIDEO_ID = 'U9EX3Pt0ff8'

// Autoplay embed URL — muted is required by browsers for autoplay
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1&controls=1&color=white`

// Poster = your uploaded /public/video-poster.jpg
// Falls back to YouTube's thumbnail if poster not found
const POSTER = '/video-poster.jpg'

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section style={{
      padding: '80px 5% 100px',
      background: '#050D1A',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* top/bottom gradient bleeds */}
      <div style={{ position:'absolute',top:0,left:0,right:0,height:160,background:'linear-gradient(to bottom,rgba(14,116,144,0.06),transparent)',pointerEvents:'none' }} />
      <div style={{ position:'absolute',bottom:0,left:0,right:0,height:160,background:'linear-gradient(to top,rgba(7,13,24,0.8),transparent)',pointerEvents:'none' }} />

      <div style={{ maxWidth:1100, margin:'0 auto', position:'relative', zIndex:1 }}>

        {/* Headline */}
        <div className="apple-fade" style={{ textAlign:'center', marginBottom:52 }}>
          <span className="section-tag" style={{ display:'block', marginBottom:12 }}>Our Story in Motion</span>
          <h2 style={{ fontSize:'clamp(28px,4vw,52px)', color:'var(--text)', lineHeight:1.1, marginBottom:16 }}>
            See the Movement <span className="text-teal">Come Alive</span>
          </h2>
          <p style={{ fontSize:16, color:'var(--text-muted)', maxWidth:520, margin:'0 auto', lineHeight:1.8, fontWeight:300 }}>
            Every pantry. Every volunteer. Every family. Watch how PHPantry Philippines is changing lives one community at a time.
          </p>
        </div>

        {/* 16:9 Video */}
        <div className="apple-scale" data-delay="120">
          <div style={{
            position:'relative',
            width:'100%',
            paddingBottom:'56.25%',
            borderRadius:12,
            overflow:'hidden',
            background:'#000',
            boxShadow:'0 40px 120px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.06)',
          }}>

            {/* Poster + play button — shown before play */}
            {!playing && (
              <>
                {/* Thumbnail */}
                <div style={{
                  position:'absolute', inset:0,
                  backgroundImage:`url(${POSTER})`,
                  backgroundSize:'cover',
                  backgroundPosition:'center',
                  backgroundRepeat:'no-repeat',
                }} />
                {/* Dark tint */}
                <div style={{
                  position:'absolute', inset:0,
                  background:'linear-gradient(135deg,rgba(7,13,24,0.5) 0%,rgba(59,31,163,0.2) 50%,rgba(14,116,144,0.15) 100%)',
                }} />
                {/* Play button */}
                <button
                  onClick={() => setPlaying(true)}
                  aria-label="Play video"
                  style={{
                    position:'absolute', inset:0,
                    display:'flex', flexDirection:'column',
                    alignItems:'center', justifyContent:'center',
                    background:'transparent', border:'none', cursor:'pointer', gap:16,
                  }}
                >
                  <div style={{ position:'relative' }}>
                    {/* Pulse ring */}
                    <div style={{
                      position:'absolute', width:110, height:110, borderRadius:'50%',
                      background:'rgba(14,116,144,0.15)',
                      top:'50%', left:'50%', transform:'translate(-50%,-50%)',
                      animation:'ringPulse 2.2s ease-out infinite',
                    }} />
                    {/* Button circle */}
                    <div style={{
                      width:80, height:80, borderRadius:'50%',
                      background:'rgba(255,255,255,0.12)',
                      backdropFilter:'blur(12px)',
                      WebkitBackdropFilter:'blur(12px)',
                      border:'2px solid rgba(255,255,255,0.3)',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      transition:'all 0.3s',
                    }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" style={{ marginLeft:4 }}>
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                  <div style={{
                    fontFamily:'var(--font-cond)', fontSize:11, fontWeight:600,
                    letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.7)',
                  }}>
                    Watch Our Story
                  </div>
                </button>
              </>
            )}

            {/* YouTube iframe — only loads on click */}
            {playing && (
              <iframe
                src={EMBED_URL}
                style={{ position:'absolute', inset:0, width:'100%', height:'100%', border:'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="PHPantry Philippines — Our Story"
              />
            )}
          </div>

          {/* Stats row */}
          <div style={{
            display:'flex', justifyContent:'center', alignItems:'stretch',
            marginTop:28, flexWrap:'wrap',
            background:'var(--bg-card)', border:'1px solid var(--border)',
            borderRadius:8, overflow:'hidden',
          }}>
            {[
              { label:'Pantry Hubs',     val:'50+',  color:'#0E7490' },
              { label:'Families Served', val:'10K+', color:'#3B1FA3' },
              { label:'Volunteer Hours', val:'5K+',  color:'#7B0028' },
              { label:'Church Partners', val:'30+',  color:'#0E7490' },
            ].map((s, i) => (
              <div key={i} style={{
                flex:1, minWidth:120, textAlign:'center',
                padding:'22px 16px',
                borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                position:'relative',
              }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:s.color, opacity:0.7 }} />
                <div style={{ fontFamily:'var(--font-script)', fontSize:30, background:`linear-gradient(135deg,${s.color},${s.color}99)`, WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', lineHeight:1 }}>{s.val}</div>
                <div className="label" style={{ marginTop:6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ringPulse {
          0%   { transform:translate(-50%,-50%) scale(1);   opacity:0.7; }
          80%  { transform:translate(-50%,-50%) scale(1.9); opacity:0;   }
          100% { transform:translate(-50%,-50%) scale(1.9); opacity:0;   }
        }
      `}</style>
    </section>
  )
}
