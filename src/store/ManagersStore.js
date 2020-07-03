import { managersService } from '../services/ManagersService'

export const ManagersStore = {

    state:{

        managers_next_page_url: 'managers',
        managers:[]
    },

    mutations:{

        setNextPageUrl(state, url){
            state.managers_next_page_url = managersService.parseUrl(url)
        },

        extendsManagers(state, managers){
            state.managers.push(... managers)
        },

        setManagers(state, managers){
            state.managers = managers
        }
    },

    actions:{
        async getManagersByUrl(context){
        
            const response = await managersService.getManagersByUrl();

            context.commit('extendsShops', response.data.data)
            context.commit('setNextPageUrl',  response.data.next_page_url)
        }
    },

    getters:{

        getManagers(state){
            return state.managers
        },

        getManagersNextPageUrl(state){
            return state.managers_next_page_url
        }
    }
}