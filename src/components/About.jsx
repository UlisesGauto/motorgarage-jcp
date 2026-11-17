import { MapPin, ShieldCheck } from 'lucide-react';
export default function About() {
  return <section className="section about-section" id="nosotros"><div className="container about-grid">
    <div className="about-visual"><div className="about-badge"><ShieldCheck size={30}/><span>ATENCIÓN DIRECTA<br/>Y PERSONALIZADA</span></div></div>
    <div className="about-copy"><div className="eyebrow"><span/> CONOCENOS</div><h2>PRECISIÓN TÉCNICA EN <em>CADA TRABAJO</em></h2>
      <p>MotorGarage JCP es un lubricentro y taller independiente especializado en mantenimiento preventivo y mecánica ligera, ubicado en José C. Paz, Buenos Aires.</p>
      <p>Ofrecemos servicios de mantenimiento y reparación de vehículos multimarca, priorizando el correcto funcionamiento, la confiabilidad y la seguridad de cada vehículo. Trabajamos con criterios técnicos, procedimientos adecuados y atención personalizada para cada necesidad.</p>
      <p>Cada trabajo se coordina previamente, con comunicación directa y asesoramiento sobre las tareas y los repuestos necesarios.</p>
      <div className="location-line"><MapPin size={19}/> José C. Paz, Buenos Aires</div>
    </div>
  </div></section>;
}
