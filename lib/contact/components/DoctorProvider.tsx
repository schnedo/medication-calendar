import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Doctor } from "../model";
import localforage from "localforage";

const doctorKey = "doctor";

export interface DoctorContext {
  doctor: Doctor;
  saveDoctor: (doctor: Doctor) => Promise<void>;
}
const defaultDoctor: Doctor = {
  address: "",
  fullName: "",
  phoneNumber: "",
};
const defaultContext: DoctorContext = {
  doctor: defaultDoctor,
  saveDoctor: async (doctor) => {
    await localforage.setItem(doctorKey, doctor);
    defaultContext.doctor =
      (await localforage.getItem<Doctor>(doctorKey)) ?? defaultDoctor;
  },
};
const doctorContext = createContext<DoctorContext>(defaultContext);
doctorContext.displayName = "doctorContext";

export const useDoctor = (): DoctorContext => useContext(doctorContext);

export interface DoctorProviderProps {
  children?: ReactNode;
}

export default function DoctorProvider({
  children,
}: DoctorProviderProps): ReactElement {
  const [value, setValue] = useState<DoctorContext>(defaultContext);

  useEffect(() => {
    localforage
      .getItem<Doctor>(doctorKey)
      .then((maybeDoctor) => maybeDoctor ?? defaultDoctor)
      .then((doctor) =>
        setValue({
          doctor,
          saveDoctor: async (newDoctor) => {
            await localforage.setItem(doctorKey, newDoctor);
            setValue((old) => ({ ...old, doctor: newDoctor }));
          },
        }),
      );
  }, []);

  return (
    <doctorContext.Provider value={value}>{children}</doctorContext.Provider>
  );
}
