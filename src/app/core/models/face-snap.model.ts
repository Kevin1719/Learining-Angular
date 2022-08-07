export class FaceSnap {
  id!:number;
  title!:string;
  description!: string;              //propiété et argument à la fois en utilisant le modificateur "public"
  imageUrl!: string;
  createdDate!: Date;
  snaps!: number;
  location?:string
}
