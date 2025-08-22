import React from 'react';
import Link from 'next/link'

const BreadCrumb = ({ items = [] }) => {
    return (
        <div className='breadCrumbContainer h-10 w-fit bg-gray-200 rounded-4xl py-8 px-4 my-8'>
            <nav className="breadCrumbNav h-full flex items-center justify-center text-gray-600 text-sm md:text-md" aria-label="Breadcrumb">
                {items.map((item, idx) => (
                    <span key={item.href || item.label} className="flex items-center">
                        {idx > 0 && <span className="mx-6"> {''} </span>}
                        {item.href ? (
                            <Link href={item.href} className="hover:text-gray-800 font-medium">{item.label}</Link>
                        ) : (
                            <span className="w-fit my-1 py-2 px-3 rounded-3xl bg-gray-900 font-semibold text-gray-50">{item.label}</span>
                        )}
                    </span>
                ))}
            </nav>
        </div>
    );
};

export default BreadCrumb;