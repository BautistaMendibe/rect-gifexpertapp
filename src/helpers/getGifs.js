export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?limit=10&api_key=ooudvyXp3y60dbJQdwr9JP5uRfv4b2wj&q=${encodeURI(category)}`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}