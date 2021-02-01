import { AppProps } from "next/app";
import { ReactElement, useEffect } from "react";
import Head from "next/head";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import MedicationEntriesProvider from "../lib/medicationEntry/components/MedicationEntriesProvider";
import { CssBaseline } from "@material-ui/core";
import {
  UserProvider,
  DoctorProvider,
  TreatmentCenterProvider,
} from "../lib/contact";
import { AppBar } from "../lib/layout";
import { registerServiceWorker } from "../lib/worker";

function App({ Component, pageProps }: AppProps): ReactElement {
  useEffect(() => {
    registerServiceWorker();
  });
  return (
    <>
      <Head>
        <title>Medication Calendar</title>
      </Head>
      <CssBaseline>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <UserProvider>
            <TreatmentCenterProvider>
              <DoctorProvider>
                <MedicationEntriesProvider>
                  <Component {...pageProps} AppBar={AppBar} />
                </MedicationEntriesProvider>
              </DoctorProvider>
            </TreatmentCenterProvider>
          </UserProvider>
        </MuiPickersUtilsProvider>
      </CssBaseline>
    </>
  );
}

export default App;
