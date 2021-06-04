<template>
  <div class="auth-container">
    <b-card :title="title">
      <b-form>
        <b-form-group :label="$t('username')">
          <b-form-input type="text" :placeholder="$t('username')" required />
        </b-form-group>
        <b-form-group label="Email">
          <b-form-input type="email" placeholder="Email" required />
        </b-form-group>
        <b-form-group :label="$t('password')">
          <b-form-input type="password" :placeholder="$t('password')" required />
        </b-form-group>
        <b-form-group :label="$t('photo')">
          <b-form-input type="text" placeholder="http://" required />
        </b-form-group>
        <div style="text-align: right">
          <b-link 
            :to="localePath('signin')"
            class="text-decoration-none"
          >
            {{ $t('sign_in') }}
          </b-link>
        </div>
        <div style="text-align: right; margin: 0.5rem 0">
          <b-button variant="primary">{{ title }}</b-button>
          <b-button :to="localePath('/')">{{ $t('cancel') }}</b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script>
export default {
  layout: 'default',
  head() {
    return {
      title: this.title
    }
  },
  computed: {
    title() {
      return this.$t('sign_up')
    }
  }  
}
</script>
