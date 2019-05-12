<template>
  <div>
    <section class="hero has-text-centered">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">beautify-js</h1>
          <h2 class="subtitle"></h2>
        </div>
      </div>
    </section>
    <div id="app" class="container main">
      <div class="columns is-full">
        <div class="column is-5">
          <original-area
            :text="text"
            :selected="selected"
            :mode="mode"
            @textChange="onTextChange"
            @selectedChange="onSelectedChange"
          ></original-area>
        </div>

        <div>
          <b-field label-for="original" label="options">
            <div class="column is-4">
              <section>
                <b-checkbox
                  v-model="options.renameVariable"
                  @input="onOptionChanged"
                  >rename&nbsp;variable</b-checkbox
                >
              </section>
              <section>
                <b-checkbox
                  v-model="options.renameFunName"
                  @input="onOptionChanged"
                  >rename&nbsp;function&nbsp;name</b-checkbox
                >
              </section>
              <section>
                <b-checkbox
                  v-model="options.renameFunParam"
                  @input="onOptionChanged"
                  >rename&nbsp;function&nbsp;param</b-checkbox
                >
              </section>
              <section>
                <b-checkbox
                  v-model="options.renameRequire"
                  @input="onOptionChanged"
                  >rename&nbsp;require</b-checkbox
                >
              </section>
              <section>
                <b-checkbox
                  v-model="options.renameExport"
                  @input="onOptionChanged"
                  >rename&nbsp;export</b-checkbox
                >
              </section>
              <section>
                <b-checkbox
                  v-model="options.renameLambda"
                  @input="onOptionChanged"
                  >rename&nbsp;Lambda</b-checkbox
                >
              </section>
            </div>
          </b-field>
        </div>
        <div class="column is-5">
          <quiz-area
            :text="text"
            :selected="selected"
            :mode="mode"
            :options="options"
            @modeChange="onModeChange"
          ></quiz-area>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import compromise from 'compromise'
import OriginalArea from "../components/OriginalArea";
import QuizArea from "../components/QuizArea";
import "@/typedef";

const DEMO_STR = require("../demoStr");

export default {
  name: "Main",
  components: {
    "original-area": OriginalArea,
    "quiz-area": QuizArea
  },
  data() {
    return {
      text: DEMO_STR,
      mode: "random",
      /** @type {Selected[]}  */
      selected: [],
      options: {
        renameVariable: false,
        renameFunName: false,
        renameFunParam: false,
        renameRequire: false,
        renameExport: false,
        renameLambda: true
      }
    };
  },
  methods: {
    /** @param {string} text  */
    onTextChange(text) {
      this.text = text;
    },
    /** @param {Selected[]} selected */
    onSelectedChange(selected) {
      this.selected = selected;
    },
    /** @param {string} mode */
    onModeChange(mode) {
      this.mode = mode;
    },
    onOptionChanged() {
      console.log("onOptionChanged");
      for (var i = 0; i <= 2; ++i) {
        if (this.$children[i] && this.$children[i].onOptionChanged) {
          this.$children[i].onOptionChanged();
        }
      }
    }
  }
};
</script>

<style lang="scss">
.buttons .button {
  width: 50%;
}

#app {
  text-align: center;
}

.text__selection {
  min-height: 16.4rem;
  padding: 0.7rem 0.6rem;
  font-weight: 500;
  border: 1px solid hsl(0, 0%, 86%);
  background-color: hsl(0, 0%, 100%);
  color: hsl(0, 0%, 21%);
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  max-width: 100%;
  width: 100%;
  border-radius: 4px;

  &:hover {
    border-color: hsl(0, 0%, 71%);
  }
}

.text__word {
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &--selected {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
