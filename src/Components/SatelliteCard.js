import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import '../App.css';
const SatelliteCard = ({ satellite, isSelected, onSelect }) => {
    return (_jsxs(motion.div, { whileTap: { scale: 0.98 }, initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3 }, whileHover: { scale: 1.02 }, className: `rounded-xl p-5 border border-purple-100 dark:border-gray-700 shadow-md cursor-pointer transition-colors duration-300 
        ${isSelected ? 'border-highlight' : ''}
        ${isSelected
            ? 'bg-purple-100 dark:bg-purple-900'
            : 'bg-white dark:bg-gray-800'}
        `, onClick: onSelect, children: [_jsxs("div", { className: "flex justify-between items-center mb-3", children: [_jsx("h2", { className: "text-lg font-semibold text-gray-800 dark:text-white", children: satellite.name }), _jsx("input", { type: "checkbox", checked: isSelected, onChange: onSelect, onClick: (e) => e.stopPropagation(), className: "accent-purple-500 w-6 h-6 border-purple-700 dark:border-purple-500 focus:ring-purple-500 dark:focus:ring-purple-600 transition-colors duration-200" })] }), _jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300", children: [_jsxs("div", { children: [_jsx("span", { className: "font-medium", children: "NORAD ID:" }), " ", satellite.noradCatId] }), _jsxs("div", { children: [_jsx("span", { className: "font-medium", children: "Orbit:" }), " ", satellite.orbitCode] }), _jsxs("div", { children: [_jsx("span", { className: "font-medium", children: "Type:" }), " ", satellite.objectType] }), _jsxs("div", { children: [_jsx("span", { className: "font-medium", children: "Country:" }), " ", satellite.countryCode] }), _jsxs("div", { className: "col-span-2", children: [_jsx("span", { className: "font-medium", children: "Launch Date:" }), " ", satellite.launchDate] })] })] }));
};
export default SatelliteCard;
