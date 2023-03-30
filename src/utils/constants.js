const apiKey = "AIzaSyDyjcL2v7LK2boZAn-sqJ8OdkkJuqtpRO8";

export const popularVideosApi =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  apiKey;

export const autoSuggestApi =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
