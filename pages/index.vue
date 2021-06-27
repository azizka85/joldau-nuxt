<template>
  <main>
    <div class="title">
      <h5 class="text-primary">{{ $t('guide') }}</h5>
      &nbsp;
      <b-button variant="primary" size="sm" @click="refresh">
        <b-icon-arrow-clockwise />
      </b-button>
    </div>   
    <h6>{{ $tc('answers_count', answersTotal) }}</h6> 
    <template v-if="categoriesCount > 0">
      <div class="title underline">
        <h5 class="text-primary">{{ $t('categories') }}</h5>
      </div>
      <b-row cols="1" cols-sm="2" cols-md="2" cols-lg="4" cols-xl="4" class="mt-1 mb-1">
        <b-col v-for="category in categories" :key="category._id" class="mt-1 mb-1">
          <div class="card">
            <div class="card-title">
              <b-link class="card-title-content">
                {{ category.title }}
              </b-link>
              <div>
                <b-icon 
                  :icon="category.favorite ? 'heart-fill' : 'heart'" 
                  :class="{stroke: !category.favorite, fill: category.favorite}"
                />
              </div>
            </div>
            <p class="description">{{ category.description }}</p>
            <p class="info">{{ $tc('answers_count', category.answersCount) }}</p>
            <p class="date-time">
                {{ $t('created') }}: {{ $d(new Date(category.createdAt)) }}
              </p>
          </div>
        </b-col>
      </b-row>
    </template>
    <template v-if="answersCount > 0">
      <div class="title underline">
        <h5 class="text-primary">{{ $t('answers') }}</h5>
      </div>
      <b-row cols="1" cols-sm="2" cols-md="2" cols-lg="4" cols-xl="4" class="mt-1 mb-1">
        <b-col v-for="answer in answers" :key="answer._id" class="mt-1 mb-1">
          <div class="card">
            <div class="card-title">
              <b-link class="card-title-content">
                {{ answer.title }}
              </b-link>
              <div>
                <b-icon 
                  :icon="answer.favorite ? 'heart-fill' : 'heart'" 
                  :class="{stroke: !answer.favorite, fill: answer.favorite}"
                />
              </div>
            </div>
            <p class="date-time">
                {{ $t('created') }}: {{ $d(new Date(answer.createdAt)) }}
              </p>
          </div>
        </b-col>
      </b-row>
    </template>
  </main>
</template>

<script>
import { DEFAULT_TITLE } from '../data/globals'
import { BIcon, BIconArrowClockwise, BIconHeart, BIconHeartFill } from 'bootstrap-vue'

export default {
  layout: 'main',
  transition: 'fade',
  head() {
    return {
      title: this.title
    }
  },
  async asyncData({ $http, i18n, error }) {
    let res = {}        

    try {
      res = await $http.$get('/api/category/' + i18n.locale + '/')          
    } catch(err) {
      res.error = err
    }

    if(res.error) {
      error(res.error)
    } else {      
      return {
        answersTotal: res.data?.answersCount || 0,
        answers: res.data?.answers || [],
        categories: res.data?.categories || []
      }
    }
  },
  computed: {
    title() {
      return this.$t('guide') + ' - ' + DEFAULT_TITLE
    },
    answersCount() {
      return this.answers?.length || 0
    },
    categoriesCount() {
      return this.categories?.length || 0
    }
  },
  methods: {
    refresh() {
      this.$nuxt.refresh()
    }
  },
  components: {
    BIcon, BIconArrowClockwise, BIconHeart, BIconHeartFill
  }
}
</script>
