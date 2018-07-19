<template>
  <div
    style="left: 420px; top: 180px; height: calc(100% - 180px); width: calc(100% - 420px); position: absolute; overflow: auto"
  >
    <vuestic-card
      stripe="warning"
      title-on-image
      overlay
      style="width: 400px;"
      image="https://picsum.photos/300/200/?random"
    >
      <template slot="title">
        Card with overlay and text on top of image
      </template>
      Running out of pages in your passport. Two trailer park girls go around the outside.
    </vuestic-card>

    <br>

    <vuestic-card
      stripe="danger"
      style="width: 400px;"
      image="https://picsum.photos/300/200/?random"
      theme="bright"
    >
      <template slot="title">
        Card title that wraps to a new line
      </template>
      This is a longer card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
      <p slot="footer">Last updated 3 mins ago</p>
    </vuestic-card>

    <br>

    <vuestic-card
      stripe="primary"
      style="width: 400px;"
      image="https://picsum.photos/300/200/?random"
      theme="dark"
    >
      <p slot="title">Card title that wraps to a new line</p>
      This is a longer card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
      <p slot="footer">Last updated 3 mins ago</p>
    </vuestic-card>
  </div>
</template>

<script>
  import VuesticCard from './VuesticCard.vue'

  export default {
    components: { VuesticCard },
  }
</script>
