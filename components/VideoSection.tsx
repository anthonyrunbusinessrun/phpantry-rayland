'use client'
import { useState } from 'react'

const VIDEO_ID = '-THZjM5EJdZs'
// autoplay=1, mute=1 required by browsers for autoplay without click
// Volume set to 50 via postMessage after iframe loads
const EMBED_URL = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1&controls=1&color=white&enablejsapi=1`

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section style={{
      padding: '80px 5% 100px',
      background: '#050D1A',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ position:'absolute', top:0, left:0, right:0, height:160, background:'linear-gradient(to bottom,rgba(14,116,144,0.06),transparent)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:160, background:'linear-gradient(to top,rgba(7,13,24,0.8),transparent)', pointerEvents:'none' }} />

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

        {/* 16:9 container */}
        <div className="apple-scale" data-delay="120">
          <div style={{
            position:'relative', width:'100%', paddingBottom:'56.25%',
            borderRadius:12, overflow:'hidden', background:'#000',
            boxShadow:'0 40px 120px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.06)',
          }}>

            {/* Always-visible background gradient so it's never black */}
            <div style={{
              position:'absolute', inset:0,
              background:'var(--hero-grad)',
              zIndex:0,
            }} />

            {/* Poster image on top of gradient */}
            <div style={{
              position:'absolute', inset:0, zIndex:1,
              backgroundImage:'url(/video-poster.jpg)',
              backgroundSize:'cover',
              backgroundPosition:'center',
              backgroundRepeat:'no-repeat',
              opacity: playing ? 0 : 1,
              transition:'opacity 0.3s',
            }} />

            {/* Dark tint overlay */}
            {!playing && (
              <div style={{
                position:'absolute', inset:0, zIndex:2,
                background:'linear-gradient(135deg,rgba(7,13,24,0.45) 0%,rgba(59,31,163,0.2) 50%,rgba(14,116,144,0.15) 100%)',
              }} />
            )}

            {/* Play button */}
            {!playing && (
              <button
                onClick={() => setPlaying(true)}
                aria-label="Play video"
                style={{
                  position:'absolute', inset:0, zIndex:3,
                  display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
                  background:'transparent', border:'none', cursor:'pointer', gap:16,
                }}
              >
                <div style={{ position:'relative' }}>
                  <div style={{
                    position:'absolute', width:110, height:110, borderRadius:'50%',
                    background:'rgba(14,116,144,0.15)',
                    top:'50%', left:'50%', transform:'translate(-50%,-50%)',
                    animation:'ringPulse 2.2s ease-out infinite',
                  }} />
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
                }}>Watch Our Story</div>
              </button>
            )}

            {/* YouTube iframe — autoplay, volume 50% via postMessage */}
            {playing && (
              <iframe
                id="yt-player"
                src={EMBED_URL}
                style={{ position:'absolute', inset:0, width:'100%', height:'100%', border:'none', zIndex:4 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="PHPantry Philippines — Our Story"
                onLoad={(e) => {
                  // Unmute and set volume to 50% after iframe loads
                  setTimeout(() => {
                    const frame = e.target as HTMLIFrameElement
                    try {
                      frame.contentWindow?.postMessage(JSON.stringify({
                        event: 'command', func: 'unMute', args: []
                      }), '*')
                      frame.contentWindow?.postMessage(JSON.stringify({
                        event: 'command', func: 'setVolume', args: [50]
                      }), '*')
                    } catch(_) {}
                  }, 1000)
                }}
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
