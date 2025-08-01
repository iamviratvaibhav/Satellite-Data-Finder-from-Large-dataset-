import axios from 'axios';
export const fetchSatellites = async (params) => {
    const query = {};
    if (params?.objectTypes?.length) {
        query.objectTypes = params.objectTypes.join(',');
    }
    query.attributes = 'name,noradCatId,orbitCode,objectType,countryCode,launchDate';
    const queryString = new URLSearchParams(query).toString();
    const response = await axios.get(`https://backend.digantara.dev/v1/satellites?${queryString}`);
    return response.data.data;
};
