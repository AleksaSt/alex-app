<template>
  <div class="container">
      <h1 class="mt-3">Shops:</h1>
      <div v-for="(shop, index) in shops" :key="index">
          <ul class="list-group">
              <li class="list-group-item">{{shop.name}}</li>
          </ul>
      </div>
      <button v-if="nextPageUrl" @click="getAllShops()" class="btn btn-primary mt-3">
          <div v-if="!shops.length">
              Show All Shops
          </div>
          <div v-else>
              Load More Shops
          </div>
      </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

    computed:{
        ...mapGetters({
            nextPageUrl: 'getNextPageUrl',
            shops: 'getShops'
        })
    },

    methods:{
        ...mapActions({
            getShops: 'getShopsByUrl'
        }),

        getAllShops(){
            this.getShops()
        }
    }
}
</script>

<style>

</style>