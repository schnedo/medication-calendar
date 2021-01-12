import { render } from "@testing-library/react";
import MedicationEntryCard from "./MedicationEntryCard";
import { mockAll } from "@userlike/joke";
import {
  BatchNumber,
  Dose,
  Duration,
  Medicament,
  Medication,
  MedicationEntry,
} from "../model";
import { BodyMass } from "../../contact";

mockAll(import("../components"), () => ({
  MedicationCard: jest.fn().mockReturnValue(<div>mocked</div>),
}));

describe("MedicationEntryCard", () => {
  it("should render correctly", async () => {
    expect.hasAssertions();

    const medicationEntry = new MedicationEntry(
      new Date(2020, 1, 11),
      [
        new Medication(
          new Dose(200),
          new Medicament("name", new BatchNumber(12345)),
        ),
      ],
      new Duration({ minutes: 15, hours: 1 }),
      "comments",
      new BodyMass(75),
    );

    const { container } = render(
      <MedicationEntryCard medicationEntry={medicationEntry} />,
    );

    expect(container).toMatchSnapshot();
  });
});
