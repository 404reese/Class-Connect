// pages/shop.js

import React from 'react';
import styles from './shop.module.css';
import Image from 'next/image';

export const metadata = {
  title: 'Shop Page',
  description: 'CC shopping page, Class Connect shopping page',
};

const ProductCard = ({ image, name, price }) => {
  const whatsappLink = `https://wa.me/11234567890?text=I%20want%20to%20buy%20${encodeURIComponent(name)}.%20Is%20it%20available?`;

  return (
    <div className={styles.card}>
      <Image src={image} alt={name} width={200} height={200} className={styles.productImage} />
      <h3 className={styles.productName}>{name}</h3>
      <p className={styles.productPrice}>₹{price}</p>
      <div style={{ marginTop: '10px' }} />
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className={styles.enquireButton}>Enquire Now</button>
      </a>
    </div>
  );
};

const shop = () => {
  // Sample product data
  const products = [
    { image: '/drafter.jpeg', name: 'Mini Drafter', price: 300 },
    { image: '/set.jpeg', name: 'Drawing Instruments', price: 200 },
    { image: '/roller.jpeg', name: 'Roller', price: 50 },
  ];

  return (
    <div className={styles.page}>
      <div className={styles.titleContainer}>
        <h1 className={styles.middleTitle}>Shop</h1>
      </div>
      <div className={styles.titleContainer}>
        <h2>Stationary</h2>
        <p style={{ fontSize: '14px', color: '#666', paddingTop: '10px' }}> 
         <i>Note : Actual product may vary from image. Image is only for representation.</i> 
        </p>
      </div>
      <div className={styles.teamContainer}>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default shop;
