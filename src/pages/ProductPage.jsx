import React from 'react'
import Product from '../components/Product'

export default function ProductPage() {

    const data = [
        {
            id: 1,
            name: "양념치킨소스",
            price: 3980,
        },
        {
            id:2,
            name: "바나나",
            price: 3000,
        }
    ]


    return (
        <div>
            {data.map((d) =>
                <Product
                    key={d.id}
                    name={d.name}
                    price={d.price}
                    url={d.url}
                    alt={d.alt}
                />
            )}
        </div>
    )
}
