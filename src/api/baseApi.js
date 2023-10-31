import axios from "axios";

const baseAPI = axios.create({
    baseURL: "https://youtube.googleapis.com/youtube/v3/",
    params: {

        // cristianoanirudh26@gmail.com
        // key: "AIzaSyAmhdOORZBcNEQXXXBarhfhvE5n9KwWl0U"

        // anirudhsinghh26@gmail.com
        key: "AIzaSyD8foCMuMW4U6Xc7xD4L9H8AKt0TJxk-WY"
    },
    headers: {
        Accept: 'application/json',
    },
})
export default baseAPI