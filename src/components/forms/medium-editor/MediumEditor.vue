<template>
  <div class="medium-editor">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'forms.mediumEditor.title' | translate">
          <div id="editor">
            <div class="typo-headers">
              <h1>Very Important Information H1</h1>
              <h2>Sections & Modal Names H2</h2>
              <h3>Articles & Block Headings H3</h3>
            </div>
            <div class="typo-articles">
              <p>
                The unique stripes of zebras make them one of the animals most familiar to people. They occur in a variety of habitats, such as grasslands, savannas,
                <a href="#">woodlands</a>, thorny scrublands, <a href="https://medium.com/epicmaxco">mountains</a>,
                and coastal hills. However, various anthropogenic factors have had a severe impact on zebra populations, in particular hunting for skins and habitat destruction. Grévy's zebra and the mountain highlighted text
              <p>
                lthough zebra species may have overlapping ranges, they do not interbreed. In captivity, plains zebras have been crossed with mountain zebras. The hybrid foals
                selected text lacked a dewlap and resembled their
              </p>
            </div>
          </div>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
  import MediumEditor from 'medium-editor'

  export default {
    name: 'medium-editor',

    data () {
      return {
        composerContent: '',
        editor: null
      }
    },

    mounted () {
      this.initEditor()
    },

    methods: {
      initEditor () {
        this.editor = new MediumEditor('#editor', {
          buttonLabels: 'fontawesome',
          autoLink: true,
          placeholder: {
            text: 'Type your text here'
          }
        })
        this.composerContent && this.editor.setContent(this.composerContent)
        this.editor.subscribe('editableInput', (input, editor) => this.updateComposerContent(input, editor.innerHTML))
      },

      updateComposerContent (input, innerHtml) {
        if (input.data !== this.atChar) {
          this.$emit('update:editorContent', innerHtml)
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../sass/_variables.scss';
  @import "../../../sass/mixins";
  @import "../../../../node_modules/bootstrap/scss/mixins/buttons";
  @import "../../../../node_modules/medium-editor/src/sass/medium-editor";


  $medium-editor-button-size: $btn-padding-y * 2 + $font-size-base * $btn-line-height;


  #editor {
    &:focus {
      outline: none;
    }
  }

  .medium-editor-toolbar {
    background-color: transparent;
    border-radius: $btn-border-radius;

    .medium-editor-toolbar-actions {
      border-radius: $btn-border-radius;
      box-shadow: $btn-box-shadow;
      overflow: hidden;
    }

    li {
      background-color: $brand-primary;
      overflow: hidden;
      button {
        @include theme-button-variant($white, $brand-primary, $btn-border, $btn-box-shadow);
        padding: $btn-padding-y $btn-group-button-padding-x;
        font-size: $font-size-base;
        line-height: $btn-line-height;
        height: $medium-editor-button-size;
        box-shadow: none;
        border-radius: 0;

        &.hover {
          background-color: lighten($brand-primary, 10%) !important;
          color: $white;
        }

        &.focus, &.medium-editor-button-active {
          background-color: darken($brand-primary, 15%);
          color: $white;
        }
      }
    }
  }

  .medium-editor-toolbar-form {
    background: $brand-primary;
    border-radius: $btn-border-radius;
    color: $white;
    overflow: hidden;

    .medium-editor-toolbar-input {
      background: $brand-primary;
      box-sizing: border-box;
      color: $white;
      height: $medium-editor-button-size;
      padding-left: 16px;
      width: 220px;

      &::-webkit-input-placeholder {
        color: rgba($white, .8);
      }
      &:-moz-placeholder { /* Firefox 18- */
        color: rgba($white, .8);
      }
      &::-moz-placeholder {  /* Firefox 19+ */
        color: rgba($white, .8);
      }
      &:-ms-input-placeholder {
        color: rgba($white, .8);
      }
    }

    a {
      color: $white;
      transform: translateY(2px);
    }

    .medium-editor-toolbar-close {
      margin-right: 16px;
    }
  }

  .medium-toolbar-arrow-under:after {
    border-color: $brand-primary transparent transparent transparent;
    top: $medium-editor-button-size;
  }

  .medium-toolbar-arrow-over:before {
    border-color: transparent transparent $brand-primary transparent;
  }

  .medium-editor-toolbar-anchor-preview {
    background: $brand-primary;
    border-radius: $btn-border-radius;
    padding: $btn-padding-y $btn-padding-x;
    font-size: $font-size-base;
    line-height: $btn-line-height;

    .medium-editor-toolbar-anchor-preview {
      margin: 0;
    }
  }

  .medium-editor-anchor-preview {
    a {
      color: $white;
      text-decoration: none;
    }
  }

</style>
