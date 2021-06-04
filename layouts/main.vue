<template>
  <div>
    <DefaultSearchBar @showMenu="sidebarVisible = true" />
    <b-sidebar no-header backdrop shadow v-model="sidebarVisible">
      <DefaultMenuBar />
    </b-sidebar>
    <Nuxt />
  </div>
</template>

<script>
export default {
  extends: 'default',
  data: () => ({
    sidebarVisible: false
  })
}
</script>
