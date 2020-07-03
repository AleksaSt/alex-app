<template>
  <div class="container">
    <h3 class="mt-3">Your Shop:</h3>
      <ul class="group-list">
        <li class="group-list-item">
          {{ shop.name }}
        </li>
      </ul>
      <div v-for="(article,index) in articles" :key="index">
          <ul class="group-list">
        <li class="group-list-item">
          {{ article.price }}
          {{ article.name }} <button @click="deleteArticle(article.id)" class="btn btn-danger">Delete</button>
        </li>
          </ul>
      </div>
      <div v-if="boolean">
        <div class="form-group">
          <label><b>Article Name</b></label>
          <input type="text" class="form-control" v-model="article.name" placeholder="Article name">
        </div>
        <div class="form-group">
          <label><b>Article Price</b></label>
          <input type="text" class="form-control" v-model="article.price" placeholder="Article price">
        </div>
        <button @click="addNewArticle" class="btn btn-primary">Add Article</button>
        <button @click="hideForm()" class="btn btn-warning ml-3">Cancel</button>
      </div>
      <button v-if="!boolean" @click="showForm()" class="btn btn-primary">Add New Article</button>
  </div>
</template>

<script>
import { shopsService } from '../services/ShopsService'
import { articlesService } from '../services/ArticlesService'
export default {
  data(){
    return{
      boolean: false,
      shop:{},
      article: {
        shop_id: this.$route.params.id,
        
      },
      articles:[]
    }
  },

  methods:{
    addNewArticle(){
      articlesService.addArticle(this.article)
    },

    showForm(){
      this.boolean = true
    },

    hideForm(){
      this.boolean = false
    },

    deleteArticle(id){
      articlesService.removeById(id)
    }
  },

  created(){
    shopsService.getShop(this.$route.params.id).then((response) => {
      this.shop = response.data
      articlesService.getArticlesById(this.$route.params.id).then(response => {
        this.articles = response.data
      })
    })
  }
}
</script>

<style>

</style>