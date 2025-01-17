import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getRegister } from "../api/register"

export const useRegister = () => {
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        phone_number: "",
        address: ""
    })
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCredentials((prev) => ({...prev, [name]: value}))
    }
    const usedRegister = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const response = await getRegister(credentials);
            console.log("response", response);
            localStorage.setItem("token", response.data.token);
            setTimeout(() => navigate("/"), 1000);
            setCredentials(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    return (
        {handleChange, usedRegister, loading, credentials}
    )
}
