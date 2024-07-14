export function saveToLocalStorage(key: any, data: any){
  localStorage.setItem(key, JSON.stringify(data));
}
