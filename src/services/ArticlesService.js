import { HttpService } from './HttpService'

class ArticlesService extends HttpService {

    addArticle(article){
        return this.axios.post('/shops/articles/create', article)
    }

    getArticlesById(id){
        return this.axios.get(`/shops/articles/${id}`)
    }

    removeById(id){
        return this.axios.delete(`/shops/articles/delete/${id}`)
    }
}

export const articlesService = new ArticlesService()






