'use client'
import { useState, useRef } from 'react'

export default function VideoSection() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <section style={{ padding: '80px 5% 100px', background: '#050D1A', position: 'relative', overflow: 'hidden' }}>
      {/* subtle gradient bleed from hero above */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:160, background:'linear-gradient(to bottom, rgba(14,116,144,0.06), transparent)', pointerEvents:'none' }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Label + headline */}
        <div className="apple-fade" style={{ textAlign: 'center', marginBottom: 48 }}>
          <span className="section-tag" style={{ display:'block', marginBottom:12 }}>Our Story in Motion</span>
          <h2 style={{ fontSize: 'clamp(28px,4vw,52px)', color: 'var(--text)', lineHeight: 1.1, marginBottom: 16 }}>
            See the Movement <span className="text-teal">Come Alive</span>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.8, fontWeight: 300 }}>
            Every pantry. Every volunteer. Every family. Watch how PHPantry Philippines is changing lives one community at a time.
          </p>
        </div>

        {/* Video */}
        <div className="apple-scale" data-delay="100">
          <div className="video-wrapper">
            {/* 
              VIDEO FILE: Upload your video as /public/video.mp4
              The video must be in MP4 format for best browser support.
              Recommended: H.264 codec, max 50MB for fast loading.
            */}
            <video
              ref={videoRef}
              src="/video.mp4"
              poster="/video-poster.jpg"
              playsInline
              controls={playing}
              loop
              style={{ display: 'block' }}
            />

            {/* Custom play button — hides after play */}
            {!playing && (
              <button className="video-play-btn" onClick={handlePlay} aria-label="Play video">
                <div className="video-play-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </button>
            )}
          </div>

          {/* Caption below video */}
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', gap:24, marginTop:20, flexWrap:'wrap' }}>
            {[
              { label:'Communities Served', val:'50+' },
              { label:'Volunteer Hours', val:'5,000+' },
              { label:'Families Helped', val:'10,000+' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign:'center', padding:'0 16px', borderRight: i < 2 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ fontFamily:'var(--font-script)', fontSize:28, background:'linear-gradient(135deg,#22D3EE,#42A5F5)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', lineHeight:1 }}>{stat.val}</div>
                <div className="label" style={{ marginTop:4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
