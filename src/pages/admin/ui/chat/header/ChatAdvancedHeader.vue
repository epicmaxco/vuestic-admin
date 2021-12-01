
<template>
  <div class="chat__header justify--space-between">
    <div class="d-flex">
      <va-avatar size="34px" fontSize="1rem" color="warning" textColor="dark">
        {{ chatAdminName.charAt(0).toUpperCase() }}
      </va-avatar>
      <div class="ml-2">
        <div>{{ chatAdminName }}</div>
        <small class="text--small text--gray">Last seen {{ lastSeenHours }} hours ago</small>
      </div>
    </div>

    <div class="chat__header-icons d-flex">
      <va-icon class="mirrorY ml-2" name="fa-paperclip" color="primary" size="25px"/>
      <va-icon class="ml-2" name="phone" color="primary" size="25px"/>
      <va-icon class="ml-2" name="fa-ellipsis-h" color="primary" size="22px"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chat-simple-header',
  data () {
    return {
      chatAdminName: 'Maria',
      lastSeenHours: 2,
    }
  },
}
</script>

