import { MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { site, whatsappUrl } from '../data/site';
export default function Contact() {
  const wa = whatsappUrl();
  return <section className="section contact-section" id="contacto"><div className="container contact-inner">
    <div className="eyebrow"><span/> HABLEMOS DE TU AUTO</div><h2><em>SOLICITÁ UNA EVALUACIÓN</em></h2>
    <p>Comentanos qué servicio necesita tu vehículo o qué inconveniente presenta. Analizamos tu consulta, coordinamos los detalles del trabajo y establecemos una visita al taller para realizar la evaluación correspondiente.</p>
    <div className="contact-actions">
      {wa ? <a className="btn btn-large" href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle size={19}/> CONSULTAR POR WHATSAPP <ArrowUpRight size={18}/></a> : <div className="contact-pending"><MessageCircle size={21}/><span>WhatsApp: pendiente de configurar</span></div>}

    </div>
    <div className="contact-meta"><span><MapPin size={18}/> {site.location}</span></div>
  </div></section>;
}
