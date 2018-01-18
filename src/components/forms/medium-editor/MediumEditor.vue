<template>
  <div class="medium-editor">
    <div class="row">
      <div class="col-md-12">
        <vuestic-widget :headerText="'forms.mediumEditor.title' | translate">
          <div id="editor">
            <h1>Girl, no you don’t</h1>

            <p>
              <i>Every time a straight girl tells me “I wish I was a lesbian”, I want to light myself on fire.</i>
            </p>

            <p>
              Picture it. Walk with me for a second.
            </p>


            <p>
              You enter into your favorite local bar looking <b>good</b> as hell, but you know the only heads you want to turn — spicy & stylish alpha bitches — are heavily
              fixated on the D. The hot girl talks to you, but she only wants to be your best friend. Her nonthreatening and attentive best friend. Receiver of sexy
              selfies, listener of stories. Meanwhile, you attract unwanted attention from straight men, pudgy and greasy moths to your emotionally distant flame.
            </p>

            <h3>
              The only place you can go out and feel desired is a <i>lesbian</i> party. There is a reason lesbian bars no longer exist. Women aren’t taught to approach each
              other. We’re taught to cross our arms and judge. You worry about the shape of your eyebrows now? The stage of your roots? You haven’t felt fully judged
              until you’ve been in a room full of scowling women who want to fuck each other.
            </h3>

            <p>
              For years, your friends, family members, and medical professionals will doubt your continued homosexual confessions. They will tell you that you “haven’t
              met the right man.” Sex with women is fine. That’s allowed. You can be “experimental,” a titillating object of the male gaze. You can be fluid. But you
              want to partner with a woman? No no. You must be mistaken. You tend to believe them, because you’ve been conditioned to disbelieve yourself, to instead
              defer to the voices of others.
            </p>

            <p>
              You will experience years of confusion about your sexuality, because you haven’t been taught to prioritize your own sexual desire. None of your female
              friends orgasm anyway. And if they do, it’s definitely not from penetration. Everyone’s a little in love with their best friend, right? Maybe you just
              haven’t met the right man.
            </p>

            <p>
              The word “crazy” continues to come up whenever you discuss your love life, because mainstream society still associates lesbian love with mental
              instability. If you’re femme-presenting, you will hear wildly homophobic statements in your presence. You will hear people opine about single brothers,
              cousins, uncles who are “obviously gay,” which doesn’t bother you. But then you’ll hear them mention their unhinged friend, about whom they express a
              performative concern, tinged with excitement: “She went to rehab and then she dated a woman…. That’s just Crazy Carrie for you!”
            </p>

            <p>
              A family member to tell you that your your “alarming lifestyle” has required them to seek therapy. Your mom will tell you that she “supports you no
              matter what” but that it would be “much easier for everyone if you dated a man.” Your love life will become a burden, something that frightens people.
              You will go to the Deep South for the holidays and your Grandmother will quite literally scream when you confirm her suspicions that you do, in fact,
              have a girlfriend...
            </p>

            <p>
              Read full article on <a href="https://medium.com/@dorn.anna/girl-no-you-dont-2e21e826c62c">Medium</a>
            </p>
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
          toolbar: {
            buttons: [
              'bold',
              'italic',
              'underline',
              'anchor',
              'h1',
              'h2',
              'h3'
            ]
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
    background-color: $brand-primary;
    border-radius: $btn-border-radius;
    max-width: 80%;

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
    max-width: 50%;
    a {
      color: $white;
      text-decoration: none;
    }
  }

</style>
