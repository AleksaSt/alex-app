import { HttpService } from './HttpService'
import store from '../store'

class ShopsService extends HttpService {

    getShopsByUrl(){
        return this.axios.get(store.getters.getNextPageUrl)
    }

    addShops(shop){
        return this.axios.post('shops/create', shop)
    }

    getMyShops(id){
        return this.axios.get(`my-shops/${id}`)
    }

    search(term){
        return this.axios.get(`shops/search/${term}`)
    }

    getShop(id){
        return this.axios.get(`/shops/single/${id}`)
    }
}

export const shopsService = new ShopsService()