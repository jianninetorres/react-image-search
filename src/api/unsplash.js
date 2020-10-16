import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID WXs_6cr69c9zlqa9898oBS09ZWb0jXIUeGGtgaUo3BI",
  },
});
