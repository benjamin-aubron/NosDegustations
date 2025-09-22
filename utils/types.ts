export type Cepage = {
  cepage: string;
  pourcentage: number;
}

export type Data = {
  id: string;
  tastingDate?: Date;
  tasted: boolean;
  image?: string;
  domain?: string;
  appelation: string;
  region: string;
  year?: number;
  alcohol?: number;
  cepage?: Cepage[]
  noteClem?: number;
  noteBen?: number;
  commentClem?: string;
  commentBen?: string;
  type: string;
};
