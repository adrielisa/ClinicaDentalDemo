import Document, { Head, Html, Main, NextScript } from 'next/document';
export default class SandBox extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/img/favicon/site.webmanifest" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            src="https://suite.upnify.com/addons/js/suite.min.js?tke=E-EC3C1DB4-E3BD-4F5C-B7F6-22E56C4B73B9&tki=P08890063FF-399D-4A62-99D0-FF087434DEB2"
            id="upnifyWAOS"
            defer
          />
        </body>
      </Html>
    );
  }
}

SandBox.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => App,
      enhanceComponent: (Component) => Component
    });

  const initialProps = await Document.getInitialProps(ctx);
  return { ...initialProps };
};
