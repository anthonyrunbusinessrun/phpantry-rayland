'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/get-involved', label: 'Get Involved' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        .nav-link{font-family:var(--font-cond);font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:var(--text-muted);text-decoration:none;transition:color 0.2s}
        .nav-link:hover{color:#ECEFF1}
        .nav-mobile-link{display:block;padding:14px 0;font-family:var(--font-cond);font-size:13px;font-weight:600;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-muted);text-decoration:none;border-bottom:1px solid var(--border);transition:color 0.2s}
        .nav-mobile-link:hover{color:#ECEFF1}
        @media(max-width:768px){.nav-desktop{display:none!important}.nav-hamburger{display:flex!important}}
        @media(min-width:769px){.nav-hamburger{display:none!important}}
      `}</style>

      <nav style={{
        position:'fixed',top:0,left:0,right:0,zIndex:100,
        background:scrolled?'rgba(7,13,24,0.96)':'transparent',
        backdropFilter:scrolled?'blur(24px)':'none',
        borderBottom:scrolled?'1px solid rgba(255,255,255,0.06)':'1px solid transparent',
        transition:'all 0.4s ease',padding:'0 5%',
      }}>
        <div style={{maxWidth:1200,margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',height:68}}>

          {/* LOGO — shows logo.png from /public, fallback to text */}
          <Link href="/" style={{textDecoration:'none',display:'flex',alignItems:'center'}}>
            {!logoError ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src="/logo.png"
                alt="PH Pantry Philippines"
                height={44}
                style={{height:44,width:'auto',objectFit:'contain',maxWidth:180}}
                onError={() => setLogoError(true)}
              />
            ) : (
              /* Fallback text logo while waiting for real PNG upload */
              <div style={{display:'flex',alignItems:'center',gap:10}}>
                <div style={{width:36,height:36,borderRadius:6,background:'linear-gradient(135deg,#0E7490,#3B1FA3)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <span style={{fontFamily:'var(--font-script)',fontSize:18,color:'white'}}>P</span>
                </div>
                <div>
                  <div style={{fontFamily:'var(--font-script)',fontSize:20,color:'#ECEFF1',lineHeight:1.1}}>PH Pantry</div>
                  <div style={{fontFamily:'var(--font-cond)',fontSize:9,fontWeight:600,letterSpacing:'0.2em',textTransform:'uppercase',color:'rgba(103,232,249,0.7)'}}>Philippines</div>
                </div>
              </div>
            )}
          </Link>

          {/* DESKTOP */}
          <ul className="nav-desktop" style={{display:'flex',alignItems:'center',gap:36,listStyle:'none',margin:0}}>
            {NAV_LINKS.map(({href,label})=>(
              <li key={href}><Link href={href} className="nav-link">{label}</Link></li>
            ))}
            <li>
              <Link href="/get-involved" className="btn-primary" style={{padding:'8px 22px',fontSize:11}}>
                Volunteer
              </Link>
            </li>
          </ul>

          {/* HAMBURGER */}
          <button className="nav-hamburger" onClick={()=>setOpen(!open)} style={{background:'none',border:'none',cursor:'pointer',color:'var(--text)',display:'none',padding:4}} aria-label="Toggle menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open?<><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>:<><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        {open&&(
          <div style={{background:'rgba(7,13,24,0.98)',borderTop:'1px solid var(--border)',padding:'8px 5% 20px'}}>
            {NAV_LINKS.map(({href,label})=>(
              <Link key={href} href={href} className="nav-mobile-link" onClick={()=>setOpen(false)}>{label}</Link>
            ))}
            <Link href="/get-involved" className="btn-primary" style={{marginTop:16,display:'inline-flex'}} onClick={()=>setOpen(false)}>
              Volunteer Now
            </Link>
          </div>
        )}
      </nav>
    </>
  )
}
