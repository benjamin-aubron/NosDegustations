export type Data = {
  id: number;
  date?: Date;
  bu: boolean;
  image?: string;
  domaine?: string;
  appelation: string;
  terroir?: string;
  region: string;
  annee?: number;
  alcool?: number;
  cepage?: object
  noteClem?: number;
  noteBen?: number;
  commentClem?: string;
  commentBen?: string;
  type: string;
};
