'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(11,18,32,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      padding: '0 5%',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>

        {/* LOGO */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 40, height: 40,
            background: 'linear-gradient(135deg,#1565C0,#C62828)',
            borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 16px rgba(21,101,192,0.4)',
          }}>
            <span style={{ fontFamily: 'var(--font-script)', fontSize: 20, color: 'white', lineHeight: 1 }}>P</span>
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: 22, color: '#ECEFF1', lineHeight: 1.1 }}>PH Pantry</div>
            <div style={{ fontFamily: 'var(--font-cond)', fontSize: 9, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#EF5350', marginTop: 1 }}>Philippines</div>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <ul style={{ display: 'flex', alignItems: 'center', gap: 36, listStyle: 'none', margin: 0 }} className="hide-mobile">
          {[
            ['/', 'Home'],
            ['/about', 'About'],
            ['/gallery', 'Gallery'],
            ['/get-involved', 'Get Involved'],
          ].map(([href, label]) => (
            <li key={href}>
              <Link href={href} style={{
                fontFamily: 'var(--font-cond)', fontSize: 12, fontWeight: 600,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--text-muted)', textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ECEFF1')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/get-involved" className="btn-primary" style={{ padding: '8px 20px', fontSize: 11 }}>
              Volunteer
            </Link>
          </li>
        </ul>

        {/* MOBILE HAMBURGER */}
        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text)', display: 'none' }} className="show-mobile">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></> : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div style={{ background: 'rgba(11,18,32,0.98)', borderTop: '1px solid var(--border)', padding: '20px 5%' }}>
          {[['/', 'Home'], ['/about', 'About'], ['/gallery', 'Gallery'], ['/get-involved', 'Get Involved']].map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '12px 0', fontFamily: 'var(--font-cond)',
              fontSize: 13, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--text-muted)', textDecoration: 'none', borderBottom: '1px solid var(--border)',
            }}>
              {label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media(max-width:768px){ .hide-mobile{display:none!important} .show-mobile{display:flex!important} }
        @media(min-width:769px){ .show-mobile{display:none!important} }
      `}</style>
    </nav>
  )
}
