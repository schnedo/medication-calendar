import { AppProps } from "next/app";
import { ReactElement } from "react";
import Head from "next/head";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function App({ Component, pageProps }: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>Medication Calendar</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
      </Head>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Component {...pageProps} />
      </MuiPickersUtilsProvider>
    </>
  );
}

export default App;
