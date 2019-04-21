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
      <div class="columns is-centered">
        <div class="column is-half">
          <original-area
            :text="text"
            :selected="selected"
            :mode="mode"
            @textChange="onTextChange"
            @selectedChange="onSelectedChange"
          ></original-area>
          <button class="button is-text" @click="loadDemo">Reset</button>
        </div>
        <div class="column is-half">
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

const DEMO_STR = `/// 1
var a = 1,b = 2,c = 3;
///2
function test () {
    if(a) return console.log("1"),bar(),null;
}
///3
(function(){
  console.log("aaa");
})(a,function(){
  console.log("bbb");
  (function (){
    console.log("ccc");
  })(a);
});`;

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
      selected: []
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
    loadDemo() {
      this.text = DEMO_STR;
      this.selected = [
        { sentenceIndex: 2, wordIndex: 8, word: "worker" },
        { sentenceIndex: 5, wordIndex: 6, word: "you" },
        { sentenceIndex: 5, wordIndex: 10, word: "kitchen," },
        { sentenceIndex: 6, wordIndex: 4, word: "table." },
        { sentenceIndex: 4, wordIndex: 1, word: "smile," },
        { sentenceIndex: 1, wordIndex: 2, word: "world." },
        { sentenceIndex: 3, wordIndex: 7, word: "collapses." }
      ];
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
