export interface SpendeModel {
  id?: number;
  donationType: string;
  destination: string;
  email: string;
  handover: string;
  adresse?: {
    vorName: string;
    nachName: string;
    strasse: string;
    stadt: string;
    plz: string;
  };
}
