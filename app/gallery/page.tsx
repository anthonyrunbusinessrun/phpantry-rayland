import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'

// All real uploaded images — every single one
const GALLERY = [
  // Featured large shots — pantry operations
  { src: '/IMG_3486.jpg', label: 'Community Pantry Day',       caption: 'Volunteers ready to serve the community', large: true  },
  { src: '/IMG_3487.jpg', label: 'Food Distribution',          caption: 'Organizing supplies for families in need', large: false },
  { src: '/IMG_3490.jpg', label: 'Pantry in Action',           caption: 'Every item carefully prepared with love', large: false },
  { src: '/IMG_3493.jpg', label: 'Community Gathering',        caption: 'Neighbors coming together as one', large: false },
  { src: '/IMG_3496.jpg', label: 'Volunteers at Work',         caption: 'Hearts and hands serving with joy', large: true  },
  { src: '/IMG_3497.jpg', label: 'Supplies Ready',             caption: 'Rice, canned goods, and essentials packed', large: false },
  { src: '/IMG_3498.jpg', label: 'Families Receiving Help',    caption: 'Dignity in every interaction at every hub', large: false },
  { src: '/IMG_3499.jpg', label: 'Church Partnership',         caption: 'Faith turning into action for the community', large: false },
  { src: '/IMG_3501.jpg', label: 'A Moment of Connection',     caption: 'Every visit a seed of hope planted', large: true  },
  { src: '/IMG_3502.jpg', label: 'Distribution Day',           caption: 'Ensuring resources reach those who need them', large: false },
  { src: '/IMG_3504 (1).jpg', label: 'Hands of Service',       caption: 'Volunteers working tirelessly with compassion', large: false },
  { src: '/IMG_3504.jpg', label: 'Together We Rise',           caption: 'A community choosing to care for its own', large: false },

]

export default function Gallery() {
  return (
    <>
      <ScrollReveal />

      {/* HERO */}
      <section style={{
        paddingTop: 120, paddingBottom: 80, paddingLeft: '5%', paddingRight: '5%',
        background: 'var(--hero-grad)', position: 'relative', overflow: 'hidden',
      }}>
        <div className="grid-overlay" />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <span className="section-tag" style={{ color: 'rgba(255,255,255,0.6)' }}>In the Community</span>
          <h1 style={{ fontSize: 'clamp(36px,6vw,80px)', color: 'white', lineHeight: 1.05 }}>
            Moments of <span style={{ fontFamily: 'var(--font-script)', fontWeight: 400 }}>Hope</span>
          </h1>
          <div style={{ width: 40, height: 2, background: 'var(--red)', marginTop: 20, marginBottom: 24 }} />
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: 560, lineHeight: 1.8, fontWeight: 300 }}>
            Every photo tells a story of neighbors coming together — dignity restored, hunger answered, and a community choosing to care for its own.
          </p>
          <div style={{ marginTop: 20, display: 'flex', gap: 16, alignItems: 'center' }}>
            <span className="badge badge-live" style={{ fontSize: 10 }}>Live Gallery</span>
            <span style={{ fontFamily: 'var(--font-cond)', fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>{GALLERY.length} Photos</span>
          </div>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section style={{ padding: '64px 5% 100px', background: 'var(--bg)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridAutoRows: '280px',
            gap: 12,
          }}>
            {GALLERY.map((photo, i) => (
              <div
                key={i}
                className="apple-fade gallery-item"
                data-delay={`${(i % 3) * 60}`}
                style={{
                  gridColumn: photo.large ? 'span 2' : 'span 1',
                  gridRow: photo.large ? 'span 2' : 'span 1',
                  border: '1px solid var(--border)',
                  borderRadius: 6,
                  overflow: 'hidden',
                  position: 'relative',
                  background: 'var(--bg-card)',
                }}
              >
                <Image
                  src={photo.src}
                  alt={photo.label}
                  fill
                  sizes={photo.large ? '(max-width:768px) 100vw, 66vw' : '(max-width:768px) 100vw, 33vw'}
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  className="gallery-img"
                />
                <div className="gallery-overlay" />
                <div className="gallery-caption">
                  <div style={{ fontFamily: 'var(--font-cond)', fontSize: 14, fontWeight: 700, color: 'white', marginBottom: 4 }}>{photo.label}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>{photo.caption}</div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
    </>
  )
}
