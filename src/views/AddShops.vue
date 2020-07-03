<template>
  <div class="container">
      <div v-for="(error, index) in errors" :key="index" class="alert alert-danger mt-3">
          {{ error[0]}}
      </div>
        <div class="form-group">
          <label class="mt-3"><b>Create Your Shop</b></label>
          <input type="text" v-model="shop.name" class="form-control" placeholder="Name your shop">
        </div>
      <button @click="addShop()" class="btn btn-primary">Create</button>
  </div>
</template>

<script>
import { shopsService } from '../services/ShopsService'
export default {

    data(){
        return{
            shop:{
                user_id: localStorage.getItem('user_id')
            },
            errors:[]
        }
    },

    methods:{
        addShop(){
            shopsService.addShops(this.shop).then(() => {
                this.$router.push({name: 'Shops'})
            }).catch(error => {
                this.errors = error.response.data.errors
            })
        }
    }
}
</script>

<style>

</style>