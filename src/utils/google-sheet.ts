import Papa from 'papaparse';

export interface DefectItem {
    "ID"?: string;
    "Time(before)"?: string;
    "Time(after)"?: string;
    "Tower"?: string;
    "Floor"?: string;
    "Room"?: string;
    "Room detailed"?: string;
    "Work category"?: string;
    "Description(O)"?: string;
    "Description(E)"?: string;
    "PIC"?: string;
    "Photo(before)"?: string;
    "Photo(after)"?: string;
    "Status"?: string;
    "approved"?: string;
}

const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1t_feuRxrgQYyKw7PoplyPcyWa73A8lIVq7fHvrLhaIY/export?format=csv';

export async function fetchSheetData(): Promise<DefectItem[]> {
    try {
        const response = await fetch(SHEET_URL);
        const csv = await response.text();

        return new Promise((resolve, reject) => {
            Papa.parse<DefectItem>(csv, {
                header: true,
                skipEmptyLines: true,
                complete: (results) => {
                    resolve(results.data);
                },
                error: (error: any) => {
                    reject(error);
                }
            });
        });
    } catch (error) {
        console.error("Failed to fetch Google Sheet data:", error);
        return [];
    }
}
