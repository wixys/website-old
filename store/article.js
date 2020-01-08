import GowixCms from "@/services/GowixCms.js";

export const state = () => ({
    category: [],
    subcategory: {},
    article: [],
    articles: {}
})
export const mutations = {
    SET_ARTICLE(state, article) {
        state.article = article
    }
}
export const actions = {
    fetchArticle({ commit }, params) {
        return GowixCms.getArticle(params).then(response => {
            commit('SET_ARTICLE', response.data)
        })
    }
}