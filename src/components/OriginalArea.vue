<template>
  <div>
    <b-field label-for="original" label="SourceCode">
      <div v-if="mode === 'selection'" class="text__selection has-text-left">
      </div>
      <b-input
        v-else
        id="original"
        rows="30"
        type="textarea"
        :value="text"
        @input="emitTextChange"
      ></b-input>
    </b-field>
    <div class="buttons has-addons is-centered">
      <button
        :disabled="pasteDisabled"
        class="button is-warning"
        @click="reset()"
      >
        Reset
      </button>

    </div>
  </div>
</template>

<script>
import "@/typedef";
var DEMO_STR = require("../demoStr");

export default {
  name: "OriginalArea",
  props: {
    mode: {
      type: String,
      default: ""
    },
    selected: {
      type: Array,
      default() {
        return [];
      }
    },
    text: {
      type: String,
      default: DEMO_STR,
    }
  },
  data() {
    return {
      pasteDisabled: false
    };
  },
  methods: {
    /** @param {string} value */
    emitTextChange(value) {
      this.$emit("textChange", value);
    },
    /** @param {Selected[]} value */
    emitSelectedChange(value) {
      this.$emit("selectedChange", value);
    },
    /**
     * @param {number} sentenceIndex
     * @param {number} wordIndex
     * @param {string} word
     */
    select(sentenceIndex, wordIndex, word) {
      /** @type {{sentenceIndex: number, wordIndex: number, word: string}[] | Array} */
      const selected = [...this.selected];
      const index = selected.findIndex(selected => selected.word === word);

      if (index !== -1) {
        selected.splice(index, 1);
      } else {
        selected.push({ sentenceIndex, wordIndex, word });
      }

      this.emitSelectedChange(selected);
    },
    /**
     * @param {number} sentenceIndex
     * @param {number} wordIndex
     * @param {string} word
     */
    currentlySelected(sentenceIndex, wordIndex, word) {
      return (
        this.selected.length > 0 &&
        this.selected.findIndex(
          selected =>
            selected.sentenceIndex === sentenceIndex &&
            selected.wordIndex === wordIndex &&
            selected.word === word
        ) !== -1
      );
    },
    clear() {
      this.$emit("selectedChange", []);
      this.$emit("textChange", "");
    },
    paste() {
      navigator.permissions
        .query({ name: "clipboard-read" })
        .then(result => {
          if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard.readText().then(clipText => {
              this.emitTextChange(clipText.trim());
              this.emitSelectedChange([]);
            });
          }
        })
        .catch(() => {
          this.pasteDisabled = true;

          this.$toast.open({
            message: "Your browser doesn't support paste button!",
            type: "is-warning",
            position: "is-bottom"
          });
        });
    },
    reset() {
      this.text = DEMO_STR;
    },
  }
};
</script>

<style scoped></style>
