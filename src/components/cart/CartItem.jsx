import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';

const CartItem = ({ item, handleQuantityChange, handleRemoveItem, handleCheckboxChange }) => {
    return (
        <React.Fragment>
            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-12 items-center py-4">
                <div className="col-span-1 flex justify-center">
                    <Checkbox
                        checked={item.selected}
                        onCheckedChange={() => handleCheckboxChange(item.id)}
                        className="w-5 h-5 rounded-sm data-[state=checked]:bg-yellow-500 data-[state=checked]:text-white data-[state=checked]:border-yellow-500 border-gray-300"
                    />
                </div>
                <div className="col-span-5 flex items-center gap-4">
                    <div className="relative w-20 h-20 shrink-0 rounded-md overflow-hidden border">
                        <Image
                            src={item.image}
                            alt={item.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                        />
                    </div>
                    <div className="flex flex-col">
                        <Link href={`/product/${item.id}`} className="font-medium text-title hover:text-primary transition-colors">
                            {item.name}
                        </Link>
                        <span className="text-sm text-subtitle">${item.price.toFixed(2)}</span>
                    </div>
                </div>
                <div className="col-span-2 flex justify-center">
                    <div className="flex items-center border rounded-md overflow-hidden">
                        <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 rounded-none border-0 border-r"
                            onClick={() => handleQuantityChange(item.id, "decrement")}
                        >
                            <Minus className="size-4 text-subtitle" />
                        </Button>
                        <span className="px-4 text-base font-medium">{item.quantity}</span>
                        <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 rounded-none border-0 border-l"
                            onClick={() => handleQuantityChange(item.id, "increment")}
                        >
                            <Plus className="size-4 text-subtitle" />
                        </Button>
                    </div>
                </div>
                <div className="col-span-3 text-right">
                    <span className="text-lg font-semibold text-title">
                        ${(item.price * item.quantity).toFixed(2)}
                    </span>
                </div>
                <div className="col-span-1 flex justify-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-subtitle hover:text-red-500 transition-colors"
                        onClick={() => handleRemoveItem(item.id)}
                    >
                        <Trash2 className="size-5" />
                    </Button>
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col gap-4 py-4">
                <div className="flex items-start gap-4">
                    <Checkbox
                        checked={item.selected}
                        onCheckedChange={() => handleCheckboxChange(item.id)}
                        className="w-5 h-5 mt-1 rounded-sm data-[state=checked]:bg-yellow-500 data-[state=checked]:text-white data-[state=checked]:border-yellow-500 border-gray-300"
                    />
                    <div className="relative w-24 h-24 shrink-0 rounded-md overflow-hidden border">
                        <Image
                            src={item.image}
                            alt={item.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                        />
                    </div>
                    <div className="flex flex-col flex-grow">
                        <Link href={`/product/${item.id}`} className="font-medium text-title hover:text-primary transition-colors mb-1">
                            {item.name}
                        </Link>
                        <span className="text-sm text-subtitle">Price: ${item.price.toFixed(2)}</span>
                        <span className="text-md font-semibold text-title mt-1">
                            Total: ${(item.price * item.quantity).toFixed(2)}
                        </span>
                    </div>
                </div>
                <div className="flex justify-between items-center pl-8">
                    <div className="flex items-center border rounded-md overflow-hidden">
                        <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 rounded-none border-0 border-r"
                            onClick={() => handleQuantityChange(item.id, "decrement")}
                        >
                            <Minus className="size-4 text-subtitle" />
                        </Button>
                        <span className="px-4 text-base font-medium">{item.quantity}</span>
                        <Button
                            variant="outline"
                            size="icon"
                            className="w-8 h-8 rounded-none border-0 border-l"
                            onClick={() => handleQuantityChange(item.id, "increment")}
                        >
                            <Plus className="size-4 text-subtitle" />
                        </Button>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-subtitle hover:text-red-500 transition-colors"
                        onClick={() => handleRemoveItem(item.id)}
                    >
                        <Trash2 className="size-5" />
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CartItem;
