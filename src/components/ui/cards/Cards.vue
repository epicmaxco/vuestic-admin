<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card-columns">
        <vuestic-card
          title-on-image
          overlay
          image="https://picsum.photos/300/200/?image=1043"
        >
          <template slot="title">
            Card with overlay and text on top of image
          </template>
          Running out of pages in your passport. Two trailer park girls go around the outside.
          <p class="pt-3 mb-0">
            <a class="pr-2" href="#">Secondary action</a>
          </p>
        </vuestic-card>

        <vuestic-card
          image="https://picsum.photos/300/200/?image=898"
        >
          <template slot="title">
            Random Heading H4
          </template>
          Running out of pages in your passport.
          <p class="pt-3 mb-0"><a href="#">Read full article</a></p>
        </vuestic-card>

        <vuestic-card
          image="https://picsum.photos/300/200/?image=1052"
          title-on-image
          overlay
        >
          <template slot="title">
            Random heading H4
          </template>
          Running out of pages in your passport.
        </vuestic-card>

        <vuestic-card
          image="https://picsum.photos/300/200/?image=885"
          theme="dark"
        >
          <p slot="title">Heading H4</p>
          The unique stripes of zebras make them one of the animals most familiar to people.
        </vuestic-card>

        <vuestic-card
          image="https://picsum.photos/300/200/?random"
        >
          Short one
          <p class="mb-0 mt-2">
            <a href="#" class="pr-2">Action 1</a>
            <a href="#">Action 2</a>
          </p>
        </vuestic-card>

        <vuestic-card
          stripe="warning"
          image="https://picsum.photos/300/200/?random"
        >
          <p class="mb-0">
            <a href="#" class="pr-2">Edit</a>
            <a href="#" class="pr-2">Set as default</a>
            <a href="#">Delete</a>
          </p>
        </vuestic-card>

        <vuestic-card
          image="https://picsum.photos/300/200/?image=997"
          theme="bright"
        >
          <template slot="title">
            Heading
          </template>
          The unique stripes of zebras make them one of the animals most familiar to people.
          <p class="pt-3 mb-0">
            <a class="pr-2" href="#">Edit</a>
            <a class="pr-2" href="#">Set as default</a>
            <a href="#">Delete</a>
          </p>
        </vuestic-card>

        <vuestic-card
          image="https://picsum.photos/300/200/?image=997"
          theme="bright"
        >
          Running out of pages in your passport
          <button class="btn btn-link">
            {{'buttons.button' | translate}}
          </button>
        </vuestic-card>

        <div class="card">
          <img class="card-img-top" src="" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title that wraps to a new line</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        <div class="card">
          <blockquote class="blockquote mb-0 card-body">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer class="blockquote-footer">
              <small class="text-muted">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
        <div class="card">
          <img class="card-img-top" src="https://picsum.photos/300/200/?random" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="card bg-primary text-white text-center p-3">
          <blockquote class="blockquote mb-0">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat.</p>
            <footer class="blockquote-footer">
              <small>
                Someone famous in <cite title="Source Title">Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import VuesticCard
    from '../../../vuestic-theme/vuestic-components/vuestic-card/VuesticCard'
  export default {
    name: 'cards',
    components: { VuesticCard },
  }
</script>

<style lang="scss">

</style>
