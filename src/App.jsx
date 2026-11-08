import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, MapPin, Phone, Clock, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { TechnicalSchematic, BespokeServiceIcon } from './components/BrandVisuals';

const WHATSAPP_BASE = 'https://wa.me/18496539421?text=';
const INSTAGRAM_URL = 'https://www.instagram.com/oralmedrd/';

const SERVICES_DATA = [
  {
    id: 'invisalign',
    slug: 'invisalign',
    title: 'Ortodoncia Invisible Invisalign®',
    shortDesc: 'Alineadores transparentes y removibles planificados con escáner 3D iTero 5D sin usar brackets tradicionales.',
    heroPhoto: './media/post_21.jpg',
    photoAlt: 'Alineadores transparentes Invisalign en OralMed',
    tag: 'Centro #1 Invisalign® en RD',
    whatsappMessage: 'Hola OralMed, me gustaría consultar sobre el tratamiento de ortodoncia invisible Invisalign®.',
    fullDesc: 'OralMed es el centro de referencia líder en tecnología Invisalign® en la República Dominicana. Mediante alineadores transparentes hechos a tu medida y planificación virtual en 3D, movemos cada pieza dental de forma predecible y discreta sin alterar tu estilo de vida.',
    benefits: [
      {
        title: 'Escaneo Digital 3D iTero 5D',
        desc: 'Visualizas cómo quedará tu sonrisa en 3D desde tu primera cita sin pastas ni moldes molestos.'
      },
      {
        title: 'Removibles y Discretos',
        desc: 'Te los quitas cómodamente para comer, cepillarte y asistir a eventos especiales.'
      },
      {
        title: 'Certificación Diamond Elite',
        desc: 'Tratamiento guiado por ortodoncistas especializadas con alta casuística documentada en el país.'
      }
    ],
    steps: [
      { num: '01', title: 'Escaneo Intraoral 3D', desc: 'Captura digital milimétrica de tu dentición en menos de 5 minutos.' },
      { num: '02', title: 'Planificación Virtual', desc: 'Diseñamos cada etapa de alineación y proyectamos el resultado final.' },
      { num: '03', title: 'Entrega de Alineadores', desc: 'Comienzas tu tratamiento con revisiones periódicas ágiles.' }
    ]
  },
  {
    id: 'aquacare',
    slug: 'aquacare',
    title: 'Limpieza Dental AquaCare (Sin Dolor)',
    shortDesc: 'Higiene profiláctica avanzada con brisa de aire y fluidos, libre de raspados agresivos y cero vibraciones.',
    heroPhoto: './media/post_11.jpg',
    photoAlt: 'Tecnología dental avanzada en consultorio OralMed',
    tag: 'Tecnología Sin Ansiedad',
    whatsappMessage: 'Hola OralMed, me gustaría agendar una limpieza dental con la tecnología AquaCare sin dolor.',
    fullDesc: 'La tecnología AquaCare transforma la profilaxis dental. Limpia y remueve manchas superficiales mediante una suave brisa de aire y micropartículas purificadas sin contacto dental punzante, ideal para personas con sensibilidad o ansiedad al dentista.',
    benefits: [
      {
        title: 'Cero Raspados Metálicos',
        desc: 'Elimina manchas de café, té y sarro sin necesidad de curetas agresivas.'
      },
      {
        title: 'Sin Vibraciones Incómodas',
        desc: 'Despídete del sonido y la fricción que causan tensión en la consulta tradicional.'
      },
      {
        title: 'Máximo Cuidado del Esmalte',
        desc: 'Pule y desinfecta las piezas dentales respetando íntegramente la estructura del diente.'
      }
    ],
    steps: [
      { num: '01', title: 'Evaluación y Diagnóstico', desc: 'Revisión general de encías y zonas con acumulación de placa o manchas.' },
      { num: '02', title: 'Aplicación AquaCare', desc: 'Pulido suave con aire y fluido purificado a temperatura agradable.' },
      { num: '03', title: 'Sonrisa Radiante', desc: 'Sensación inmediata de frescura, limpieza profunda y brillo natural.' }
    ]
  },
  {
    id: 'estetica-dental',
    slug: 'estetica-dental',
    title: 'Estética Dental & Carillas',
    shortDesc: 'Diseño armónico de sonrisas con carillas de cerámica y resina conservando la salud natural de tus dientes.',
    heroPhoto: './media/post_23.jpg',
    photoAlt: 'Especialista de OralMed explicando modelo anatómico',
    tag: 'Armonía y Proporción Facial',
    whatsappMessage: 'Hola OralMed, quiero una evaluación para diseño de sonrisa y carillas estéticas.',
    fullDesc: 'Analizamos minuciosamente tus facciones, proporción labial y textura dental para confeccionar carillas que luzcan completamente naturales. Nuestro enfoque es mínimamente invasivo, priorizando siempre la biología dental.',
    benefits: [
      {
        title: 'Diseño Facial Personalizado',
        desc: 'Proporciones áureas calibradas según la anatomía de tu rostro y tono de piel.'
      },
      {
        title: 'Cerámica de Alta Calidad',
        desc: 'Materiales translúcidos de máxima resistencia que reproducen el esmalte auténtico.'
      },
      {
        title: 'Enfoque Bioconservador',
        desc: 'Preservación rigurosa de la estructura natural del diente sin desgastes innecesarios.'
      }
    ],
    steps: [
      { num: '01', title: 'Sesión Fotográfica & Análisis', desc: 'Estudio de tu sonrisa y definición del objetivo estético deseado.' },
      { num: '02', title: 'Maqueta de Prueba (Mockup)', desc: 'Visualizas el cambio en tu propia boca antes de fijar las piezas.' },
      { num: '03', title: 'Cementación Definitiva', desc: 'Fijación de carillas con precisión milimétrica para durabilidad de años.' }
    ]
  },
  {
    id: 'odontopediatria',
    slug: 'odontopediatria',
    title: 'Odontopediatría & Cuidado Infantil',
    shortDesc: 'Atención dental cercana, cálida y preventiva para niños, creando experiencias positivas y libres de miedo.',
    heroPhoto: './media/post_15.jpg',
    photoAlt: 'Doctora atendiendo amablemente a paciente en OralMed',
    tag: 'Salud Infantil Cálida',
    whatsappMessage: 'Hola OralMed, me gustaría agendar una consulta de odontopediatría para mi hijo/a.',
    fullDesc: 'Acompañamos el desarrollo de los dientes de leche y permanentes en un ambiente empático y afectivo. Nuestro equipo convierte la visita al dentista en una experiencia educativa y relajada tanto para niños como para padres.',
    benefits: [
      {
        title: 'Espacio Seguro y Amable',
        desc: 'Ambiente diseñado para que los más pequeños se sientan cómodos y tranquilos.'
      },
      {
        title: 'Prevención Temprana',
        desc: 'Sellantes, aplicación de flúor y control de guías de erupción dental.'
      },
      {
        title: 'Orientación a Padres',
        desc: 'Guía directa sobre técnicas de cepillado, hábitos y salud bucal en casa.'
      }
    ],
    steps: [
      { num: '01', title: 'Primera Familiarización', desc: 'El niño conoce el consultorio a su propio ritmo sin prisas.' },
      { num: '02', title: 'Revisión Suave', desc: 'Evaluación preventiva con explicaciones lúdicas y transparentes.' },
      { num: '03', title: 'Plan de Cuidado', desc: 'Recomendaciones personalizadas para mantener una sonrisa sana.' }
    ]
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  // Sincronización limpia con el hash de la URL para navegación multi-página
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '');
      if (hash.startsWith('servicios/')) {
        const slug = hash.replace('servicios/', '');
        const found = SERVICES_DATA.find((s) => s.slug === slug);
        if (found) {
          setCurrentView('service');
          setSelectedServiceId(found.id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      setCurrentView('home');
      setSelectedServiceId(null);
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToService = (serviceId) => {
    window.location.hash = `#/servicios/${serviceId}`;
  };

  const navigateToHome = () => {
    window.location.hash = '#/';
  };

  const activeService = SERVICES_DATA.find((s) => s.id === selectedServiceId) || SERVICES_DATA[0];

  return (
    <div className="site-wrapper">
      {/* HEADER / NAVBAR */}
      <header className="site-header">
        <div className="nav-inner">
          <div className="brand-link" onClick={navigateToHome}>
            <img
              src="./media/logo_real.jpg"
              alt="OralMed Clínica Dental"
              className="brand-logo-img"
            />
            <div>
              <span className="brand-name">OralMed</span>
              <span className="brand-sub">Centro Especializado Invisalign® · Naco</span>
            </div>
          </div>

          <nav className="nav-links">
            <button className="nav-link-btn" onClick={navigateToHome}>
              Inicio
            </button>
            <button className="nav-link-btn" onClick={() => navigateToService('invisalign')}>
              Invisalign®
            </button>
            <button className="nav-link-btn" onClick={() => navigateToService('aquacare')}>
              AquaCare
            </button>
            <button className="nav-link-btn" onClick={() => navigateToService('estetica-dental')}>
              Estética
            </button>
            <button className="nav-link-btn" onClick={() => navigateToService('odontopediatria')}>
              Odontopediatría
            </button>
            <a href="#sede" className="nav-link-btn" onClick={() => { if (currentView !== 'home') navigateToHome(); }}>
              Sede Naco
            </a>
          </nav>

          <div className="nav-actions">
            <a
              href={`${WHATSAPP_BASE}${encodeURIComponent('Hola OralMed, vi su sitio web y me gustaría agendar una evaluación para mi sonrisa.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <span>Agendar Cita</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </header>

      <main>
        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            /* =================== VISTA 1: PORTADA HOME (MINIMALISTA) =================== */
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {/* HERO: FOTO DE PACIENTE SONRIENDO + TITULAR DIRECTO */}
              <section className="hero-section">
                <div className="hero-grid">
                  <div>
                    <span className="hero-tag">
                      <Sparkles size={14} />
                      Clínica #1 en Invisalign® en República Dominicana
                    </span>
                    <h1 className="hero-title">
                      Sonrisas reales diseñadas con <span className="hero-title-accent">tecnología 3D</span> y calidez humana.
                    </h1>
                    <p className="hero-sub">
                      Centro odontológico de referencia en Naco, Santo Domingo. Especialistas en alineación invisible Invisalign®, profilaxis sin dolor AquaCare y estética dental de alta precisión.
                    </p>

                    <div className="hero-actions">
                      <a
                        href={`${WHATSAPP_BASE}${encodeURIComponent('Hola OralMed, deseo solicitar una evaluación diagnóstica de mi sonrisa en su sede de Naco.')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <MessageCircle size={18} />
                        <span>Agendar por WhatsApp</span>
                      </a>
                      <a href="#especialidades" className="btn-secondary">
                        <span>Ver Especialidades</span>
                      </a>
                    </div>

                    <div className="hero-badges-row">
                      <div className="hero-badge-item">
                        <span className="hero-badge-num">Diamond Elite</span>
                        <span className="hero-badge-label">Referencia Invisalign® RD</span>
                      </div>
                      <div className="hero-badge-item">
                        <span className="hero-badge-num">iTero 5D</span>
                        <span className="hero-badge-label">Escaneo intraoral 3D</span>
                      </div>
                      <div className="hero-badge-item">
                        <span className="hero-badge-num">+25,000</span>
                        <span className="hero-badge-label">Pacientes en comunidad</span>
                      </div>
                    </div>
                  </div>

                  {/* FOTOGRAFÍA HUMANA DE ALTA CALIDAD (PACIENTE Y DOCTORA EN CONSULTA) */}
                  <div className="hero-visual-frame">
                    <img
                      src="./media/post_16.jpg"
                      alt="Doctora y paciente sonriendo en consultorio clínico de OralMed"
                    />
                    <div className="hero-floating-pill">
                      <div>
                        <div className="floating-pill-title">Dra. Sylvia Paulino & Equipo</div>
                        <div className="floating-pill-sub">Atención odontológica personalizada</div>
                      </div>
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-text"
                      >
                        @oralmedrd
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECCIÓN ESPECIALIDADES (CONEXIÓN DIRECTA A PÁGINAS DEDICADAS) */}
              <section id="especialidades" className="section-wrapper" style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '28px', margin: '2rem auto' }}>
                <div className="section-header-clean">
                  <span className="section-tag">Especialidades Clínicas</span>
                  <h2 className="section-title">Cuidado dental avanzado para cada etapa de tu vida</h2>
                </div>

                <div className="services-overview-grid">
                  {SERVICES_DATA.map((service, idx) => (
                    <div key={service.id} className="service-card-clean">
                      <div>
                        <div className="service-card-icon-wrap">
                          <BespokeServiceIcon
                            title={service.title}
                            category={service.tag}
                            index={idx}
                            size={44}
                          />
                        </div>
                        <h3 className="service-card-title">{service.title}</h3>
                        <p className="service-card-desc">{service.shortDesc}</p>
                      </div>

                      <button
                        type="button"
                        className="btn-text"
                        onClick={() => navigateToService(service.id)}
                      >
                        <span>Conocer más detalles</span>
                        <ArrowUpRight size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              </section>

              {/* SIMULADOR / VISUALIZADOR INTERACTIVO DE TRATAMIENTOS EN CÓDIGO */}
              <section className="section-wrapper">
                <div className="section-header-clean">
                  <span className="section-tag">Innovación Clínica</span>
                  <h2 className="section-title">Visualizador interactivo de procedimientos</h2>
                </div>

                <TechnicalSchematic />
              </section>

              {/* EQUIPO MÉDICO & FILOSOFÍA */}
              <section className="section-wrapper" style={{ borderTop: '1px solid var(--border-hairline)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                  <div className="subpage-photo-frame">
                    <img
                      src="./media/post_26.jpg"
                      alt="Equipo de doctoras especialistas de OralMed"
                    />
                  </div>
                  <div>
                    <span className="section-tag">Dirección Médica</span>
                    <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>
                      Profesionales apasionadas por tu salud y bienestar
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                      Bajo la dirección de la <strong>Dra. Sylvia Paulino</strong> y la <strong>Dra. Vivianna Tavárez</strong>, en OralMed combinamos tecnología diagnóstica de última generación con un trato humano, transparente y afectivo.
                    </p>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                      Cada tratamiento es planificado minuciosamente para ofrecer resultados estéticos naturales y duraderos en un entorno libre de ansiedad.
                    </p>
                    <a
                      href={`${WHATSAPP_BASE}${encodeURIComponent('Hola Dra. Sylvia Paulino, me gustaría coordinar una cita en OralMed.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <span>Conversar con el Equipo</span>
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </section>

              {/* SEDE & UBICACIÓN EN NACO (AQUÍ VA LA FOTO DEL EDIFICIO/SEDE REAL) */}
              <section id="sede" className="location-section section-wrapper" style={{ maxWidth: '100%' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                  <div className="location-grid">
                    <div>
                      <span className="section-tag">Sede Principal</span>
                      <h2 className="section-title">Instalaciones modernas en el centro de Naco</h2>
                      <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.75rem' }}>
                        Espacios clínicos diseñados para tu confort y tranquilidad durante cada consulta.
                      </p>

                      <div className="location-info-list">
                        <div className="location-info-item">
                          <MapPin size={22} />
                          <div>
                            <div className="location-info-title">Dirección</div>
                            <div className="location-info-desc">Av. Tiradentes #29, Sector Naco · Santo Domingo, RD</div>
                          </div>
                        </div>

                        <div className="location-info-item">
                          <Clock size={22} />
                          <div>
                            <div className="location-info-title">Horarios de Atención</div>
                            <div className="location-info-desc">Lunes a Viernes: 9:00 AM – 7:00 PM | Sábados: 9:00 AM – 2:00 PM</div>
                          </div>
                        </div>

                        <div className="location-info-item">
                          <Phone size={22} />
                          <div>
                            <div className="location-info-title">Teléfonos & WhatsApp</div>
                            <div className="location-info-desc">+1 (809) 475-7585 | WhatsApp: +1 (849) 653-9421</div>
                          </div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a
                          href="https://maps.google.com/?q=OralMed+Clinica+Dental+Av+Tiradentes+29+Naco"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                        >
                          <MapPin size={16} />
                          <span>Abrir en Google Maps</span>
                        </a>
                        <a
                          href={`${WHATSAPP_BASE}${encodeURIComponent('Hola OralMed, quiero consultar disponibilidad de citas para esta semana.')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary"
                        >
                          <MessageCircle size={16} />
                          <span>Escribir por WhatsApp</span>
                        </a>
                      </div>
                    </div>

                    {/* FOTO EXTERIOR / SEDE INSTITUCIONAL (POST_2.JPG EN SU LUGAR CORRECTO) */}
                    <div className="location-photo-frame">
                      <img
                        src="./media/post_2.jpg"
                        alt="Edificio sede de OralMed en Av. Tiradentes #29, Naco"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          ) : (
            /* =================== VISTA 2: PÁGINA DEDICADA DE SERVICIO =================== */
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="subpage-wrapper"
            >
              {/* BARRA DE RETORNO */}
              <div className="subpage-back-bar">
                <button
                  type="button"
                  className="subpage-back-btn"
                  onClick={navigateToHome}
                >
                  <ArrowLeft size={16} />
                  <span>Volver a la portada principal</span>
                </button>
              </div>

              {/* HERO DE LA PÁGINA DEDICADA CON FOTO ESPECÍFICA */}
              <div className="subpage-hero">
                <div className="subpage-detail-col">
                  <span className="section-tag">{activeService.tag}</span>
                  <h1>{activeService.title}</h1>
                  <p>{activeService.fullDesc}</p>

                  <a
                    href={`${WHATSAPP_BASE}${encodeURIComponent(activeService.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                    style={{ padding: '0.85rem 1.75rem', fontSize: '0.96rem' }}
                  >
                    <MessageCircle size={18} />
                    <span>Consultar por este tratamiento</span>
                  </a>
                </div>

                <div className="subpage-photo-frame">
                  <img
                    src={activeService.heroPhoto}
                    alt={activeService.photoAlt}
                  />
                </div>
              </div>

              {/* BENEFICIOS ESPECÍFICOS DEL SERVICIO */}
              <div style={{ marginBottom: '3.5rem' }}>
                <span className="section-tag">Ventajas Clínicas</span>
                <h2 className="section-title" style={{ marginBottom: '1.75rem' }}>
                  ¿Por qué realizar este tratamiento en OralMed?
                </h2>

                <div className="subpage-benefits-grid">
                  {activeService.benefits.map((b, i) => (
                    <div key={i} className="benefit-card">
                      <div style={{ color: 'var(--accent)', marginBottom: '0.75rem' }}>
                        <CheckCircle2 size={24} />
                      </div>
                      <h4>{b.title}</h4>
                      <p>{b.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PASOS DEL PROCESO */}
              <div style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '24px', padding: 'clamp(2rem, 4vw, 3rem)', marginBottom: '3.5rem' }}>
                <span className="section-tag">Paso a Paso</span>
                <h2 className="section-title" style={{ marginBottom: '2rem' }}>
                  ¿Cómo es tu proceso con nosotros?
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                  {activeService.steps.map((s, idx) => (
                    <div key={idx} style={{ backgroundColor: '#FFFFFF', padding: '1.5rem', borderRadius: '16px' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.3rem', color: 'var(--accent)' }}>
                        {s.num}
                      </span>
                      <h4 style={{ fontWeight: 600, margin: '0.4rem 0', color: 'var(--text-primary)' }}>
                        {s.title}
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* OTRAS ESPECIALIDADES */}
              <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: '2.5rem' }}>
                <span className="section-tag">Otras Especialidades</span>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem' }}>
                  {SERVICES_DATA.filter((s) => s.id !== activeService.id).map((other) => (
                    <button
                      key={other.id}
                      type="button"
                      className="btn-secondary"
                      onClick={() => navigateToService(other.id)}
                    >
                      <span>{other.title}</span>
                      <ArrowUpRight size={14} />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">
          <p>© {new Date().getFullYear()} OralMed Clínica Dental · Naco, Santo Domingo. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
