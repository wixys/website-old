import GowixCms from "@/services/GowixCms.js";

export const state = () => ({
  catalog: [],
  product: [],
  item: {}
});
export const mutations = {
  SET_PRODUCT_CATEGORIES(state, catalog) {
    state.catalog = catalog;
  },
  SET_PRODUCTS_BY_CATEGORY(state, product) {
    state.product = product;
  },
  SET_ITEM(state, item) {
    state.item = item;
  }
};
export const actions = {
  fetchCatalog({ commit }) {
    return GowixCms.getCatalog().then(response => {
      commit("SET_PRODUCT_CATEGORIES", response.data);
    });
  },
  fetchProductsByCategory({ commit }, params) {
    return GowixCms.getProductsByCategory(params).then(response => {
      commit("SET_PRODUCTS_BY_CATEGORY", response.data);
    });
  },
  fetchItem({ commit }, params) {
    return GowixCms.getItem(params).then(response => {
      commit("SET_ITEM", response.data);
    });
  }
};
