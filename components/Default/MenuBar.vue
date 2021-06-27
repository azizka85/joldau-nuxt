<template>
  <div class="menu">
    <div class="menu-profile">
      <b-link :to="localePath('settings')">
        <b-avatar variant="light" size="lg" class="menu-avatar" />
      </b-link>
      <b-link :to="localePath('signin')" class="menu-profile-item">{{ $t('signin') }}</b-link>
    </div>
    <div class="menu-items">
      <b-list-group>
        <b-list-group-item>
          <img 
            class="menu-item-icon" 
            :src="'/images/locale/' + $i18n.locale + '.svg'" 
            :alt="$i18n.locale" 
          >
          &nbsp;
          <b-dropdown :text="$i18n.localeProperties.name" variant="light">
            <b-dropdown-item 
              v-for="locale in $i18n.locales" 
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
            >
              <img 
                class="menu-item-icon" 
                :src="'/images/locale/' + locale.code + '.svg'" 
                :alt="locale.code" 
              >
              &nbsp;
              {{ locale.name }}
            </b-dropdown-item>            
          </b-dropdown>
        </b-list-group-item>
        <b-list-group-item :to="localePath('/')">
          <b-icon-search class="menu-item-icon" />
          &nbsp;
          {{ $t('seacrh_answers') }}
        </b-list-group-item>
        <b-list-group-item :to="localePath('favorite')">
          <b-icon-heart class="menu-item-icon" />
          &nbsp;
          {{ $t('favorite') }}
        </b-list-group-item>
        <b-list-group-item :to="localePath('settings')">
          <b-icon-gear class="menu-item-icon" />
          &nbsp;
          {{ $t('settings') }}
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import { BIconSearch, BIconHeart, BIconGear } from 'bootstrap-vue'

export default {
  components: {
    BIconSearch, BIconHeart, BIconGear
  }
}
</script>
