import { Fragment } from 'react';
import Head from 'next/head';
import Hero from 'components/Hero';
import Services from 'components/Services';
import Facts from 'components/Facts';
import PageProgress from 'components/PageProgress';

const Home = () => (
  <Fragment>
    <PageProgress />
    <Head>
      <title>Clínica Dental – Tu Sonrisa, Nuestro Compromiso</title>
      <meta
        name="description"
        content="Clínica dental con atención personalizada, tecnología moderna y un equipo de profesionales comprometido con tu salud bucodental y tu sonrisa."
      />
    </Head>

    <main className="content-wrapper overflow-hidden">
      <Hero />
      <section className="wrapper">
        <div className="container py-10 py-md-12">
          <Services />
        </div>
      </section>
      <section className="wrapper facts">
        <div className="container py-12 py-md-14 justify-content-center">
          <Facts />
        </div>
      </section>
    </main>
  </Fragment>
);

export default Home;
