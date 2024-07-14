import { IDimGroup } from "@models";

export const loadFromLocalStorage = (key: string, setDimGroups: any) => {
  const strungData = localStorage.getItem(key);
  if(strungData){
    const data = JSON.parse(strungData)
    setDimGroups(data);

    return data;
  }
};