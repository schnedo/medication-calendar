import React from "react";
import { render } from "@testing-library/react";
import MedicationEntryCard from "./MedicationEntryCard";
import { MedicationEntry } from "../model";

jest.mock("../components", () => ({
  MedicationCard() {
    return <div>mocked</div>;
  },
}));

describe("MedicationEntryCard", () => {
  it("should render correctly", async () => {
    expect.hasAssertions();

    const medicationEntry: MedicationEntry = {
      bodyMass: {
        amount: 75,
      },
      comments: "comments",
      date: new Date(2020, 1, 11),
      duration: { minutes: 15, hours: 1 },
      id: "1",
      medications: [
        {
          id: "2",
          dose: {
            amount: 200,
          },
          medicament: {
            name: "name",
            batchNumber: {
              number: 12345,
            },
          },
        },
      ],
    };

    const { container } = render(
      <MedicationEntryCard medicationEntry={medicationEntry} />,
    );

    expect(container).toMatchSnapshot();
  });
});
