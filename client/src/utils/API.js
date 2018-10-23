import axios from "axios";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "eb132eba3b81463d826b2dfca8788e54&q=";

export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + query);
  },
  saveArticle: function(articleObject){
    return axios.post('/saveArticle', articleObject);
  },
  getSavedArticles: function(){
    return axios.get('/getSavedArticles');
  },
  deleteSavedArticle: function(id){
    return axios.delete('/deleteSavedArticle', {data: {articleId: id}})
  }

};
