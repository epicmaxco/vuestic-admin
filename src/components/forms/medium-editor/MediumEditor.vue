<template>
  <div class="medium-editor">
    <div class="va-row">
      <div class="flex md12">
        <vuestic-widget :headerText="'forms.mediumEditor.title' | translate">
          <vuestic-medium-editor @initialized="handleEditorInitialization"
                                 :editor-options="editorOptions">
            <h1>Girl, no you don’t</h1>

            <p>
              <i>Every time a straight girl tells me “I wish I was a lesbian”, I
                want to light myself on fire.</i>
            </p>

            <p>
              Picture it. Walk with me for a second.
            </p>

            <p>
              You enter into your favorite local bar looking <b
              class="default-selection">good</b> as hell, but you know the only
              heads you want to turn—spicy & stylish alpha bitches—are heavily
              fixated on the D. The hot girl talks to you, but she only wants to
              be your best friend. Her nonthreatening and attentive best friend.
              Receiver of sexy selfies, listener of stories. Meanwhile, you
              attract unwanted attention from straight men, pudgy and greasy
              moths to your emotionally distant flame.
            </p>

            <h3>
              The only place you can go out and feel desired is a <i>lesbian</i>
              party. There is a reason lesbian bars no longer exist. Women
              aren’t taught to approach each other. We’re taught to cross our
              arms and judge. You worry about the shape of your eyebrows now?
              The stage of your roots? You haven’t felt fully judged until
              you’ve been in a room full of scowling women who want to fuck each
              other.
            </h3>

            <p>
              For years, your friends, family members, and medical professionals
              will doubt your continued homosexual confessions. They will tell
              you that you “haven’t met the right man.” Sex with women is fine.
              That’s allowed. You can be “experimental,” a titillating object of
              the male gaze. You can be fluid. But you want to partner with a
              woman? No no. You must be mistaken. You tend to believe them,
              because you’ve been conditioned to disbelieve yourself, to instead
              defer to the voices of others.
            </p>

            <p>
              You will experience years of confusion about your sexuality,
              because you haven’t been taught to prioritize your own sexual
              desire. None of your female friends orgasm anyway. And if they do,
              it’s definitely not from penetration. Everyone’s a little in love
              with their best friend, right? Maybe you just haven’t met the
              right man.
            </p>

            <p>
              The word “crazy” continues to come up whenever you discuss your
              love life, because mainstream society still associates lesbian
              love with mental instability. If you’re femme-presenting, you will
              hear wildly homophobic statements in your presence. You will hear
              people opine about single brothers, cousins, uncles who are
              “obviously gay,” which doesn’t bother you. But then you’ll hear
              them mention their unhinged friend, about whom they express a
              performative concern, tinged with excitement: “She went to rehab
              and then she dated a woman…. That’s just Crazy Carrie for you!”
            </p>

            <p>
              A family member to tell you that your your “alarming lifestyle”
              has required them to seek therapy. Your mom will tell you that she
              “supports you no matter what” but that it would be “much easier
              for everyone if you dated a man.” Your love life will become a
              burden, something that frightens people. You will go to the Deep
              South for the holidays and your Grandmother will quite literally
              scream when you confirm her suspicions that you do, in fact, have
              a girlfriend...
            </p>

            <p>
              Read full article on <a
              href="https://medium.com/@dorn.anna/girl-no-you-dont-2e21e826c62c">Medium</a>
            </p>
          </vuestic-medium-editor>
        </vuestic-widget>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'medium-editor',

  data () {
    return {
      editor: {},
      editorOptions: {
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
            'h3',
          ],
        },
      },
    }
  },

  methods: {
    handleEditorInitialization (editor) {
      this.editor = editor
      this.$nextTick(() => {
        this.highlightSampleText()
      })
    },

    highlightSampleText () {
      let sampleText = document.getElementsByClassName('default-selection')[0]
      this.editor.selectElement(sampleText)
    },
  },
}
</script>

<style lang="scss">

</style>
