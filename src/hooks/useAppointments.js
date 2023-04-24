import axios from "axios";
import { useEffect, useState } from "react";

const useAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [propertyError, setpropertyError] = useState([]);
    useEffect(() => {//get all appointments
        axios.get('https://property-listing-server-side-github.vercel.app/appointments')
            .then(response => setAppointments(response.data))
            .catch(error => setpropertyError(error));
    }, []);
    return [ appointments, propertyError ];
};

export default useAppointments;