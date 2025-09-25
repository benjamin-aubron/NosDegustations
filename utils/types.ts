export type Cepage = {
  cepage: string;
  pourcentage: number;
}

export type Data = {
  id: string;
  tastingDate?: Date;
  tasted: boolean;
  photoUrl?: string;
  domain?: string;
  appelation: string;
  region: string;
  year?: number;
  alcohol?: number;
  cepage?: Cepage[]
  noteClem?: number;
  noteBenji?: number;
  commentClem?: string;
  commentBenji?: string;
  type: string;
};
