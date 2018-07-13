<template>
    <div id="app">
        <w-header></w-header>
        <w-nav></w-nav>
        <router-view/>
    </div>
</template>

<script>
import Header from '@/components/header/header';
import Nav from '@/components/nav/nav';
export default {
    name: 'App',
    components: {
        WHeader: Header,
        WNav: Nav
    }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
