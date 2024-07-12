export function capitalizeFirstLetter(string: string | undefined): string {
  if(string === undefined) return ""
  return string.charAt(0).toUpperCase() + string.slice(1);
}


// Could do it this way... 
// export {};

// declare global {
//   interface String {
//     capitalizeFirstLetter(): string;
//   }
// }

// String.prototype.capitalizeFirstLetter = function (): string {
//   if (this.length === 0) return "";
//   return this.charAt(0).toUpperCase() + this.slice(1);
// };

// Example usage is kinda ugly tho
// import './stringExtensions';
// const anotherStr = "world";
// console.log(anotherStr.capitalizeFirstLetter());