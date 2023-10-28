# factoryx-frontend-dev

`factoryx-frontend-dev` is a comprehensive library providing a variety of hooks, stores, and utility functions for ReactJS-based e-commerce projects. This library aims to streamline the integration of common e-commerce functionalities into your project, offering a fast and convenient solution.

## Installation

If you are using NPM, you can install the library with:

```bash
npm install factoryx-frontend-dev
```

Alternatively, if you are using Yarn, you can install the library with:

```bash
yarn add factoryx-frontend-dev
```

## Usage
### Cart
The library provides a set of hooks and stores to manage the shopping cart functionality.
##### 'useCartStore'
This is a store hook used to manage the state of the shopping cart.

```javascript
import { useCartStore } from 'factoryx-frontend-dev';

const Component = () => {
  const { products, addToCart, removeFromCart } = useCartStore();
  
  // To add a product
  addToCart({ id: 1, name: 'Product 1', price: 100 }, 1);

  // To remove a product
  removeFromCart({ id: 1 });

  // To display products in the cart
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
};
```

##### 'AddToCart'
This is a component used to add products to the shopping cart.

```javascript
import { AddToCart } from 'factoryx-frontend-dev';

const ProductPage = ({ product }) => (
  <AddToCart product={product} quantity={1}>
    <button>Add to Cart</button>
  </AddToCart>
);
```

### Checkout
Hooks and components for handling checkout processes.

### Products
Hooks and components for listing and managing products.

### Orders
Hooks and components for listing and managing orders.

### Utility Functions
Various utility functions to assist in common tasks.

### Development
To run and develop the project locally:
    
1.Clone the repository
```bash
git clone https://github.com/factoryx/factoryx-frontend-dev.git
```
2.Install dependencies
```bash
npm install
```
3.Start the development server
```bash
npm start
```

## License
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License - see the LICENSE file for details.