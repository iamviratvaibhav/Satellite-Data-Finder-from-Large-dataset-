import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import SatelliteCard from './SatelliteCard';
const sortKeys = ['name', 'noradCatId', 'orbitCode', 'objectType', 'countryCode', 'launchDate'];
const SatelliteTable = ({ data, selected = [], onSelect = () => { }, }) => {
    const [sortKey, setSortKey] = useState('name');
    const [sortAsc, setSortAsc] = useState(true);
    const sortedData = [...data].sort((a, b) => {
        const valA = a[sortKey] ?? '';
        const valB = b[sortKey] ?? '';
        return sortAsc
            ? String(valA).localeCompare(String(valB))
            : String(valB).localeCompare(String(valA));
    });
    const handleSort = (key) => {
        if (sortKey === key) {
            setSortAsc(!sortAsc);
        }
        else {
            setSortKey(key);
            setSortAsc(true);
        }
    };
    return (_jsxs("div", { className: "max-w-7xl mx-auto mt-8 px-4", children: [_jsx("div", { className: "flex flex-wrap gap-3 mb-6", children: sortKeys.map((key) => (_jsxs("button", { onClick: () => handleSort(key), className: `px-3 py-1 rounded-md text-sm font-medium transition
              ${sortKey === key
                        ? 'bg-purple-800 text-white'
                        : 'bg-purple-400 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`, children: [key.charAt(0).toUpperCase() + key.slice(1), sortKey === key && (sortAsc ? ' ↑' : ' ↓')] }, key))) }), sortedData.length === 0 ? (_jsx("div", { className: "text-center py-10 text-gray-500 dark:text-gray-400", children: "No satellite data found." })) : (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6", children: sortedData.map((sat) => (_jsx(SatelliteCard, { satellite: sat, isSelected: selected.some((s) => s.noradCatId === sat.noradCatId), onSelect: () => onSelect(sat) }, sat.noradCatId))) }))] }));
};
export default SatelliteTable;
