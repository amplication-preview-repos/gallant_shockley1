import { HrInitiative as THrInitiative } from "../api/hrInitiative/HrInitiative";

export const HRINITIATIVE_TITLE_FIELD = "name";

export const HrInitiativeTitle = (record: THrInitiative): string => {
  return record.name?.toString() || String(record.id);
};
