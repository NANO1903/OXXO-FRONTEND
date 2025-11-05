import axios from "axios";
import { cookies } from "next/headers";
import { API_URL, TOKEN_NAME } from "@/constants"

const CountPage = async  () => {
    const userCookies = cookies();
    const token = (await userCookies).get(TOKEN_NAME)?.value
    const countLocations = await axios.get(`${API_URL}/locations`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const cantidad = countLocations?.data?.length;

    return <div className="w-2/12"> {`Hay ${cantidad} tienda${cantidad > 1 ? "s" : ""}`} </div>;
};

export default CountPage;