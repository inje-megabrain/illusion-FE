import axios from "axios";

export const getPosts = async () => {
    try {
        const response = await axios.get("/api/boards/1/posts")
        console.log(response)
        return response
    } catch (error) {
        return(error)
    }
}
