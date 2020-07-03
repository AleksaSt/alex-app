<template>
  <div class="container">
      <h2 class="mt-3">Your Shops:</h2>
      <div v-for="(shop, index) in shops" :key="index">
          <ul class="list-group">
              <li class="list-group-item">
                  <router-link :to="{name: 'SingleShop', params:{id: shop.id}}">{{ shop.name }}</router-link>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
import { shopsService } from '../services/ShopsService'
export default {
    data(){
        return{
            shops:[]
        }
    },

    created(){
        shopsService.getMyShops(localStorage.getItem('user_id')).then(response => {
            this.shops = response.data
        })
    }
}
</script>

<style>

</style>