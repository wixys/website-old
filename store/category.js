import GowixCms from "@/services/GowixCms.js";

export const state = () => ({
    category: [],
    subcategory: {},
    articles: {}
})
export const mutations = {
    SET_CATEGORY(state, category) {
        state.category = category
    },
    /*SET_SUBCATEGORY(state, subcategory) {
        state.subcategory = subcategory
    }*/
}
export const actions = {
    fetchCategory({ commit }, params ) {
        return GowixCms.getCategory(params).then(response => {
            commit('SET_CATEGORY', response.data)
        })
    },
    /*fetchSubCategory({ commit }, slug) {
        return GowixCms.getSubCategory(slug).then(response => {
            commit('SET_SUBCATEGORY', response.data)
        })
    }*/
}