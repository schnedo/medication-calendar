import React from "react";
import { render } from "@testing-library/react";
import MedicationEntryCard from "./MedicationEntryCard";
import { MedicationEntry } from "../model";
import userEvent from "@testing-library/user-event";

jest.mock("../components", () => ({
  MedicationCard() {
    return <div>mocked</div>;
  },
}));

describe("MedicationEntryCard", () => {
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

  it("should render correctly", async () => {
    expect.hasAssertions();

    const { container } = render(
      <MedicationEntryCard medicationEntry={medicationEntry} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("should call onClick when clicked on", async () => {
    expect.hasAssertions();

    const onClick = jest.fn();

    const { getByRole } = render(
      <MedicationEntryCard
        medicationEntry={medicationEntry}
        onClick={onClick}
      />,
    );

    expect(onClick).toHaveBeenCalledTimes(0);
    userEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
