const { REACT_APP_APIKEY } = process.env

export default async function apiSearch(search) {
    console.log(search)
    const query = {
        client_id: REACT_APP_APIKEY,
        query: search || "Florida",
        orientation: "landscape",
        content_filter: "low",
        // color: "green"
    }


    let queryString = new URLSearchParams(query)
    return await (await fetch(`https://api.unsplash.com/search/photos/?${queryString}`)).json()
}