import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
const SelectedPage = () => {
    const [selected, setSelected] = useState([]);
    useEffect(() => {
        const stored = localStorage.getItem("selectedSatellites");
        if (stored) {
            setSelected(JSON.parse(stored));
        }
    }, []);
    return (_jsxs("div", { className: "p-6", children: [_jsx("h2", { className: "text-xl font-bold mb-4", children: "Selected Satellites" }), _jsx("ul", { className: "space-y-2", children: selected.map((item) => (_jsxs("li", { className: "border p-2 rounded", children: [item.name, " (NORAD ID: ", item.noradCatId, ")"] }, item.noradCatId))) })] }));
};
export default SelectedPage;
