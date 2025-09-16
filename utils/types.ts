export type Cepage = {
  cepage: string;
  pourcentage: number;
}

export type Data = {
  id: number;
  date?: Date;
  bu: boolean;
  image?: string;
  domaine?: string;
  appelation: string;
  region: string;
  annee?: number;
  alcool?: number;
  cepages?: Cepage[]
  noteClem?: number;
  noteBen?: number;
  commentClem?: string;
  commentBen?: string;
  type: string;
};
