import { selector } from "recoil";
import { getOverview } from "../api/getUserOverview";

// Define a selector that fetches the asynchronous data
export const fetchDataSelector = selector({
    key: 'fetchData',
    get: async () => {
        const data = await getOverview();
        return data;
    },
});