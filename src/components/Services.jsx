import { services } from '../data/services';

export default function Services() {
  return (
    <section className="section services-section" id="servicios">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow"><span /> LO QUE HACEMOS</div>
          <h2>NUESTROS <em>SERVICIOS</em></h2>
          <p>Lubricentro y mecánica ligera para vehículos de todas las marcas.</p>
        </div>
        <div className="services-grid">
          {services.map(({ title, description, image }) => (
            <article className="service-card" key={title}>
              <img className="service-icon" src={image} alt="" aria-hidden="true" loading="lazy" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
