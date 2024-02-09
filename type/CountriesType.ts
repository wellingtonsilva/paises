export type CountriesType = {
  name: {
    common: string;
  }
  flags: {
    svg:string;
    alt:string;
  }
  translations: {
    por:{
      common: string;
    }
  }
  capital:string;
  region:string;
  subregion:string;
  population:number;
  languages?: {
    [key:string]:string;
  }
  borders?:string[];
  cca3: string;
}