import axios from "axios";
export const getMe = async () => {
    try {
        const response = await axios.get('https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/me');
        console.log(response.data.result);
        return response.data.result
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}