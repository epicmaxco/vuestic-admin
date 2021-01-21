<template>
  <div class="home">
    <HelloWorld msg="aaa"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default {
  name: 'Home',
  components: {
    HelloWorld,
  }
}
</script>