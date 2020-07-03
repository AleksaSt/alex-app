<template>
  <div class="container">
      <h1 class="mt-3">Managers:</h1>
      <div v-for="(manager, index) in managers" :key="index">
          <ul class="list-group">
              <li class="list-group-item">{{manager.name}}</li>
          </ul>
      </div>
      <button v-if="nextPageUrl" @click="getAllManagers()" class="btn btn-primary mt-3">
          <div v-if="!managers.length">
              Show All Managers
          </div>
          <div v-else>
              Load More Managers
          </div>
      </button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

    computed:{
        ...mapGetters({
            nextPageUrl: 'getManagersNextPageUrl',
            managers: 'getManagers'
        })
    },

    methods:{
        ...mapActions({
            getManagers: 'getManagersByUrl'
        }),

        getAllManagers(){
            this.getManagers()
        }
    }
}
</script>

<style>

</style>