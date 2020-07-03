import { HttpService } from './HttpService'
import store from '../store'

class ManagersService extends HttpService {

    getManagersByUrl(){
        return this.axios.get(store.getters.getManagersNextPageUrl)
    }
}

export const managersService = new ManagersService()