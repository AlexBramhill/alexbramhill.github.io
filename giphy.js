const fetchUrl =
  "https://api.giphy.com/v1/gifs/trending?api_key=P6BsQuc880H6oOy4f3u10E1i1xIHFFQm&limit=10&rating=g";

const fetchMemes = () => {
  return fetch(fetchUrl)
    .then((response) => response.json())
    .then((json) => {
      json.data
        .map((gif) => gif.images.fixed_height.url)
        .forEach((url) => {
          let img = document.createElement("img");
          img.src = url;
          document.getElementById("dreams").appendChild(img);
        });
    });
};

fetchMemes();
