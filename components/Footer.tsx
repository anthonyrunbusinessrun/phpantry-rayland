import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#070E1A', borderTop: '1px solid var(--border)', padding: '60px 5% 28px' }}>
      <style>{`
        .footer-link { font-size: 13px; color: var(--text-muted); text-decoration: none; transition: color 0.2s; }
        .footer-link:hover { color: #ECEFF1; }
      `}</style>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 48, paddingBottom: 48, borderBottom: '1px solid var(--border)' }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: 28, color: '#ECEFF1', marginBottom: 4 }}>PH Pantry</div>
            <div style={{ fontFamily: 'var(--font-cond)', fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#EF5350', marginBottom: 16 }}>Philippines</div>
            <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.8, maxWidth: 260 }}>
              Founded by Raymond Land III. A heartfelt initiative building community pantries rooted in compassion, faith, and shared responsibility.
            </p>
            <div style={{ marginTop: 20 }}>
              <span className="badge badge-live" style={{ fontSize: 10 }}>Active Movement</span>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <div className="label" style={{ marginBottom: 18 }}>Navigate</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[['/', 'Home'], ['/about', 'About Us'], ['/gallery', 'Gallery'], ['/get-involved', 'Get Involved']].map(([href, label]) => (
                <li key={href}><Link href={href} className="footer-link">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <div className="label" style={{ marginBottom: 18 }}>Get Involved</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Volunteer', 'Donate', 'Partner With Us', 'Church Partnership', 'Spread the Word'].map(label => (
                <li key={label}><Link href="/get-involved" className="footer-link">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="label" style={{ marginBottom: 18 }}>Contact</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {['Find a Pantry', 'Contact Us', 'Pantry Guidelines', 'Privacy Policy'].map(label => (
                <li key={label}><span className="footer-link" style={{ cursor: 'pointer' }}>{label}</span></li>
              ))}
            </ul>
            <div style={{ marginTop: 24, padding: '14px 16px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 6 }}>
              <div style={{ fontFamily: 'var(--font-cond)', fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#EF5350', marginBottom: 4 }}>Powered by Rayland</div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>rayland.com technology</div>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 12, color: 'var(--text-dim)' }}>
            © {new Date().getFullYear()} PH Pantry Philippines. Founded by Raymond Land III. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--text-dim)' }}>
            <span>Made with</span>
            <span style={{ color: '#EF5350' }}>♥</span>
            <span>for every Filipino</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
