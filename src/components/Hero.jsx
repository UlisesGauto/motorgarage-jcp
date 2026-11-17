import { ArrowRight, MessageCircle } from 'lucide-react';
import { whatsappUrl } from '../data/site';

export default function Hero() {
  const wa = whatsappUrl();
  return <section className="hero" id="inicio">
    <div className="hero-image" aria-hidden="true"/><div className="hero-overlay"/>
    <div className="container hero-content">
      <div className="eyebrow"><span/> MOTORGARAGE JCP · JOSÉ C. PAZ, BUENOS AIRES</div>
      <h1><span className="hero-brand-name">MOTORGARAGE <em>JCP</em></span><span className="hero-service-line">LUBRICENTRO Y MECÁNICA LIGERA</span></h1>
      <p>Mantenimiento para vehículos de todas las marcas. Atención personalizada, asesoramiento en repuestos y visitas previamente coordinadas.</p>
      <a className="btn btn-large" href={wa || '#contacto'} target={wa ? '_blank' : undefined} rel={wa ? 'noopener noreferrer' : undefined}>
        <MessageCircle size={19}/>{wa ? 'HACÉ TU CONSULTA' : 'VER CONTACTO'}<ArrowRight size={18}/>
      </a>
    </div>
  </section>;
}
