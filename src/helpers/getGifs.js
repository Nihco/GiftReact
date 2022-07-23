export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=jmOim51zwVCUWc8EQwnA2ZH8EHvRXeDh&q=${category}&limit=10`
    const resp = await fetch(url);
    const {data}=await resp.json()


    return data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
}
