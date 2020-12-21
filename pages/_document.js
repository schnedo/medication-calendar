import Document, {Head, Html, Main, NextScript} from 'next/document'

class _Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
        <Html>
          <Head>
            <meta charSet='utf-8'/>
            <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
            <meta name='viewport'
                  content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'/>
            <meta name='description' content='Description'/>
            <meta name='keywords' content='Keywords'/>
            <title>Medication Calendar</title>
            <link rel="manifest" href="/manifest.json"/>
            <link href='/favicon.ico' rel='icon' type='image/png'
                  sizes='16x16'/>
          </Head>
          <body>
          <Main/>
          <NextScript/>
          </body>
        </Html>
    )
  }
}

export default _Document
