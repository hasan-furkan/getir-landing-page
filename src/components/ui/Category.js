import React from 'react'

export default function Category({ category: { title, id, image } }) {
    return (
        <a href="#" className="flex flex-col group items-center text-center gap-y-2 transition p-4 hover:bg-purple-50">
            <img src={image} alt={title} className="w-1/2 h-12 rounded border border-gray-200" />
            <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-color tracking-tight">{title}</span>
        </a>
    )
}
