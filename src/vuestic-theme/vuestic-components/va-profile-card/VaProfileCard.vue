<template>
  <div class="va-profile-card flex align--center">
    <div class="va-profile-card__photo overflow--hidden">
      <img class="fill-height" :src="photoSource"/>
    </div>
    <div class="va-profile-card__info text--center">
      <h5 class="va-profile-card__info-name mt-3 mb-0">
        {{name}}
      </h5>
      <div class="va-profile-card__info-location mt-2">
        <span class="icon glyphicon glyphicon-map-marker"></span>
        {{location}}
      </div>
    </div>
    <div class="va-profile-card__social d-flex justify--center mt-4 pt-3">
      <a v-if="social.facebook" :href="'https://' + social.facebook"
         target="_blank">
        <va-icon name="icon brandico brandico-facebook-rect mx-2"/>
      </a>
      <a v-if="social.instagram" :href="'https://' + social.instagram"
         target="_blank">
        <va-icon name="icon brandico brandico-instagram mx-2"/>
      </a>
      <a v-if="social.twitter" :href="'https://' + social.twitter"
         target="_blank">
        <va-icon name="icon brandico brandico-twitter mx-2"/>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'va-profile-card',
  props: ['photoSource', 'name', 'location', 'social'],
}
</script>

<style lang="scss">
$va-profile-card-width: 12.6875rem;
$va-profile-card-photo-diameter: 9.375rem;

.va-profile-card {
  margin: auto;
  width: $va-profile-card-width;

  &__photo {
    margin: auto;
    height: $va-profile-card-photo-diameter;
    width: $va-profile-card-photo-diameter;
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
