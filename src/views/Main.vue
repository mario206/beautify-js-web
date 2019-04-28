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
                <b-checkbox v-model="option.renameVariable" :value="onClickCheckBox">rename&nbsp;variable</b-checkbox>
              </section>
              <section>
                <b-checkbox v-model="option.renameFunName">rename&nbsp;function&nbsp;name</b-checkbox>
              </section>
              <section>
                <b-checkbox v-model="option.renameFunParam">rename&nbsp;function&nbsp;param</b-checkbox>
              </section>
              <section>
                <b-checkbox v-model="option.renameRequire">rename&nbsp;require</b-checkbox>
              </section>
              <section>
                <b-checkbox v-model="option.renameExport">rename&nbsp;export</b-checkbox>
              </section>
              <section>
                <b-checkbox v-model="option.renameLambda">rename&nbsp;Lambda&nbsp;</b-checkbox>
              </section>
            </div>
          </b-field>
        </div>
        <div class="column is-5">
          <quiz-area
                  :text="text"
                  :selected="selected"
                  :mode="mode"
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
      option : {
        renameVariable : true,
        renameFunName : false,
        renameFunParam : false,
        renameRequire : false,
        renameExport : false,
        renameLambda : false
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
    onClickCheckBox() {
      console.log("onClickCheckBox");
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
