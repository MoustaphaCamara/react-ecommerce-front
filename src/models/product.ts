export interface ProductInt {
  _id: number;
  image: string;
  name: string;
  slug: {
    current: string;
    _type: "slug";
  };
  price: number;
  quantity: number;
}
