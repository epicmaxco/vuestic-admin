<template>
  <div class="vuestic-profile-card flex align--center">
    <div class="vuestic-profile-card__photo overflow--hidden">
      <img class="fill-height" :src="photoSource"/>
    </div>
    <div class="vuestic-profile-card__info text--center">
      <h5 class="vuestic-profile-card__info-name mt-3 mb-0">
        {{name}}
      </h5>
      <div class="vuestic-profile-card__info-location mt-2">
        <span class="icon glyphicon glyphicon-map-marker"></span>
        {{location}}
      </div>
    </div>
    <div class="vuestic-profile-card__social d-flex justify--center mt-4 pt-3">
      <a v-if="social.facebook" :href="'https://' + social.facebook"
         target="_blank">
        <va-icon icon="icon brandico brandico-facebook-rect mx-2"/>
      </a>
      <a v-if="social.instagram" :href="'https://' + social.instagram"
         target="_blank">
        <va-icon icon="icon brandico brandico-instagram mx-2"/>
      </a>
      <a v-if="social.twitter" :href="'https://' + social.twitter"
         target="_blank">
        <va-icon icon="icon brandico brandico-twitter mx-2"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'vuestic-profile-card',
  props: ['photoSource', 'name', 'location', 'social'],
}
</script>

<style lang="scss">
$vuestic-profile-card-width: 12.6875rem;
$vuestic-profile-card-photo-diameter: 9.375rem;

.vuestic-profile-card {
  margin: auto;
  width: $vuestic-profile-card-width;

  &__photo {
    margin: auto;
    height: $vuestic-profile-card-photo-diameter;
    width: $vuestic-profile-card-photo-diameter;
    border-radius: 50%;
    background-color: $lighter-gray;

    img {
      width: 100%;
    }
  }

  &__info {

    &-location {

      .icon {
        color: $lighter-gray;
        font-size: $font-size-larger;
      }

      &:hover {
        cursor: pointer;

        .icon {
          color: red;
        }
      }
    }
  }

  &__social {
    width: 100%;
    border-top: solid .125rem $light-gray;

    .icon {
      color: $gray;
      text-decoration: none;
      font-size: $font-size-h4;

      &:hover {
        cursor: pointer;
        color: darken($gray, 50%);
      }
    }
  }
}
</style>
