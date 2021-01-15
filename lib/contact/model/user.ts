import Contact from "./contact";
import BodyMass from "./bodyMass";

export default interface User extends Contact {
  readonly birthdate: Date;
  readonly bodyMass: BodyMass;
  readonly diagnosis: string;
  readonly fullName: string;
  readonly address: string;
  readonly phoneNumber: string;
}
