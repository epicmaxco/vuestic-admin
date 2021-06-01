<template>
  <div class="medium-editor">
    <div class="row">
      <div class="flex md12">
        <va-card>
          <va-card-title>{{ $t('forms.mediumEditor.title') }}</va-card-title>
          <va-card-content class="d-flex flex-center">
            <va-medium-editor
              @initialized="handleEditorInitialization"
            >
              <h1>Select Text To Open Editor</h1>

              <p>
                You enter into your favorite local bar looking
                <span class="default-selection"><b>good</b></span> as hell, but you know the only
                heads you want to turn—spicy & stylish alpha bitches — are heavily
                fixated on the D. The hot girl talks to you, but she only wants to
                be your best friend. Her nonthreatening and attentive best friend.
                Receiver of sexy selfies, listener of stories. Meanwhile, you
                attract unwanted attention from straight men, pudgy and greasy
                moths to your emotionally distant flame.
              </p>

              <p>
                Read the full article on <a href="https://medium.com/@dorn.anna/girl-no-you-dont-2e21e826c62c">Medium</a>
              </p>
            </va-medium-editor>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import VaMediumEditor from '@/components/va-medium-editor/va-medium-editor'

export default {
  components: {
    VaMediumEditor
  },

  methods: {
    handleEditorInitialization (editor) {
      this.editor = editor
      this.$nextTick(() => {
        this.highlightSampleText()
      })
    },

    highlightSampleText () {
      const sampleText = document.getElementsByClassName('default-selection')[0]
      this.editor.selectElement(sampleText)
    },
  },
}
</script>
