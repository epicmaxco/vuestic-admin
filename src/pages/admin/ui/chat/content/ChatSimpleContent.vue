<template>
  <div class="chat__content pa-3 d-flex">
    <div>
      <div class="chat__content-date text--bold text--secondary text--uppercase text--small text--center pa-5">October 6, 2021</div>
      <div class="chat__content-messages">
        <div class="chat__message chat__message--outgoing">
          <div class="chat__message-text">Pure magic!! 🎩</div>
          <div class="chat__message-time">17:39</div>
        </div>
        <div class="chat__message chat__message--incoming">
          <div class="chat__message-text">How about vodka and pepsi?</div>
        </div>
        <div class="chat__message chat__message--incoming">
          <div class="chat__message-text">I have some cool ideas!</div>
        </div>
        <div class="chat__message chat__message--incoming">
          <div class="chat__message-text">Hi!</div>
          <div class="chat__message-time">03:49</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
$outgoingBackground: #246FFF;

.chat__content {
  width: 100%;
  flex-direction: column;
  justify-content: flex-end;

  &-date {
    width: 100%;
  }

  &-messages {
    display: flex;
    flex-direction: column;
  }
}

.chat__message {
  display: inline-block;

  &-text {
    padding: 0.8rem;
    margin: 0.25rem 0;
    border-radius: 0.25rem;
  }

  &-time {
    color: #767C88;
    font-size: 0.8rem;
  }

  &--outgoing {
    margin-left: auto;
    text-align: right;

    .chat__message-text {
      color: white;
      background: $outgoingBackground;
    }
  }

  &--incoming {
    margin-right: auto;

    .chat__message-text {
      background: white;
    }
  }
}
</style>
