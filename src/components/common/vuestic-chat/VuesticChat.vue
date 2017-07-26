<template>
 <div class="vuestic-chat">
   <div class="chat-body">
     <div class="chat-message alien">
        Hello! So glad you liked my work. Do you want me to shoot you?
     </div>
     <div class="chat-message yours">
        Yeah, that would be cool. Maybe this Sunday at 3 pm?
     </div>
     <div class="chat-message alien">
        Sounds great! See you later!
     </div>
     <div class="chat-message yours">
        Should I bring a lightbox with mer?
     </div>
     <div class="chat-message alien">
        No, thanks. There is no need. Can we set up a meeting earlier?
     </div>
     <div class="chat-message yours">
        I'm working on Vuestic, so let's meet at 3pm. Thanks!
     </div>
   </div>
   <div class="chat-controls">
      <form role="form">
        <fieldset>
          <div class="form-group form-group-w-btn">
            <div class="input-group">
              <input type="text" required="required"/>
              <label class="control-label">Your message</label><i class="bar"></i>
            </div>
            <div class="btn btn-sm btn-primary">Send</div>
          </div>
        </fieldset>
      </form>
   </div>
 </div>
</template>

<script>
  export default {
    name: 'vuestic-chat',
    props: {

    },
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang='scss' scoped>
  @import '../../../sass/_variables.scss';

  $chat-body-min-height: 18.75rem;
  $chat-body-mb: 1.5rem;
  $chat-message-mb: 0.625rem;
  $chat-message-py: 0.66rem;
  $chat-message-px: 1.375rem;
  $chat-message-br: 0.875rem;

  .chat-body {
    min-height: $chat-body-min-height;
    display: flex;
    flex-direction: column;
    margin-bottom: $chat-body-mb;
  }

  .chat-message {
    padding: $chat-message-py $chat-message-px;
    margin-bottom: $chat-message-mb;
    border-radius: $chat-message-br;

    &:last-child {
      margin-bottom: 0;
    }

    &.alien {
      align-self: flex-start;
      border-top-left-radius: 0;
      background-color: $light-gray2;
    }

    &.yours {
      align-self: flex-end;
      border-top-right-radius: 0;
      background-color: $brand-primary;
    }
  }


</style>
