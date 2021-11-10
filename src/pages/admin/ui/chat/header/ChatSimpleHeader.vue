<template>
  <div class="chat__header chat__header--simple">
    <va-avatar size="34px" fontSize="1rem" color="warning" textColor="dark">
      {{ chatAdminName.charAt(0).toUpperCase() }}
    </va-avatar>
    <div class="ml-2">{{ chatAdminName }}</div>
  </div>
</template>

<script>
export default {
  name: 'chat-simple-header',
  data () {
    return {
      chatAdminName: 'Maria',
    }
  },
}
</script>
