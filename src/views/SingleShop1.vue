<template>
  <div class="container">
      <div>
          <ul class="group-list">
              <li class="group-list-item">{{ shop.name }}</li>
          </ul>
      </div>
      <div v-for="(article, index) in articles" :key="index">
          <ul class="group-list">
              <li class="group-list-item">{{ article.name }}</li> <button @click="deleteArticle(article.id)" class="btn btn-danger">Delete</button>
              <li class="group-list-item">{{ article.price }}</li>
          </ul>
      </div>
      <div v-if="boolean">
        <div class="form-group">
            <label class="mt-3"><b>Article Name</b></label>
            <input type="text" v-model="article.name" class="form-control" placeholder="Name your article">
        </div>
        <div class="form-group">
            <label class="mt-3"><b>Article Price</b></label>
            <input type="text" v-model="article.price" class="form-control" placeholder="Your price">
        </div>
            <button @click="addArticle()" class="btn btn-primary">Add New Article</button>
            <button @click="hideForm()" class="btn btn-primary">Cancel</button>
      </div>
        <button v-if="!boolean" @click="showForm()" class="btn btn-primary">Add Article</button>
  </div>
</template>

<script>
import { shopsService } from '../services/ShopsService'
import { articlesService } from '../services/ArticlesService'
export default {
    data(){
        return{
            shop:{},
            boolean: false,
            article:{
                shop_id: this.$route.params.id
            },
            articles:[]
        }
    },

    methods:{
        showForm(){
            this.boolean = true
        },

        hideForm(){
            this.boolean = false
        },

        addArticle(){
            articlesService.addArticle(this.article)
        },

        deleteArticle(id){
            articlesService.removeById(id)
        }
    },

    created(){
        shopsService.getShop(this.$route.params.id).then(response => {
            this.shop = response.data
        })

        shopsService.getArticlesById(this.$route.params.id).then(response => {
            this.articles = response.data
        })
    }
}
</script>

<style>

</style>