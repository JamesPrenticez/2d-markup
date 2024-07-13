import { IDim } from "./IDim";

export interface IDimGroup {
  uuid: string;
  name: string;
  dims?: IDim[];
}