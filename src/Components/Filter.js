import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Select from 'react-select';
import { useState, useEffect } from 'react';
const objectTypeOptions = [
    { value: 'ROCKET BODY', label: 'Rocket Body' },
    { value: 'DEBRIS', label: 'Debris' },
    { value: 'UNKNOWN', label: 'Unknown' },
    { value: 'PAYLOAD', label: 'Payload' },
];
const orbitCodeOptions = [
    'LEO', 'LEO1', 'LEO2', 'LEO3', 'LEO4', 'MEO', 'GEO', 'HEO', 'IGO', 'EGO',
    'NSO', 'GTO', 'GHO', 'HAO', 'MGO', 'LMO', 'UFO', 'ESO', 'UNKNOWN',
].map((code) => ({ value: code, label: code }));
const Filters = ({ onApply }) => {
    const [selectedObjectTypes, setSelectedObjectTypes] = useState([]);
    const [selectedOrbitCodes, setSelectedOrbitCodes] = useState([]);
    useEffect(() => {
        onApply({
            objectTypes: selectedObjectTypes.map((opt) => opt.value),
            orbitCodes: selectedOrbitCodes.map((opt) => opt.value),
        });
    }, [selectedObjectTypes, selectedOrbitCodes]);
    return (_jsxs("div", { className: "max-w-2xl mx-auto mt-6 space-y-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block mb-1 font-semibold", children: "Object Type" }), _jsx(Select, { options: objectTypeOptions, isMulti: true, value: selectedObjectTypes, onChange: (options) => setSelectedObjectTypes(options || []), placeholder: "Select object types (run without enter press)" })] }), _jsxs("div", { children: [_jsx("label", { className: "block mb-1 font-semibold", children: "Orbit Codes" }), _jsx(Select, { options: orbitCodeOptions, isMulti: true, value: selectedOrbitCodes, onChange: (options) => setSelectedOrbitCodes(options || []), placeholder: "Select orbit codes (run without enter press)" })] })] }));
};
export default Filters;
