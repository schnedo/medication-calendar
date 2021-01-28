import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { TreatmentCenter } from "../model";
import localforage from "localforage";

const treatmentCenterKey = "treatmentCenter";

export interface TreatmentCenterContext {
  treatmentCenter: TreatmentCenter;
  saveTreatmentCenter: (treatmentCenter: TreatmentCenter) => Promise<void>;
}
const defaultTreatmentCenter: TreatmentCenter = {
  address: "",
  fullName: "",
  phoneNumber: "",
};
const defaultContext: TreatmentCenterContext = {
  treatmentCenter: defaultTreatmentCenter,
  saveTreatmentCenter: async (treatmentCenter) => {
    await localforage.setItem(treatmentCenterKey, treatmentCenter);
    defaultContext.treatmentCenter =
      (await localforage.getItem<TreatmentCenter>(treatmentCenterKey)) ??
      defaultTreatmentCenter;
  },
};
const treatmentCenterContext = createContext<TreatmentCenterContext>(
  defaultContext,
);
treatmentCenterContext.displayName = "treatmentCenterContext";

export const useTreatmentCenter = (): TreatmentCenterContext =>
  useContext(treatmentCenterContext);

export interface TreatmentCenterProviderProps {
  children?: ReactNode;
}

export default function TreatmentCenterProvider({
  children,
}: TreatmentCenterProviderProps): ReactElement {
  const [value, setValue] = useState<TreatmentCenterContext>(defaultContext);

  useEffect(() => {
    localforage
      .getItem<TreatmentCenter>(treatmentCenterKey)
      .then(
        (maybeTreatmentCenter) =>
          maybeTreatmentCenter ?? defaultTreatmentCenter,
      )
      .then((treatmentCenter) =>
        setValue({
          treatmentCenter,
          saveTreatmentCenter: async (newTreatmentCenter) => {
            await localforage.setItem(treatmentCenterKey, newTreatmentCenter);
            setValue((old) => ({
              ...old,
              treatmentCenter: newTreatmentCenter,
            }));
          },
        }),
      );
  }, []);

  return (
    <treatmentCenterContext.Provider value={value}>
      {children}
    </treatmentCenterContext.Provider>
  );
}
