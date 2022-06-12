import React from 'react'
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cart-slice';
import './ProductItem.css';

export default function ProductItem(props) {
    const dispatch = useDispatch();
    const { title, price, description, id } = props;

    const handleAddCart = () => {
        dispatch(
            cartAction.addItemToCart({ title, price, id })
        )
    }

    return (
        <>
            <article className="bg-[#fff] product-item flex items-start space-x-6 m-1 p-6 ring-1 ring-[#fff] rounded mt-2 w-[24%]">
                <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-slate-900 truncate pr-20">{title}</h2>
                    <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                    <div className="absolute top-0 right-0 flex items-center space-x-1 text-[#dc3545]">
                        <dd>
                            ${price}
                        </dd>
                    </div>
                    <div>
                        <dd className="flex items-center">
                        {description}
                        </dd>
                    </div>
                    <div className="absolute bottom-0 right-0 flex items-center space-x-1">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate-400">
                            <button onClick={handleAddCart} className='btn btn-primary text-[12px] py-0.5'>add to bag</button>
                        </dd>
                    </div>
                    </dl>
                </div>
            </article>
        </>
    )
}