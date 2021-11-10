<template>
  <svg class="chat__message-icon" width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4736 0.86411C15.7327 1.12564 15.7308 1.54774 15.4693 1.80691L8.27658 8.93474C8.01505 9.1939 7.59294 9.19199 7.33378 8.93046C7.07461 8.66894 7.07652 8.24683 7.33805 7.98767L14.5308 0.859839C14.7923 0.600671 15.2144 0.602584 15.4736 0.86411Z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4714 0.528636C12.7318 0.788986 12.7318 1.2111 12.4714 1.47145L5.13809 8.80478C4.87774 9.06513 4.45563 9.06513 4.19528 8.80478L0.861949 5.47145C0.6016 5.2111 0.6016 4.78899 0.861949 4.52864C1.1223 4.26829 1.54441 4.26829 1.80476 4.52864L4.66669 7.39057L11.5286 0.528636C11.789 0.268287 12.2111 0.268287 12.4714 0.528636Z"/>
  </svg>

</template>

<script>
export default {
  name: 'VaIconDoubleCheck',
  props: {
    color: {
      type: String,
      default: 'inherit',
    },
  },
}
</script>

<style lang="scss">
  .va-icon-double-check {
    display: inline-block;
    width: 24px;
    height: 24px;
  }

  .chat__message-icon {
    fill: var(--va-secondary);
    color: var(--va-secondary);
  }

  .chat__message-icon--viewed {
    fill: var(--va-dark-blue);
    color: var(--va-dark-blue);
  }
</style>
