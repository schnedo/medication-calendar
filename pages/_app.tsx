import { AppProps } from "next/app";
import { ReactElement } from "react";
import Head from "next/head";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import MedicationEntriesProvider from "../lib/medicationEntry/components/MedicationEntriesProvider";
import { CssBaseline } from "@material-ui/core";
import { UserProvider } from "../lib/contact";

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
      <CssBaseline>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <UserProvider>
            <MedicationEntriesProvider>
              <Component {...pageProps} />
            </MedicationEntriesProvider>
          </UserProvider>
        </MuiPickersUtilsProvider>
      </CssBaseline>
    </>
  );
}

export default App;
