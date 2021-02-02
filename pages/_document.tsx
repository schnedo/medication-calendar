import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { Children, ReactElement } from "react";
import { ServerStyleSheets } from "@material-ui/styles";

class _Document extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
      ],
    };
  }

  render(): ReactElement {
    return (
      <Html lang="de">
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            rel="manifest"
            href={`${this.props.__NEXT_DATA__.assetPrefix}/manifest.json`}
          />
          <link
            href={`${this.props.__NEXT_DATA__.assetPrefix}/logo.svg`}
            rel="icon"
            type="image/svg+xml"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${this.props.__NEXT_DATA__.assetPrefix}/favicon-16x16.png`}
            sizes="16x16"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${this.props.__NEXT_DATA__.assetPrefix}/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${this.props.__NEXT_DATA__.assetPrefix}/android-192x192.png`}
            sizes="192x192"
          />
          <link
            rel="apple-touch-icon"
            href={`${this.props.__NEXT_DATA__.assetPrefix}/apple-touch-icon-180x180.png`}
            sizes="180x180"
          />
          <meta
            name="msapplication-config"
            content="/iconx/browserconfig.xml"
          />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
          />
          <meta name="theme-color" content="#3f51b5" />
          <meta
            name="description"
            content="Medication Calendar is an progressive web app (pwa) that enables its user to document their consumption of medical drugs and lets them print out a pdf if printed documentation is needed for regulatory purposes."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
