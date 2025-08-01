import { motion } from 'framer-motion';
import '../App.css';
type Satellite = {
  name: string;
  noradCatId: string;
  orbitCode: string;
  objectType: string;
  countryCode: string;
  launchDate: string;
};

type Props = {
  satellite: Satellite;
  isSelected: boolean;
  onSelect: () => void;
};

const SatelliteCard = ({ satellite, isSelected, onSelect }: Props) => {
  return (
    <motion.div  
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}

      className={`rounded-xl p-5 border border-purple-100 dark:border-gray-700 shadow-md cursor-pointer transition-colors duration-300 
        ${isSelected ? 'border-highlight' : ''}
        ${isSelected
          ? 'bg-purple-100 dark:bg-purple-900'
          : 'bg-white dark:bg-gray-800'}
        `}
      onClick={onSelect}
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{satellite.name}</h2>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onSelect}
          onClick={(e) => e.stopPropagation()}
      
          className="accent-purple-500 w-6 h-6 border-purple-700 dark:border-purple-500 focus:ring-purple-500 dark:focus:ring-purple-600 transition-colors duration-200"
        />
      </div>

      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-300">
        <div><span className="font-medium">NORAD ID:</span> {satellite.noradCatId}</div>
        <div><span className="font-medium">Orbit:</span> {satellite.orbitCode}</div>
        <div><span className="font-medium">Type:</span> {satellite.objectType}</div>
        <div><span className="font-medium">Country:</span> {satellite.countryCode}</div>
        <div className="col-span-2"><span className="font-medium">Launch Date:</span> {satellite.launchDate}</div>
      </div>
    </motion.div>
  );
};

export default SatelliteCard;
