import React from 'react';

const CartTableHeader = () => {
    return (
        <div className="hidden md:grid grid-cols-12 text-sm font-medium text-subtitle pb-4 border-b">
            <span className="col-span-1"></span>
            <span className="col-span-5">Product</span>
            <span className="col-span-2 text-center">Quantity</span>
            <span className="col-span-3 text-right">Total</span>
            <span className="col-span-1"></span>
        </div>
    );
};

export default CartTableHeader;
