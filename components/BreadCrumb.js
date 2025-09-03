import React from 'react';

const BreadCrumb = ({ items = [] }) => {
    return (
        <div className='breadCrumbContainer h-10 w-fit bg-gray-200 rounded-4xl py-8 px-4 my-8'>
            <nav className="breadCrumbNav h-full flex items-center justify-center text-gray-600 text-sm md:text-md" aria-label="Breadcrumb">
                {items.map((item, idx) => (
                    <span key={item.href || item.label} className="flex items-center h-12">
                        {idx > 0 && <span className="mx-6"> {''} </span>}
                        {item.href ? (
                            <a href={item.href} className="hover:text-gray-800 font-medium">{item.label}</a>
                        ) : (
                            <span className="w-fit h-fit  my-1 py-1.5 md:py-3 px-3 rounded-3xl bg-gray-900 font-semibold text-gray-50">{item.label}</span>
                        )}
                    </span>
                ))}
            </nav>
        </div>
    );
};

export default BreadCrumb;