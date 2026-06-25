import './App.css'

const B = import.meta.env.BASE_URL

export default function App() {
  return (
    <div className="landing">

      {/* HEADER */}
      <header className="header">
        <div className="container header-inner">
          <img src={B + 'images/logo.webp'} alt="Daniel Machado" className="logo" />
          <nav className="nav">
            <a href="#inicio">Inicio</a>
            <a href="#autor">Sobre el Autor</a>
            <a href="#contenido">Contenido</a>
            <a href="#bonos">Bonos</a>
            <a href="#faq">Preguntas Frecuentes</a>
          </nav>
          <a href="#comprar" className="btn-header">🛒 Quiero mi Copia</a>
        </div>
      </header>

      {/* ── HERO MOBILE ── visible < 1024px */}
      <section id="inicio" className="hero-mobile-section">
        <img
          src={B + 'images/hero-mobile.webp'}
          alt="Descubriendo el Propósito de Dios para tu Vida"
          className="hero-mobile-img"
          fetchpriority="high"
        />
        <div className="hero-mobile-cta">
          <div className="container">
            <h2 className="hero-mobile-title">
              Descubre el propósito de<br />Dios para tu vida
            </h2>
            <p className="hero-mobile-desc">
              Un devocional de 40 días para fortalecer tu fe, renovar tu mente
              y caminar con más dirección en el propósito que Dios preparó para ti.
            </p>
            <div className="hero-price-block">
              <span className="hero-price-label">Accede hoy por solo</span>
              <strong className="hero-price-amount">US$ 9,90</strong>
            </div>
            <a href="#comprar" className="btn-cta">QUIERO MI COPIA AHORA</a>
            <div className="hero-trust">
              <span>🔒 Compra segura</span>
              <span>⚡ Acceso inmediato</span>
              <span>🎁 5 bonos incluidos</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── HERO DESKTOP ── visible ≥ 1024px */}
      <section className="hero hero-desktop-section">
        <img src={B + 'images/Hero.webp'} className="hero-bg" alt="" aria-hidden="true" fetchpriority="high" />
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-text">
              <p className="hero-eyebrow">DESCUBRE EL LIBRO QUE ESTÁ TRANSFORMANDO VIDAS...</p>
              <h1>
                DESCUBRE EL<br />
                <span className="text-gold">PROPÓSITO<br />DE DIOS</span><br />
                PARA TU VIDA
              </h1>
              <p className="hero-desc">
                Transforma tu fe, renueva tu mente y lleva tu vida con el propósito
                que Dios ha diseñado específicamente para ti.
              </p>
              <div className="hero-benefits">
                <div className="benefit-item">
                  <div className="benefit-icon">📖</div>
                  <span>Lectura<br />Bíblica</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">🙏</div>
                  <span>Versículos<br />Poderosos</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">✏️</div>
                  <span>Actividades<br />Prácticas</span>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">⭐</div>
                  <span>Reflexiones<br />Diarias</span>
                </div>
              </div>
              <div className="hero-price-block">
                <span className="hero-price-label">Accede hoy por solo</span>
                <strong className="hero-price-amount">US$ 9,90</strong>
              </div>
              <a href="#comprar" className="btn-cta">▶ QUIERO MI COPIA AHORA</a>
              <p className="hero-sub">🔒 Pago 100% seguro &nbsp;·&nbsp; ✓ Satisfacción garantizada</p>
            </div>
          </div>
        </div>
      </section>

      {/* PARA TI SI */}
      <section className="para-ti">
        <div className="container">
          <h2>ESTE LIBRO ES PARA TI SI...</h2>
          <div className="cards-row">
            <div className="card">
              <div className="card-icon">🎯</div>
              <p>Quieres descubrir el propósito que Dios tiene para tu vida</p>
            </div>
            <div className="card">
              <div className="card-icon">🕊️</div>
              <p>Necesitas claridad para tomar decisiones con paz y dirección</p>
            </div>
            <div className="card">
              <div className="card-icon">📖</div>
              <p>Deseas fortalecer tu fe con herramientas prácticas y bíblicas</p>
            </div>
            <div className="card">
              <div className="card-icon">❤️</div>
              <p>Anhelas una relación más profunda con Dios y su Palabra</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORMA */}
      <section id="contenido" className="transforma">
        <div className="container transforma-inner">
          <div className="transforma-img">
            <img src={B + 'images/livro_transforma_vida.webp'} alt="Interior del libro" />
          </div>
          <div className="transforma-text">
            <h2>UN LIBRO QUE<br /><span className="text-gold">TRANSFORMARÁ TU VIDA</span></h2>
            <ul className="check-list">
              <li>Descubrirás las claves bíblicas para encontrar tu propósito único</li>
              <li>Aprenderás a escuchar la voz de Dios en tu vida diaria</li>
              <li>Desarrollarás una fe más profunda y significativa cada día</li>
              <li>Encontrarás paz y dirección para tus decisiones más importantes</li>
              <li>Vivirás con intención y convicción, sabiendo quién eres en Cristo</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ESTO NO ES SOLO UN E-BOOK */}
      <section className="no-solo-ebook">
        <div className="container">
          <h2>ESTO NO ES<br /><span className="text-gold">SOLO UN E-BOOK</span></h2>
          <p className="nseb-intro">
            Más que reflexiones inspiradoras, este material fue diseñado para acompañarte
            en <strong>40 días de transformación espiritual</strong> — con devocionales prácticos,
            aplicaciones bíblicas y oraciones que te llevan de la lectura a la vida.
          </p>
          <ul className="nseb-list">
            <li>Renueva tu mente con la Palabra de Dios</li>
            <li>Entiende y vive el propósito que Dios tiene para ti</li>
            <li>Fortalece tu comunión con Dios cada día</li>
            <li>Avanza con más claridad, fe y convicción</li>
          </ul>
          <p className="nseb-closing">
            Y para completar tu experiencia, recibirás también <strong>5 bonos exclusivos</strong>
            — con valor percibido de US$ 31,50 — incluidos hoy sin costo adicional.
          </p>
        </div>
      </section>

      {/* BONOS */}
      <section id="bonos" className="bonos-section">
        <div className="container">
          <h2>INCLUYE <span className="text-gold">5 BONOS EXCLUSIVOS</span></h2>
          <p className="bonos-intro">
            Además del libro principal, recibirás recursos prácticos diseñados para fortalecer
            tu fe, renovar tu mente y ayudarte a profundizar tu relación con Dios día a día.
          </p>
          <ul className="bonos-list">
            <li>
              <span className="bono-num">①</span>
              <div>
                <strong>35 Versículos de Fe</strong>
                <p>Versículos poderosos para edificar y fortalecer tu fe en Dios</p>
              </div>
            </li>
            <li>
              <span className="bono-num">②</span>
              <div>
                <strong>35 Versículos de Esperanza</strong>
                <p>Promesas bíblicas que renuevan tu esperanza en cada situación</p>
              </div>
            </li>
            <li>
              <span className="bono-num">③</span>
              <div>
                <strong>35 Versículos de Propósito</strong>
                <p>Descubre lo que la Biblia declara sobre el propósito divino para tu vida</p>
              </div>
            </li>
            <li>
              <span className="bono-num">④</span>
              <div>
                <strong>Libro de Oraciones</strong>
                <p>Ora con la Palabra de Dios y transforma completamente tu vida de oración</p>
              </div>
            </li>
            <li>
              <span className="bono-num">⑤</span>
              <div>
                <strong>Plan de Lectura Bíblica</strong>
                <p>Un plan estructurado para leer, meditar y aplicar la Palabra de Dios</p>
              </div>
            </li>
          </ul>
          <a href="#comprar" className="btn-cta btn-cta-bonos">▶ QUIERO MI COPIA + LOS 5 BONOS</a>
        </div>
      </section>

      {/* VALOR DE LOS BONOS */}
      <section className="valor-bonos">
        <div className="container">
          <p className="vb-eyebrow">INCLUYE 5 BONOS EXCLUSIVOS</p>
          <h2 className="vb-headline">
            Todo lo que recibes<br />
            <span className="text-gold">con tu compra hoy</span>
          </h2>
          <p className="vb-subtitle">
            Cada bono fue diseñado para complementar tu jornada espiritual y multiplicar
            el impacto del libro en tu vida diaria.
          </p>

          <ul className="vb-list">
            <li className="vb-item">
              <span className="vb-num">①</span>
              <div className="vb-info">
                <strong className="vb-name">35 Versículos de Fe</strong>
                <span className="vb-desc">Con reflexión y aplicación personal</span>
              </div>
              <div className="vb-pricing">
                <span className="vb-original">US$ 6,90</span>
                <span className="vb-gratis">HOY GRATIS</span>
              </div>
            </li>
            <li className="vb-item">
              <span className="vb-num">②</span>
              <div className="vb-info">
                <strong className="vb-name">35 Versículos de Esperanza</strong>
                <span className="vb-desc">Con reflexión y aplicación personal</span>
              </div>
              <div className="vb-pricing">
                <span className="vb-original">US$ 6,90</span>
                <span className="vb-gratis">HOY GRATIS</span>
              </div>
            </li>
            <li className="vb-item">
              <span className="vb-num">③</span>
              <div className="vb-info">
                <strong className="vb-name">35 Versículos de Propósito</strong>
                <span className="vb-desc">Con reflexión y aplicación personal</span>
              </div>
              <div className="vb-pricing">
                <span className="vb-original">US$ 6,90</span>
                <span className="vb-gratis">HOY GRATIS</span>
              </div>
            </li>
            <li className="vb-item">
              <span className="vb-num">④</span>
              <div className="vb-info">
                <strong className="vb-name">Libro de Oraciones</strong>
                <span className="vb-desc">Oraciones para fortalecer tu comunión con Dios</span>
              </div>
              <div className="vb-pricing">
                <span className="vb-original">US$ 6,90</span>
                <span className="vb-gratis">HOY GRATIS</span>
              </div>
            </li>
            <li className="vb-item">
              <span className="vb-num">⑤</span>
              <div className="vb-info">
                <strong className="vb-name">Plan de Lectura Bíblica</strong>
                <span className="vb-desc">Plan práctico para leer y aplicar la Palabra de Dios</span>
              </div>
              <div className="vb-pricing">
                <span className="vb-original">US$ 3,90</span>
                <span className="vb-gratis">HOY GRATIS</span>
              </div>
            </li>
          </ul>

          <div className="vb-total-box">
            <p className="vb-total-label">5 bonos exclusivos — valor total</p>
            <p className="vb-total-valor">US$ 31,50</p>
            <p className="vb-total-hoje">Incluidos hoy con tu compra: <strong>US$ 0,00</strong></p>
          </div>

          <div className="vb-paquete">
            <p className="vb-paquete-title">VALOR TOTAL DEL PAQUETE</p>
            <div className="vb-paquete-rows">
              <div className="vb-paquete-row">
                <span>Libro principal</span>
                <span className="vb-paquete-val">US$ 9,90</span>
              </div>
              <div className="vb-paquete-row">
                <span>5 Bonos exclusivos</span>
                <span className="vb-paquete-val vb-paquete-strike">US$ 31,50</span>
              </div>
              <div className="vb-paquete-divider"></div>
              <div className="vb-paquete-row vb-paquete-sub">
                <span>Valor total del paquete</span>
                <span className="vb-paquete-val">US$ 41,40</span>
              </div>
              <div className="vb-paquete-row vb-paquete-hoje">
                <span>Hoy accedes por solo</span>
                <strong className="vb-paquete-preco">US$ 9,90</strong>
              </div>
            </div>
            <a href="#comprar" className="btn-cta vb-cta">▶ QUIERO EL LIBRO + LOS 5 BONOS</a>
          </div>
        </div>
      </section>

      {/* AUTOR */}
      <section id="autor" className="autor">
        <div className="container">
          <p className="autor-label">SOBRE EL AUTOR</p>
          <h2 className="autor-name">Daniel Machado</h2>
          <div className="autor-inner">
            <div className="autor-img-wrapper">
              <img src={B + 'images/autor-v2.webp'} alt="Daniel Machado – Autor" className="autor-img-mobile" />
              <img src={B + 'images/autor-v2.webp'} alt="Daniel Machado – Autor" className="autor-img-desktop" />
            </div>
            <div className="autor-text">
              <p>
                Daniel Machado es escritor, predicador y comunicador cristiano, dedicado
                a crear recursos bíblicos que ayudan a las personas a fortalecer su fe
                y descubrir el propósito que Dios tiene para sus vidas.
              </p>
              <p>
                Como presbítero y comunicador, ha acompañado a miles de personas en su
                crecimiento espiritual, enseñando la Palabra con claridad, profundidad
                y propósito real.
              </p>
              <p className="autor-closing">
                "Este material fue creado para ayudarte a vivir con más fe, dirección
                y propósito — exactamente donde Dios te llama."
              </p>
              <div className="autor-links">
                <span>🌐 danielmachado.com</span>
                <span>✉️ Contáctanos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="testimonios">
        <div className="container">
          <h2>LO QUE DICEN QUIENES YA LO LEYERON</h2>
          <div className="testimonios-grid">
            <div className="testimonio-card">
              <div className="stars">★★★★★</div>
              <p>"Comencé a leer sin saber muy bien qué esperar, y al tercer día ya sentía algo diferente. Dios empezó a hablarme con claridad sobre mi propósito. Exactamente lo que necesitaba."</p>
              <span>— María González</span>
            </div>
            <div className="testimonio-card">
              <div className="stars">★★★★★</div>
              <p>"Las reflexiones son profundas pero muy accesibles. Cada día encontré algo que tocó mi corazón. Daniel tiene el don de hacer que la Palabra de Dios sea práctica y transformadora."</p>
              <span>— Ana Rodríguez</span>
            </div>
            <div className="testimonio-card">
              <div className="stars">★★★★★</div>
              <p>"Los bonos me sorprendieron. Los versículos y el plan de lectura bíblica se convirtieron en parte de mi rutina. Vale mucho más que el precio. ¡Lo recomiendo a todos!"</p>
              <span>— Carlos Méndez</span>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section id="comprar" className="garantia">
        <div className="container garantia-inner">
          <div className="garantia-badge">
            <div className="badge">
              <div className="badge-top">GARANTÍA</div>
              <div className="badge-days">7</div>
              <div className="badge-bottom">DÍAS</div>
            </div>
          </div>
          <div className="garantia-text">
            <h2>COMPRA CON<br /><span className="text-gold">TOTAL SEGURIDAD</span></h2>
            <p>
              Si en los primeros 7 días sientes que este material no es para ti,
              te devolvemos el 100% de tu dinero, sin preguntas y sin complicaciones.
              Puedes dar este paso con total tranquilidad — el riesgo es cero.
            </p>
            <a href="#" className="btn-cta">▶ QUIERO ACCEDER HOY</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq">
        <div className="container">
          <h2>PREGUNTAS FRECUENTES</h2>
          <div className="faq-list">
            <details className="faq-item">
              <summary>¿Cómo recibiré el libro y los bonos?</summary>
              <p>Recibirás acceso inmediato al libro digital y a todos los bonos por correo electrónico, de forma instantánea, al confirmar tu compra.</p>
            </details>
            <details className="faq-item">
              <summary>¿Recibiré los bonos junto con el libro?</summary>
              <p>Sí, todos los 5 bonos exclusivos serán entregados junto con el libro principal, al mismo correo electrónico, inmediatamente después de tu compra.</p>
            </details>
            <details className="faq-item">
              <summary>¿En qué formato está disponible?</summary>
              <p>El libro y los bonos están en formato digital PDF, compatibles con todos los dispositivos: teléfono, tablet y computadora.</p>
            </details>
            <details className="faq-item">
              <summary>¿Necesito conocimiento bíblico previo?</summary>
              <p>No. Este material fue diseñado para personas en cualquier nivel espiritual. Si tienes el deseo genuino de crecer en tu fe y conocer el propósito de Dios, este libro es para ti.</p>
            </details>
            <details className="faq-item">
              <summary>¿Cómo funciona la garantía de 7 días?</summary>
              <p>Tienes 7 días para solicitar el reembolso completo si no estás satisfecho. Escríbenos y te devolveremos el 100% de tu dinero, sin preguntas.</p>
            </details>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container">
          <p className="final-eyebrow">NO LLEGASTE HASTA AQUÍ POR CASUALIDAD</p>
          <h2>
            Tal vez Dios esté usando este momento<br />
            para invitarte a un nuevo tiempo de<br />
            <span className="text-gold">fe, claridad y propósito</span>
          </h2>
          <p className="final-desc">
            El libro ya está listo. Los 5 bonos también. Todo lo que necesitas para
            comenzar tus 40 días de transformación espiritual te espera
            del otro lado de esta decisión.
          </p>
          <a href="#" className="btn-cta final-cta-btn">QUIERO COMENZAR MIS 40 DÍAS</a>
        </div>
      </section>

    </div>
  )
}
