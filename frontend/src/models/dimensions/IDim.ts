export interface IDim {
  uuid: string;
  dimGroupUuid: string;
  name: string;
  count?: number;
  area?: number;
  length?: number;
  unit: string;
  geoData: string;
}