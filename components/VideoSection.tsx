'use client'
import { useState } from 'react'

// ─────────────────────────────────────────────────────────────
// HOW TO SET YOUR VIDEO:
//
// OPTION A — YouTube (recommended):
//   1. Upload your video to youtube.com
//   2. Get the video ID from the URL:
//      e.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ
//                                              ^^^^^^^^^^^^ this part
//   3. Set VIDEO_ID below to that ID
//   4. Set VIDEO_SOURCE to 'youtube'
//
// OPTION B — Vimeo:
//   1. Upload to vimeo.com
//   2. Get the numeric ID from the URL:
//      e.g. https://vimeo.com/123456789
//                             ^^^^^^^^^ this part
//   3. Set VIDEO_ID below to that ID
//   4. Set VIDEO_SOURCE to 'vimeo'
// ─────────────────────────────────────────────────────────────

const VIDEO_SOURCE: 'youtube' | 'vimeo' = 'youtube'
const VIDEO_ID = 'U9EX3Pt0ff8'

// Optional: thumbnail image shown before play
// Upload a JPG to /public/video-poster.jpg OR use YouTube's auto thumbnail
const POSTER_URL = VIDEO_SOURCE === 'youtube'
  ? `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`
  : '/video-poster.jpg'

function getEmbedUrl() {
  if (VIDEO_SOURCE === 'youtube') {
    return `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&color=white&iv_load_policy=3`
  }
  return `https://player.vimeo.com/video/${VIDEO_ID}?autoplay=1&color=0e7490&title=0&byline=0&portrait=0`
}

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section style={{
      padding: '80px 5% 100px',
      background: '#050D1A',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* gradient bleed from hero */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:160, background:'linear-gradient(to bottom, rgba(14,116,144,0.06), transparent)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:160, background:'linear-gradient(to top, rgba(7,13,24,0.8), transparent)', pointerEvents:'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

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

        {/* 16:9 video container */}
        <div className="apple-scale" data-delay="120">
          <div style={{
            position:'relative',
            width:'100%',
            paddingBottom:'56.25%',
            borderRadius:12,
            overflow:'hidden',
            background:'#000',
            boxShadow:'0 40px 120px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06)',
          }}>

            {/* Thumbnail + play button shown BEFORE play */}
            {!playing && (
              <>
                {/* Poster image */}
                <div style={{
                  position:'absolute', inset:0,
                  backgroundImage: `url(${POSTER_URL})`,
                  backgroundSize:'cover',
                  backgroundPosition:'center',
                  backgroundRepeat:'no-repeat',
                  filter:'brightness(0.75)',
                }} />

                {/* Dark overlay gradient */}
                <div style={{
                  position:'absolute', inset:0,
                  background:'linear-gradient(135deg, rgba(7,13,24,0.4) 0%, rgba(59,31,163,0.15) 50%, rgba(14,116,144,0.1) 100%)',
                }} />

                {/* Play button */}
                <button
                  onClick={() => setPlaying(true)}
                  aria-label="Play video"
                  style={{
                    position:'absolute', inset:0,
                    display:'flex', flexDirection:'column',
                    alignItems:'center', justifyContent:'center',
                    background:'transparent', border:'none', cursor:'pointer',
                    gap:16,
                  }}
                >
                  {/* Outer ring pulse */}
                  <div style={{ position:'relative' }}>
                    <div style={{
                      position:'absolute',
                      width:100, height:100,
                      borderRadius:'50%',
                      background:'rgba(14,116,144,0.2)',
                      top:'50%', left:'50%',
                      transform:'translate(-50%,-50%)',
                      animation:'ringPulse 2s ease-in-out infinite',
                    }} />
                    {/* Play circle */}
                    <div style={{
                      width:80, height:80,
                      borderRadius:'50%',
                      background:'rgba(255,255,255,0.15)',
                      backdropFilter:'blur(12px)',
                      WebkitBackdropFilter:'blur(12px)',
                      border:'2px solid rgba(255,255,255,0.35)',
                      display:'flex', alignItems:'center', justifyContent:'center',
                      transition:'all 0.3s',
                    }}>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="white" style={{ marginLeft:4 }}>
                        <polygon points="5,3 19,12 5,21" />
                      </svg>
                    </div>
                  </div>
                  <div style={{
                    fontFamily:'var(--font-cond)',
                    fontSize:12, fontWeight:600,
                    letterSpacing:'0.18em',
                    textTransform:'uppercase',
                    color:'rgba(255,255,255,0.75)',
                  }}>
                    Watch Our Story
                  </div>
                </button>
              </>
            )}

            {/* Embed iframe — only loads when play is clicked (saves bandwidth) */}
            {playing && (
              <iframe
                src={getEmbedUrl()}
                style={{ position:'absolute', inset:0, width:'100%', height:'100%', border:'none' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title="PHPantry Philippines — Our Story"
              />
            )}
          </div>

          {/* Stats below video */}
          <div style={{
            display:'flex', justifyContent:'center', alignItems:'center',
            gap:0, marginTop:32, flexWrap:'wrap',
            background:'var(--bg-card)', border:'1px solid var(--border)',
            borderRadius:8, overflow:'hidden',
          }}>
            {[
              { label:'Pantry Hubs',      val:'50+',   color:'#0E7490' },
              { label:'Families Served',  val:'10K+',  color:'#3B1FA3' },
              { label:'Volunteer Hours',  val:'5K+',   color:'#7B0028' },
              { label:'Church Partners',  val:'30+',   color:'#0E7490' },
            ].map((stat, i) => (
              <div key={i} style={{
                flex:1, minWidth:120,
                textAlign:'center',
                padding:'24px 16px',
                borderRight: i < 3 ? '1px solid var(--border)' : 'none',
                position:'relative',
              }}>
                <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background:stat.color, opacity:0.6 }} />
                <div style={{
                  fontFamily:'var(--font-script)', fontSize:32,
                  background:`linear-gradient(135deg,${stat.color},${stat.color}99)`,
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', lineHeight:1,
                }}>{stat.val}</div>
                <div className="label" style={{ marginTop:6 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ringPulse {
          0%   { transform: translate(-50%,-50%) scale(1);   opacity: 0.6; }
          70%  { transform: translate(-50%,-50%) scale(1.8); opacity: 0; }
          100% { transform: translate(-50%,-50%) scale(1.8); opacity: 0; }
        }
      `}</style>
    </section>
  )
}
