type ProductStatus = 'OPEN' | 'CLOSED';
type Product = {
  name: string,
  createdAt: Date,
  stock: number,
  status?: ProductStatus,
}

const products: Product[] = [];

const addProduct = (data: Product) => {
  products.push(data);
}

addProduct({name:'Mouse', createdAt: new Date(), stock: 12});
addProduct({name:'Keyboard', createdAt: new Date(), stock: 212, status: 'OPEN'});

console.log(products);
