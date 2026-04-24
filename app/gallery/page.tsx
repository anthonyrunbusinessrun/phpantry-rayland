import ScrollReveal from '@/components/ScrollReveal'

const PHOTOS = [
  { emoji:'🤲', label:'Community Distribution Day',  caption:'Volunteers working together to serve hundreds of families', large:true,  bg1:'071830', bg2:'1565C0' },
  { emoji:'⛪', label:'Church Partner Hub',          caption:'Local churches opening their doors as pantry anchors',    large:false, bg1:'0D1B3E', bg2:'1976D2' },
  { emoji:'🍱', label:'Pantry Essentials',           caption:'Organized and ready — rice, canned goods, and more',      large:false, bg1:'071830', bg2:'0D47A1' },
  { emoji:'👨‍👩‍👧‍👦', label:'Families Receiving Support',  caption:'Dignity in every interaction at every pantry hub',       large:false, bg1:'0A1628', bg2:'1565C0' },
  { emoji:'🙌', label:'Volunteers in Action',        caption:"Hearts and hands coming together every distribution day",  large:false, bg1:'071830', bg2:'0D2B6E' },
  { emoji:'❤️', label:'Community First',             caption:"Neighbors helping neighbors — that's the PHPantry way",   large:false, bg1:'0A1628', bg2:'1976D2' },
  { emoji:'📦', label:'Warehouse Operations',        caption:'Central hub where it all begins — sorting and packing',   large:false, bg1:'071830', bg2:'1565C0' },
  { emoji:'🚐', label:'On the Road',                 caption:'Deliveries rolling out to community pantry hubs',         large:false, bg1:'0D1B3E', bg2:'0D47A1' },
  { emoji:'🌟', label:'A Moment of Hope',            caption:'Every visit is a seed of hope planted in our nation',     large:true,  bg1:'071830', bg2:'C62828' },
]

export default function Gallery() {
  return (
    <>
      <ScrollReveal />

      {/* HERO */}
      <section style={{ paddingTop:120, paddingBottom:80, paddingLeft:'5%', paddingRight:'5%', background:'linear-gradient(112deg,#05102A 0%,#1565C0 50%,#C62828 100%)', position:'relative', overflow:'hidden' }}>
        <div className="grid-overlay" />
        <div style={{ maxWidth:1200, margin:'0 auto', position:'relative', zIndex:1 }}>
          <span className="section-tag" style={{ color:'rgba(255,255,255,0.6)' }}>In the Community</span>
          <h1 style={{ fontSize:'clamp(36px,6vw,80px)', color:'white', lineHeight:1.05 }}>
            Moments of <span style={{ fontFamily:'var(--font-script)', fontWeight:400 }}>Hope</span>
          </h1>
          <div style={{ width:40, height:2, background:'var(--red)', marginTop:20, marginBottom:24 }} />
          <p style={{ fontSize:17, color:'rgba(255,255,255,0.7)', maxWidth:560, lineHeight:1.8, fontWeight:300 }}>
            Every photo tells a story of neighbors coming together — dignity restored, hunger answered, and a community choosing to care for its own.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section style={{ padding:'80px 5%', background:'var(--bg)' }}>
        <div style={{ maxWidth:1200, margin:'0 auto' }}>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:12 }}>
            {PHOTOS.map((photo, i) => (
              <div key={i} className="reveal gallery-item" data-delay={`${(i % 3) * 80}`} style={{ gridColumn: photo.large ? 'span 2' : 'span 1', height: photo.large ? 380 : 200, border:'1px solid var(--border)' }}>
                <div className="gallery-img" style={{ background:`linear-gradient(145deg,#${photo.bg1},#${photo.bg2})`, display:'flex', alignItems:'center', justifyContent:'center', fontSize: photo.large ? 72 : 40, width:'100%', height:'100%' }}>
                  {photo.emoji}
                </div>
                <div className="gallery-overlay" />
                <div className="gallery-caption">
                  <div style={{ fontFamily:'var(--font-cond)', fontSize:15, fontWeight:700, color:'white', marginBottom:4 }}>{photo.label}</div>
                  <div style={{ fontSize:12, color:'rgba(255,255,255,0.7)' }}>{photo.caption}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop:48, padding:'32px 36px', background:'var(--bg-card)', border:'1px solid var(--border)', borderRadius:6, textAlign:'center' }}>
            <div style={{ fontFamily:'var(--font-cond)', fontSize:11, fontWeight:600, letterSpacing:'0.14em', color:'var(--text-muted)', marginBottom:8, textTransform:'uppercase' }}>Real photos coming soon</div>
            <p style={{ fontSize:13.5, color:'var(--text-muted)', lineHeight:1.7 }}>
              We are gathering photos from our community. If you have photos from a PHPantry distribution day, please{' '}
              <a href="/get-involved" style={{ color:'var(--blue-light)', textDecoration:'none' }}>contact us</a> to share them.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
