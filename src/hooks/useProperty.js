import axios from "axios";
import { useEffect, useState } from "react";

const useProperty = (id) => {
    const [property, setproperty] = useState({});
    const [propertyLoading, setpropertyLoading] = useState(false);
    useEffect(() => {
        axios.post('https://property-listing-server-side-github.vercel.app/property', { id })
            .then(response => {
                setproperty(response.data);
                setpropertyLoading(false);
            })
            .catch(error => console.log(error));
    }, [id]);
    return [property, setproperty, propertyLoading, setpropertyLoading];
};

export default useProperty;