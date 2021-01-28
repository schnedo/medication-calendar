import * as pdfMake from "pdfmake/build/pdfmake";
import { TCreatedPdf } from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { CustomTableLayout, TDocumentDefinitions } from "pdfmake/interfaces";
import {
  formatBatchNumber,
  formatDose,
  formatDuration,
  Medication,
  MedicationEntry,
} from "../medicationEntry";
import { format as formatDate } from "date-fns";
import { formatBodyMass } from "../contact";

// pdfmake explicitly wants consumers to set vfs and internally accesses it via this... (see https://pdfmake.github.io/docs/0.1/getting-started/client-side/)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
const tableLayout: { [name: string]: CustomTableLayout } = {
  myLayout: {
    hLineWidth(rowIndex, contentTable) {
      if (rowIndex === 0 || rowIndex === contentTable.table.body.length) {
        return 0;
      }
      return rowIndex === contentTable.table.headerRows ? 2 : 1;
    },
    vLineWidth(rowIndex, contentTable) {
      return rowIndex === 0 || rowIndex === contentTable.table.widths?.length
        ? 0
        : 1;
    },
    paddingLeft() {
      return 8;
    },
    paddingRight() {
      return 8;
    },
  },
};

const formatMedication = ({
  medicament: { name, batchNumber },
  dose,
}: Medication): string =>
  `${name} / ${formatBatchNumber(batchNumber)}: ${formatDose(dose)}`;

const formatMedications = (medications: Medication[]): string =>
  medications.map(formatMedication).join("\n");

const toTableRow = ({
  date,
  medications,
  duration,
  bodyMass,
  comments,
}: MedicationEntry): [
  date: string,
  medication: string,
  duration: string,
  bodyMass: string,
  comments: string,
] => {
  return [
    formatDate(date, "LLL d y"),
    formatMedications(medications),
    formatDuration(duration),
    formatBodyMass(bodyMass),
    comments,
  ];
};

export default function generatePdf(
  medicationEntries: MedicationEntry[],
): TCreatedPdf {
  const documentDefinition: TDocumentDefinitions = {
    content: {
      layout: "myLayout",
      table: {
        headerRows: 1,
        widths: ["auto", "*", "auto", "auto", "auto"],
        body: [
          ["Datum", "Medikation", "Dauer", "Gewicht", "Kommentare"],
          ...medicationEntries.map(toTableRow),
        ],
      },
    },
  };
  return pdfMake.createPdf(documentDefinition, tableLayout);
}
