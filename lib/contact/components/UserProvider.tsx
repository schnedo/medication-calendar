import {
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { User } from "../model";
import localforage from "localforage";

const userKey = "user";

export interface UserContext {
  user: User;
  saveUser: (user: User) => Promise<void>;
}
const defaultUser: User = {
  address: "",
  birthdate: null,
  bodyMass: null,
  diagnosis: "",
  fullName: "",
  phoneNumber: "",
};
const defaultContext: UserContext = {
  user: defaultUser,
  saveUser: async (user) => {
    await localforage.setItem(userKey, user);
    defaultContext.user =
      (await localforage.getItem<User>(userKey)) ?? defaultUser;
  },
};
const userContext = createContext<UserContext>(defaultContext);
userContext.displayName = "UserContext";

export const useUser = (): UserContext => useContext(userContext);

export interface UserProviderProps {
  children?: ReactNode;
}

export default function UserProvider({
  children,
}: UserProviderProps): ReactElement {
  const [value, setValue] = useState<UserContext>(defaultContext);

  useEffect(() => {
    localforage
      .getItem<User>(userKey)
      .then((maybeUser) => maybeUser ?? defaultUser)
      .then((user) =>
        setValue({
          user,
          saveUser: async (newUser) => {
            await localforage.setItem(userKey, newUser);
            setValue((old) => ({ ...old, user: newUser }));
          },
        }),
      );
  }, []);

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
}
