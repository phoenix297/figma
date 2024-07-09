import React from 'react';
import styled from 'styled-components';

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 20px;
  width: 250px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

const ProductButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <ProductCardContainer>
      <ProductImage src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>₦{product.price.toLocaleString()}</ProductPrice>
      <ProductButton>Buy Now</ProductButton>
      <ProductButton>Add to Cart</ProductButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
import React from 'react';
import styled from 'styled-components';

const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 20px;
  width: 250px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin-top: 10px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

const ProductButton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <ProductCardContainer>
      <ProductImage src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>₦{product.price.toLocaleString()}</ProductPrice>
      <ProductButton>Buy Now</ProductButton>
      <ProductButton>Add to Cart</ProductButton>
    </ProductCardContainer>
  );
};
import React from 'react';
import ProductList from '../components/ProductList';

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max 1TB',
    description: 'The iPhone 15 Pro Max uses Titanium for its frame, which is lighter and stronger than before.',
    image: 'https://example.com/iphone-15-pro-max.jpg',
    price: 2799000,
  },
  {
    id: 2,
    name: 'MacBook Pro 16-inch | Apple M3 Max | 1TB',
    description: 'The MacBook Pro 16-inch is powered by the Apple M3 Max chip, a 3nm processor that promises improved performance.',
    image: 'https://example.com/macbook-pro-16-inch.jpg',
    price: 7099000,
  },
  {
    id: 3,
    name: 'AirPods Max',
    description: 'AirPods Max are designed to provide a premium listening experience.',
    image: 'https://example.com/airpods-max.jpg',
    price: 1099000,
  },
  {
    id: 4,
    name: 'New Apple iPhone 15 Pro esim',
    description: 'The iPhone 15 Pro uses Titanium for its frame, which is lighter and stronger than before.',
    image: 'https://example.com/iphone-15-pro-esim.jpg',
    price: 1300000,
  },
  {
    id: 5,
    name: 'New Apple iPhone 14 Plus ESIM',
    description: 'The iPhone 14 Plus uses a powerful A15 Bionic chip.',
    image: 'https://example.com/iphone-14-plus-esim.jpg',
    price: 966000,
  },
  {
    id: 6,
    name: 'New Phone 14 Pro 128GB ESIM',
    description: 'The iPhone 14 Pro uses a powerful A15 Bionic chip.',
    image: 'https://example.com/iphone-14-pro-128gb-esim.jpg',
    price: 1120000,
  },
  {
    id: 7,
    name: 'Preowned Apple iPhone XR Unlocked phone',
    description: 'TheiPhone XR uses a powerful A12 Bionic chip.',
    image: 'https://example.com/iphone-xr-preowned.jpg',
    price: 450000,
  },
  {
    id: 8,
    name: 'Apple Watch Series 7 | 45mm',
    description: 'The Apple Watch Series 7 is the most advanced Apple Watch yet.',
    image: 'https://example.com/apple-watch-series-7.jpg',
    price: 389000,
  },
  {
    id: 9,
    name: 'Apple Watch SE | GPS + Cellular | 40mm',
    description: 'The Apple Watch SE is a powerful smartwatch that is designed to keep you connected.',
    image: 'https://example.com/apple-watch-se.jpg',
    price: 249000,
  },
  {
    id: 10,
    name: 'Apple Watch Series 3 | GPS + Cellular | 38mm',
    description: 'The Apple Watch Series 3 is a powerful smartwatch that is designed to keep you connected.',
    image: 'https://example.com/apple-watch-series-3.jpg',
    price: 169000,
  },
  {
    id: 11,
    name: 'Apple TV 4K (32GB)',
    description: 'The Apple TV 4K is a powerful media player that allows you to stream your favorite movies and TV shows in 4K.',
    image: 'https://example.com/apple-tv-4k.jpg',
    price: 249000,
  },
  {
    id: 12,
    name: 'Apple TV HD (32GB)',
    description: 'The Apple TV HD is a powerful media player that allows you to stream your favorite movies and TV shows in HD.',
    image: 'https://example.com/apple-tv-hd.jpg',
    price: 149000,
  },
  {
    id: 13,
    name: 'Apple Magic Keyboard for iPad Pro 12.9-inch (5th generation) and iPad Air (4th generation) - US English',
    description: 'The Apple Magic Keyboard is a full-size keyboard with a trackpad that is designed to work with the iPad Pro and iPad Air.',
    image: 'https://example.com/apple-magic-keyboard.jpg',
    price: 349000,
  },
  {
    id: 14,
    name: 'Apple Pencil (2nd Generation)',
    description: 'The Apple Pencil is a stylus that is designed to work with the iPad.',
    image: 'https://example.com/apple-pencil-2nd-generation.jpg',
    price: 79000,
  },
  {
    id: 15,
    name: 'Apple Pencil (1st Generation)',
    description: 'The Apple Pencil is a stylus that is designed to work with the iPad.',
    image: 'https://example.com/apple-pencil-1st-generation.jpg',
    price: 59000,
  },
  {
    id: 16,
    name: 'Apple Lightning to USB Cable (1 m)',
    description: 'The Apple Lightning to USB Cable is a cable that allows you to connect your iPhone, iPad, or iPod to a computer or USB charger.',
    image: 'https://example.com/apple-lightning-to-usb-cable.jpg',
    price: 1900,
  },
  {
    id: 17,
    name: 'Apple USB-C to Lightning Cable (1 m)',
    description: 'The Apple USB-C to Lightning Cable is a cable that allows you to connect your iPhone, iPad, or iPod to a USB-C charger.',
    image: 'https://example.com/apple-usb-c-to-lightning-cable.jpg',
    price: 2900,
  },
  {
    id: 18,
    name: 'Apple USB-C to USB Adapter',
    description:'The Apple USB-C to USB Adapter is an adapter that allows you to connect a USB device to a USB-C port.',
    image: 'https://example.com/apple-usb-c-to-usb-adapter.jpg',
    price: 4900,
  },
  {
    id: 19,
    name: 'Apple USB-C Power Adapter (20W)',
    description: 'The Apple USB-C Power Adapter is a charger that allows you to charge your iPhone, iPad, or iPod quickly and efficiently.',
    image: 'https://example.com/apple-usb-c-power-adapter.jpg',
    price: 9900,
  },
  {
    id: 20,
    name: 'Apple USB-C Power Adapter (18W)',
    description: 'The Apple USB-C Power Adapter is a charger that allows you to charge your iPhone, iPad, or iPod quickly and efficiently.',
    image: 'https://example.com/apple-usb-c-power-adapter-18w.jpg',
    price: 8900,
  },
];

const ShopPage = () => {
  return (
    <div>
      <h1>Smart GADGETS</h1>
      <ProductList products={products} />
    </div>
  );
};
import React from 'eact';
import { Link } from 'eact-router-dom';

const LinkComponent = () => {
  return (
    <Link to="https://www.figma.com/design/VYVNVZ9BuqFBs0S20uvGRo/Shopping-Cart?node-id=0-1&t=WcyyDPDuDqnqqxoB-0">
    </Link>
  );
};

export default ShopPage;