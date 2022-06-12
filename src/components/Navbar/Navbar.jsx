import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { uiAction } from '../../store/ui-slice';

export default function Navbar() {
    const dispath = useDispatch();
    const cartQuantity = useSelector((state) => state.cart.totalQuantity);

    const handleShowBag = () => {
       dispath(uiAction.toggle())
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">Redux/Toolkits</a>
                        <button onClick={handleShowBag} className="btn btn-outline-danger" type="submit">
                            <span className='mr-2'>My bag</span>
                            {
                                cartQuantity !== 0 && <span className="badge text-bg-dark">
                                                        {cartQuantity}
                                                      </span>
                            }
                        </button>
                </div>
            </nav>
        </div>
    )
}