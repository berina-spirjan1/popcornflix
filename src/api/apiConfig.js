const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '7a107d136d3681f2a328d0a76391cb45',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;
