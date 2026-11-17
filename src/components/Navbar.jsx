import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { site, whatsappUrl } from '../data/site';
const links = [['Inicio','#inicio'],['Servicios','#servicios'],['Nosotros','#nosotros'],['Contacto','#contacto']];
export default function Navbar() {
  const [open,setOpen] = useState(false);
  const wa = whatsappUrl();
  return <header className="header"><div className="container nav-inner">
    <a className="brand" href="#inicio" aria-label="MotorGarage JCP, ir al inicio"><img className="brand-logo" src="/images/logo-mg.webp" alt="Logo MotorGarage MG"/><span className="brand-text"><strong>MOTOR<span>GARAGE</span></strong><small>JOSÉ C. PAZ, BUENOS AIRES</small></span></a>
    <nav className={open ? 'nav-links is-open':'nav-links'} aria-label="Navegación principal">{links.map(([label,href])=><a className="nav-link-button" key={href} href={href} onClick={()=>setOpen(false)}>{label}</a>)}</nav>
    {wa ? <a className="btn btn-small nav-cta" href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle size={16}/> WhatsApp</a> : <a className="btn btn-small nav-cta" href="#contacto"><MessageCircle size={16}/> Contacto</a>}
    <button className="menu-toggle" type="button" aria-label={open?'Cerrar menú':'Abrir menú'} aria-expanded={open} onClick={()=>setOpen(v=>!v)}>{open?<X/>:<Menu/>}</button>
  </div></header>;
}
