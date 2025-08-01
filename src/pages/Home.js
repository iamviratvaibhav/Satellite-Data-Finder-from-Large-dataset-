import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/pages/Home.tsx
import { useEffect, useState } from "react";
import { fetchSatellites } from "../utils/api";
import SearchBar from "../Components/SearchBar";
import Filters from "../Components/Filter";
import SatelliteTable from '../Components/SatelliteTable';
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
const Home = () => {
    const [satellites, setSatellites] = useState([]);
    const [filters, setFilters] = useState({
        objectTypes: [],
        orbitCodes: [],
    });
    const [searchQuery, setSearchQuery] = useState('');
    const [selected, setSelected] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [resultCount, setResultCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 50;
    useEffect(() => {
        loadData();
    }, [filters, searchQuery]);
    const handleSelect = (item) => {
        const alreadySelected = selected.find((s) => s.noradCatId === item.noradCatId);
        if (alreadySelected) {
            setSelected(selected.filter((s) => s.noradCatId !== item.noradCatId));
        }
        else {
            if (selected.length >= 10) {
                // alert("You can select a maximum of 10 satellites.");
                toast.error('Please select 10 satellites at a time');
                return;
            }
            setSelected([...selected, item]);
        }
    };
    const handleProceed = () => {
        localStorage.setItem("selectedSatellites", JSON.stringify(selected));
        navigate("/selected");
    };
    const paginatedData = satellites.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
    const loadData = async () => {
        setLoading(true);
        setError('');
        try {
            const responseData = await fetchSatellites({
                objectTypes: filters.objectTypes,
            });
            const filteredData = responseData.filter((item) => {
                const search = searchQuery.trim().toLowerCase();
                const name = item.name?.toLowerCase() || "";
                const id = item.noradCatId?.toLowerCase() || "";
                const matchesSearch = name.includes(search) || id.includes(search);
                const satelliteOrbitCode = (item.orbitCode || "").replace(/[{}]/g, "").toUpperCase();
                const matchesOrbit = filters.orbitCodes.length === 0 ||
                    filters.orbitCodes.map((code) => code.toUpperCase()).includes(satelliteOrbitCode);
                const matchesType = filters.objectTypes.length === 0 || filters.objectTypes.includes(item.objectType);
                return matchesSearch && matchesOrbit && matchesType;
            });
            setResultCount(filteredData.length);
            setSatellites(filteredData);
            setCurrentPage(1);
        }
        catch (error) {
            setError("Failed to load satellite data.");
            setSatellites([]);
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("div", { className: "p-6 min-h-screen flex flex-col justify-center py-12 px-4 relative bg-gray-900 text-white", children: [_jsx("h1", { className: "text-3xl font-bold mb-2 text-center text-purple-500", children: "\uD83D\uDEF0\uFE0F Satellite Tracker" }), _jsx(SearchBar, { onSearch: setSearchQuery }), _jsx(Filters, { onApply: setFilters }), !loading && !error && (_jsxs("div", { className: "text-sm text-gray-700 mb-2", children: ["Results: ", resultCount, " satellite", resultCount !== 1 ? 's' : '', " found"] })), loading && ( //loading bar
            _jsxs("div", { className: "w-full my-4 fixed top-0 left-0 h-[70%] items-center justify-center", children: [_jsx("div", { className: "relative w-[50%] h-2 bg-gray-200 rounded overflow-hidden", children: _jsx("div", { className: "absolute top-0 left-0 w-full h-full animate-loading-bar bg-purple-500" }) }), _jsx("p", { className: "text-center text-purple-500 mt-2", children: "Loading satellites..." })] })), error && _jsx("div", { className: "text-center text-red-500 py-4", children: error }), !loading && !error &&
                _jsx(SatelliteTable, { data: paginatedData, selected: selected, onSelect: handleSelect }), _jsxs("div", { className: "mt-4 flex items-center gap-4", children: [_jsxs("span", { children: ["Selected: ", selected.length] }), _jsx("button", { className: "bg-purple-600 text-white px-4 py-2 rounded", onClick: handleProceed, children: "Proceed" }), _jsx(Toaster, {})] }), !loading && !error && resultCount > itemsPerPage && (_jsxs("div", { className: "flex justify-center items-center gap-4 mt-4", children: [_jsx("button", { className: "px-3 py-1 bg-purple-700 rounded disabled:opacity-50", onClick: () => setCurrentPage((p) => Math.max(p - 1, 1)), disabled: currentPage === 1, children: "Previous" }), _jsxs("span", { children: ["Page ", currentPage, " of ", Math.ceil(resultCount / itemsPerPage)] }), _jsx("button", { className: "px-3 py-1 bg-purple-800 rounded disabled:opacity-50", onClick: () => setCurrentPage((p) => Math.min(p + 1, Math.ceil(resultCount / itemsPerPage))), disabled: currentPage >= Math.ceil(resultCount / itemsPerPage), children: "Next" })] }))] }));
};
export default Home;
