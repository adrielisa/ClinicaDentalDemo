import NextLink from 'components/NextLink';

/**
 * Hero section with heading, subheading, and call-to-action.
 * Includes animations and responsive layout.
 */
const Hero = () => {
  return (
    <section className="wrapper bg-dark">
      <div className="swiper-hero dots-over">
        <div className="swiper-slide bg-dark bg-image hero" aria-label="Hero section background">
          <div className="container h-100">
            <div className="row h-100 hero-text">
              <div
                className="d-flex flex-column justify-content-center align-items-center align-items-md-start hero-text"
                style={{ maxWidth: '60%' }}
              >
                <h3
                  className="merriweather fs-24 text-white animate__animated animate__slideInDown animate__delay-1s"
                  aria-label="10 Años de Excelencia Dental"
                >
                  10 Años de Excelencia Dental
                </h3>
                <h1
                  className="merriweather fs-48 mb-4 text-white animate__animated animate__slideInDown animate__delay-2s"
                  aria-label="Título principal: Tu Sonrisa, Nuestro Compromiso"
                >
                  Tu Sonrisa, Nuestro Compromiso
                </h1>
                <p
                  className="lato lead fs-18 lh-sm mb-7 text-white animate__animated animate__slideInRight animate__delay-3s"
                  aria-label="Texto de apoyo"
                >
                  Descubre la diferencia que marca una odontología excepcional con Clínica Dental, donde cuidamos de ti y de tu sonrisa.
                </p>
                <div className="animate__animated animate__slideInUp animate__delay-3s merriweather">
                  <NextLink
                    title="Reservar Cita"
                    href="#"
                    className="btn btn-lg rounded"
                    aria-label="Reservar una cita"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
