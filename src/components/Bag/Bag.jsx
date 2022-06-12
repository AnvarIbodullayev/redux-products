import React from 'react'
import './Bag.css'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { uiAction } from '../../store/ui-slice';
import CartBag from '../Cart/CartBag';

export default function Bag(props) {
    const showBag = useSelector((state) => state.ui.bagIsVisible);
    const dispatch = useDispatch();
    
    const cartItems = useSelector((state) => state.cart.items)

    const handleHideBag = () => {
        dispatch(uiAction.toggle());
    };

    return (    
        <div className={showBag ? 'bag bag-show w-[30%] h-screen' : 'bag w-[30%] h-screen lg:w-full' }>
            <div className='w-full text-right'>
                <button className='m-4' onClick={handleHideBag}>
                    <AiOutlineCloseCircle className='text-[25px]' />
                </button>
            </div>
           <div className='p-4'>
                <h2 className='text-[25px]'>Shopping carts:</h2>
                {
                    cartItems.map((item) => (
                        <CartBag
                            key={item.id}
                            item={{
                                id: item.id,
                                title: item.name,
                                price: item.price,
                                quantity: item.quantity,
                                total: item.totalPrice
                            }}
                        />
                    ))
                }
           </div>
        </div>
    )
}