export const exerciseOptions = {
    method: 'GET',
    headers: {
       'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    },
  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f11f1e334dmsh091250a3734af51p1de40bjsn45e18df2889f',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    },
  };
  
 
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };