import React from 'react'
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/cart-slice';

export default function CartBag(props) {
    const { title, price, quantity, total, id } = props.item;

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(cartAction.addItemToCart({
            id, title, price
        }));
    }
    const handleDecrement = () => {
        dispatch(cartAction.removeItemFromCart(id))
    }

    return (
        <>
            <article className="flex items-start space-x-6 p-6 ring-1 ring-slate-100 rounded mt-2">
                <div className="min-w-0 relative flex-auto">
                    <h2 className="font-semibold text-slate-900 truncate pr-20">{title}</h2>
                    <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                    <div className="absolute top-0 right-0 flex items-center space-x-1">
                        <dt className="text-sky-500">
                        </dt>
                        <dd>
                            ${price}
                        </dd>
                        <dd className="px-1.5 ring-1 ring-slate-200 rounded bg-[#dc3545] text-white">
                            ${total}
                        </dd>
                    </div>
                    <div>
                        <dt className="sr-only">Rating</dt>
                        <dd className="px-1.5 ring-1 ring-slate-200 rounded">
                            x{quantity}
                        </dd>
                    </div>
                    <div className="absolute bottom-0 right-0 flex items-center space-x-1">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate-400">
                            <button onClick={handleDecrement} className='btn btn-danger text-[12px] py-0.5'>-</button>
                            <button onClick={handleIncrement} className='btn btn-danger text-[12px] py-0.5'>+</button>
                        </dd>
                    </div>
                    </dl>
                </div>
            </article>
        </>
    )
}