import Contact from "./contact";
import BodyMass from "./bodyMass";

export default interface User extends Contact {
  readonly birthdate: Date | null;
  readonly bodyMass: BodyMass | null;
  readonly diagnosis: string;
  readonly fullName: string;
  readonly address: string;
  readonly phoneNumber: string;
}
