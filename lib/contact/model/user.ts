import Contact from "./contact";
import BodyMass from "./bodyMass";

export default class User extends Contact {
  constructor(
    readonly birthdate: Date,
    readonly bodyMass: BodyMass,
    readonly diagnosis: string,
    readonly fullName: string,
    readonly address: string,
    readonly phoneNumber: string,
  ) {
    super(fullName, address, phoneNumber);
  }
}
