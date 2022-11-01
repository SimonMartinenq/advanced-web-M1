<template>
  <div>
    <h1>Convesations</h1>
    <h2>{{$route.params.id}}</h2>
  </div>
</template>

<script>
export default {
    name:"ConversationShowPage",
    props:['id']
}
</script>

<style>

</style>