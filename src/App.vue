<template>
  <div id="app">
    <div id="nav">
      <template v-for="(route, index) in $router.options.routes">
        <span v-bind:key="'line_' + index" v-if="index !== 0"> | </span>
        <router-link v-bind:key="'link_' + index" :to="route.path">{{ route.name }}</router-link>
      </template>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
