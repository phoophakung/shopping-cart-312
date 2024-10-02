import React from 'react';

const products = [
  { id: 1, name: 'Diluc Keychain', price: 455, image: 'https://www.luminousmerch.com/cdn/shop/products/Diluc_8aa79ccb-2a94-4bdc-bfe7-f85b1e625815_590x.jpg?v=1637537177' },
  { id: 2, name: 'Ningguang Keychain', price: 455, image: 'https://www.luminousmerch.com/cdn/shop/products/Ningguang_3daa2680-ccae-4e02-ba40-b2e1631890e9_590x.jpg?v=1637537179' },
  { id: 3, name: 'Venti Keychain', price: 455, image: 'https://www.luminousmerch.com/cdn/shop/products/Venti_7f1fb9b0-d1af-4ec8-b837-bb55d489c4a2_590x.jpg?v=1637537296' },
  { id: 4, name: 'Xiangling Keychain', price: 455, image: 'https://www.luminousmerch.com/cdn/shop/products/Xiangling_08748ed7-13a7-4291-896f-65b36e83cd1b_590x.jpg?v=1637537296' },
  { id: 5, name: 'Barbara Keychain', price: 455, image: 'https://www.luminousmerch.com/cdn/shop/products/Barbara_1_48e6b801-de3c-4134-b570-c9534fafac77_590x.jpg?v=1637537296' },
  { id: 6, name: 'Beidou Keychain', price: 455, image: 'https://www.luminousmerch.com/cdn/shop/products/Beidou_1_24185173-e8fe-4a6b-ac5a-850ad3daf1ef_590x.jpg?v=1637537296' },
  { id: 7, name: 'Kaeya Keychain', price: 455, image: 'https://www.luminousmerch.com/cdn/shop/products/Kaeya_1_44c72d5a-4e68-49a7-a48b-c3b22f2a39ca_590x.jpg?v=1637537296' },
  { id: 8, name: 'Klee Keychain', price: 455, image: 'https://www.luminousmerch.com/cdn/shop/products/Klee_1_d5090408-03cb-41ee-b9e4-11a79cbd54ba_590x.jpg?v=1637537296' },
  { id: 9, name: 'QiQi Keychain', price: 455, image: 'https://www.luminousmerch.com/cdn/shop/products/Qiqi_1_72eb89a1-deff-4240-9eec-e45d0c617869_590x.jpg?v=1637537263' },
  { id: 9, name: 'Childe Standees', price: 490, image: 'https://www.luminousmerch.com/cdn/shop/products/O1CN01C0kBE11v7Ibf2pcKE__2208460416125_1024x1024_469a7c48-e583-4597-bcd6-e51bf5bb2aaf_590x.jpg?v=1632114552' },
  { id: 9, name: 'Ganyu Standees', price: 490, image: 'https://www.luminousmerch.com/cdn/shop/products/O1CN01ongZOg1v7IbZ0c1Hz__2208460416125_1024x1024_2139b132-8240-485b-aacd-7e778e8813da_590x.jpg?v=1632114552' },
  { id: 10, name: 'Box set Keychain', price: 3500, image: 'https://www.luminousmerch.com/cdn/shop/products/MiniGroup_10c509e8-1b01-4cf3-9700-787388834cb1_590x.jpg?v=1637536880' }
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h3 className="text-center">Genshi Impact Keychain & Standees</h3>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4" style={{ borderRadius: '10px', overflow: 'hidden' }}>
              {product.image ? (
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="card-img-top" 
                  style={{ borderRadius: '300px', height: '300px', width: '100%', objectFit: 'contain' }} 
                />
              ) : (
                <div className="placeholder-image" style={{ height: '200px', width: '100%', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px' }}>
                  <span>No Image Available</span>
                </div>
              )}
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price} บาท</p>
                <button className="btn btn-primary" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
