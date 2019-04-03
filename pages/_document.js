import Document, { Head, Main, NextScript } from 'next/document';

import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <title>Pietro Cascione - Portfolio</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
          />
          <meta
            name="description"
            content="My name is Pietro Cascione and i'm a Full-Stack Web Developer and Freelancer from Italy. I have an endless passion for technology and i love to engage myself in solving hard problems and upgrading my skills."
          />
          <meta
            name="keywords"
            content="Cascione Pietro portfolio, Cascione Pietro developer, Cascione Pietro freelancig, Cascione Pietro programming"
          />
          <meta
            property="og:title"
            content="Cascione Pietro - Full-stack developer, programmer"
          />
          <meta property="og:locale" content="en_EU" />
          <meta property="og:url" content={'https://cascionepietro.com'} />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="My name is Pietro Cascione and i'm a Full-Stack Web Developer and Freelancer from Italy."
          />
          {this.props.styleTags}
          <link rel="icon" type="image/ico" href="/static/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
