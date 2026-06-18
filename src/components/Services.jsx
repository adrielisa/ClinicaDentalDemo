import { Fragment, useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import Tiles from 'components/Tiles';
import ListColumn from 'components/ListColumn';
import { aboutList1 } from '../data';

const Services = () => {
  const h2Ref = useRef(null);
  const [h2Width, setH2Width] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (h2Ref.current) {
        setH2Width(h2Ref.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <Fragment>
      <div className="row gx-lg-8 gx-xl-12 gy-12 align-items-center mb-5">
        {/* Left Column - Tiles with Counter */}
        <div className="col-lg-6 position-relative">
          <div
            className="btn btn-circle bg-theme-dark pe-none position-absolute counter-wrapper flex-column d-none d-md-flex"
            style={{
              zIndex: 1,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 170,
              height: 170,
            }}
          >
            <h3 className="fs-24 text-white mb-1 mt-n2">
              <CountUp end={25} suffix="K+" />
            </h3>
            <p className="fs-18 merriweather">Pacientes Atendidos</p>
          </div>
          <Tiles />
        </div>

        {/* Right Column - Text Content */}
        <div className="col-lg-6">
          <div
            className="d-flex align-items-center justify-content-start mb-2"
            style={{ width: `${h2Width}px` }}
          >
            <h3 className="fs-18 fw-bold text-second merriweather mb-0 me-3">
              Clínica Dental
            </h3>
            <div
              style={{
                flex: 1,
                height: '3px',
                backgroundColor: '#b3e5fc',
              }}
            />
          </div>

          <h2 className="fs-38 mb-5 merriweather d-inline" ref={h2Ref}>
            La Mejor Clínica Dental de la Ciudad
          </h2>

          <p className="mb-5 fs-18 text-justify lato">
            En nuestra clínica dental combinamos experiencia, tecnología de última generación y un trato cercano para ofrecerte la mejor atención. Nuestro equipo de profesionales se dedica a cuidar tu salud bucodental con tratamientos personalizados y resultados que cuidan tu sonrisa. Desde una limpieza de rutina hasta tratamientos especializados como implantes, ortodoncia o blanqueamiento, ponemos a tu disposición todo lo necesario para que vivas una experiencia cómoda y de confianza. Tu bienestar y tu sonrisa son nuestra prioridad, y trabajamos cada día para superar tus expectativas con un servicio de calidad y profesionalismo.
          </p>

          <ListColumn list={aboutList1} />
        </div>
      </div>
    </Fragment>
  );
};

export default Services;
