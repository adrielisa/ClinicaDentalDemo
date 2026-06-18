import NextLink from 'components/NextLink';
import SocialLinks from 'components/SocialLinks';
import Image from 'next/image';
import { services, usefulLinks } from '../data';

/**
 * Renders a footer widget with a title and list of links.
 *
 * @param {Array} list - List of items with `id` and `title`.
 * @param {string} title - Widget section title.
 * @returns {JSX.Element} Footer widget.
 */
const renderWidget = (list, title) => (
  <div className="widget">
    <h3 className="widget-title fs-24 mb-3 merriweather">{title}</h3>
    <ul className="list-unstyled text-reset mb-0">
      {list.map(({ title, id }) => (
        <li key={id}>
          <NextLink href="#" title={title} className="lato" />
        </li>
      ))}
    </ul>
  </div>
);

/**
 * Footer component for the website.
 *
 * @returns {JSX.Element} Footer section with logo, widgets, social links, and contact info.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-top overflow-hidden bg-color">
      <div className="container pt-10 pt-md-12 pb-7">
        <div className="row gx-10 justify-content-around">
          {/* Logo + Description + Social */}
          <div className="col-lg-3">
            <div className="widget d-flex flex-column align-items-center text-center text-lg-start">
              <div className="mb-5">
                <Image
                  src="/img/logo-light.webp"
                  alt="Logo Clínica Dental"
                  width={200}
                  height={100}
                  className="text-center"
                />
              </div>
              <p className="lead mb-5 fs-18 text-white lato text-justify">
                Cuidamos de tu salud bucodental con atención personalizada, tecnología moderna y un equipo de profesionales comprometido con tu sonrisa.
              </p>
              <h3 className="fs-24 text-white merriweather">Síguenos En</h3>
              <SocialLinks className="nav social text-md-end" />
            </div>
          </div>

          {/* Services + Useful Links */}
          <div className="col-sm-6 col-md-4 col-lg-2 mt-md-5 mt-lg-0 mt-10 text-white">
            {renderWidget(services, 'Servicios')}
          </div>
          <div className="col-sm-6 col-md-4 col-lg-2 mt-md-5 mt-lg-0 mt-10 text-white">
            {renderWidget(usefulLinks, 'Enlaces Útiles')}
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-3 mt-md-5 mt-lg-0 mt-10">
            <div className="widget">
              <h3 className="widget-title fs-24 mb-3 merriweather">Contáctanos</h3>
              <div className="d-flex mb-3">
                <i className="uil uil-location-pin-alt fs-30 text-white" />
                <address className="ms-2 text-white lato">
                  Calle Principal 123, 28013 Madrid, España
                </address>
              </div>
              <div className="d-flex mb-3 align-items-center">
                <i className="uil uil-envelope fs-26 text-white" />
                <a href="mailto:company@gmail.com" className="ms-2 text-white lato">
                  company@gmail.com
                </a>
              </div>
              <div className="d-flex align-items-center">
                <i className="uil uil-phone-volume fs-26 text-white" />
                <a href="tel:+911234567890" className="ms-2 text-white lato fs-18">
                  +91 12345 67890
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-4 mt-md-4 mb-7" />

        <div className="d-md-flex align-items-center justify-content-center">
          <p className="mb-2 mb-lg-0 text-white lato text-center">
            © {currentYear} Clínica Dental. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
