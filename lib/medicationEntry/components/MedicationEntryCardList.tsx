import { Fragment, ReactElement } from "react";
import { MedicationEntryCard } from "./index";
import {
  CircularProgress,
  List,
  ListItem,
  ListSubheader,
} from "@material-ui/core";
import { MedicationEntry } from "../model";
import { format, startOfMonth } from "date-fns";

type StartOfMonth = number;
type YearMonthToEntries = Map<StartOfMonth, MedicationEntry[]>;

const putIn = (
  yearMonthEntries: YearMonthToEntries,
  entry: MedicationEntry,
): YearMonthToEntries => {
  const month = startOfMonth(entry.date).valueOf();
  yearMonthEntries.set(month, [...(yearMonthEntries.get(month) ?? []), entry]);
  return yearMonthEntries;
};

const aggregateByMonth = (
  entries: MedicationEntry[],
): [StartOfMonth, MedicationEntry[]][] => {
  const yearMonthEntries: YearMonthToEntries = entries.reduce(putIn, new Map());
  return Array.from(yearMonthEntries.entries()).sort(
    ([monthA], [monthB]) => monthB - monthA,
  );
};

export interface MedicationEntryCardListSelection {
  medicationEntry: MedicationEntry;
  pointerPosition: {
    clientX: number;
    clientY: number;
  };
}

export interface MedicationEntryCardListProps {
  medicationEntries: MedicationEntry[] | null;
  onSelect: (
    medicationEntryCardListSelection: MedicationEntryCardListSelection,
  ) => void;
}

export default function MedicationEntryCardList({
  medicationEntries,
  onSelect,
}: MedicationEntryCardListProps): ReactElement {
  const yearMonthToEntries = aggregateByMonth(medicationEntries ?? []);

  return medicationEntries === null ? (
    <CircularProgress />
  ) : (
    <List>
      {yearMonthToEntries.map(([month, entries]) => (
        <Fragment key={month}>
          <ListSubheader>{format(month, "MMMM y")}</ListSubheader>
          {entries.map((entry) => (
            <ListItem key={entry.id}>
              <MedicationEntryCard
                medicationEntry={entry}
                onClick={({ clientX, clientY }) => {
                  onSelect({
                    medicationEntry: entry,
                    pointerPosition: { clientX, clientY },
                  });
                }}
              />
            </ListItem>
          ))}
        </Fragment>
      ))}
    </List>
  );
}
