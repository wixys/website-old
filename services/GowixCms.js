import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.apiUrl,
  withCredencials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  //-- Get category page
  getCategory(params) {
    if (!params.category) {
      //-- Category = Home
      //-- Get contents for home page
      if (params.lang === "es") {
        var home = "inicio";
      } else {
        var home = "home";
      }
      return apiClient.get(
        params.lang +
          "/simple/" +
          process.env.apiVersion +
          "/category/" +
          home +
          "/articles?platform=" +
          process.env.platform +
          "&apikey=" +
          process.env.gowixApiKey
      );
    } else {
      return apiClient.get(
        params.lang +
          "/simple/" +
          process.env.apiVersion +
          "/category/" +
          params.category +
          "/articles?platform=" +
          process.env.platform +
          "&apikey=" +
          process.env.gowixApiKey
      );
    }
  },
  getArticle(params) {
    return apiClient.get(
      params.lang +
        "/simple/" +
        process.env.apiVersion +
        "/category/" +
        params.category +
        "/item/" +
        params.article +
        "?platform=" +
        process.env.platform +
        "&apikey=" +
        process.env.gowixApiKey
    );
  },
  //-- Catalog
  getCatalog() {
    //console.log('https://backend.gowix.net/api/es/simple/v1/catalog?platform=atasun&apikey=b8f43bb54471b5a319bd697d5b457c0836173e8r')
    //-- To fix: params.lang+'/simple/'+process.env.apiVersion+'/catalog?platform='+process.env.platform+'&apikey='+process.env.gowixApiKey
    return apiClient.get(
      "https://backend.gowix.net/api/es/simple/v1/catalog?platform=atasun&apikey=b8f43bb54471b5a319bd697d5b457c0836173e8r"
    );
  },
  getProductsByCategory(params) {
    return apiClient.get(
      "https://backend.gowix.net/api/es/simple/v1/catalog/" +
        params.category +
        "/products?platform=atasun&apikey=b8f43bb54471b5a319bd697d5b457c0836173e8r"
    );
  },
  getItem(params) {
    //backend.gowix.net/api/es/simple/v1/catalog/material-sintetico/valla-o-revestimiento-de-madera-sintetica-neolack-liso-veteado-91?platform=atasun&apikey=b8f43bb54471b5a319bd697d5b457c0836173e8r
    https: return apiClient.get(
      "https://backend.gowix.net/api/es/simple/v1/catalog/" +
        params.category +
        "/" +
        params.slug +
        "?platform=atasun&apikey=b8f43bb54471b5a319bd697d5b457c0836173e8r"
    );
  }
};
