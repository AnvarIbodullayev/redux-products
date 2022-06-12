import React from 'react'
import ProductItem from './ProductItem';

const PRODUCTS = [
    {
        id: 'p1',
        title: 'Iphone 13 Pro Max',
        price: 1250,
        description: 'this is wonderfull phone'
    },
    {
        id: 'p2',
        title: 'Samsung S21 Plus',
        price: 920,
        description: 'nice phone because i used it'
    }
]

export default function Product(props) {
    return (
        <>
            {
                PRODUCTS.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))
            }
        </>
    )
}