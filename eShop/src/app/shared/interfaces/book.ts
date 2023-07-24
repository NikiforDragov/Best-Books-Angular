export interface IBook {
  _id?:string,
  title: string;
  author: string;
  genre: string;
  imageUrl: string;
  description: string;
  pages: number;
  publicationDate: Date;
}
