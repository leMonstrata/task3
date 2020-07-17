<template>
  <div id="app">
    <TableContainer></TableContainer>
  </div>
</template>

<script>
import TableContainer from './components/TableContainer'

export default {
  name: 'App',
  components: {
    TableContainer,

  }
}
</script>

<style>
#app {
  width: 400px;
  margin: 200px auto;
}
</style>
