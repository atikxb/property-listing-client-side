import axios from "axios";
import { useEffect, useState } from "react";

const useProperties = () => {
    const [properties, setproperties] = useState([]);
    const [propertyError, setpropertyError] = useState([]);
    useEffect(() => {//get all properties
        axios.get('https://property-listing-server-side-github.vercel.app/properties')
            .then(response => setproperties(response.data))
            .catch(error => setpropertyError(error));
    }, []);
    return [ properties, setproperties, propertyError ];
};

export default useProperties;