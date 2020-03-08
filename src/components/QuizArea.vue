<template>
  <div>
    <b-field label-for="quiz" label="Transformed">
      <b-input
        id="quiz"
        ref="quiz"
        rows="30"
        type="textarea"
        :value="transform"
      ></b-input>
    </b-field>
    <div class="buttons has-addons is-centered">
      <button :disabled="!transform" class="button is-success" @click="copy">
        Copy
      </button>
    </div>
  </div>
</template>

<script>
import { sample, shuffle } from "lodash";
import escapeStringRegexp from "escape-string-regexp";
import beautifyJS from "babel-beautify-js/beautifyJS";

export default {
  name: "QuizArea",
  props: {
    mode: {
      type: String,
      default: ""
    },
    selected: {
      type: Array,
      default: () => []
    },
    text: {
      type: String,
      default: ""
    },
    options: {
      default: null
    }
  },
  data() {
    return {
      /** @desc reload transform */
      recompute: null,
      checkbox: false,
      checkboxCustom: "Yes",
      checked: true
    };
  },
  computed: {
    radio: {
      /** @param {string} mode */
      set(mode) {
        this.$emit("modeChange", mode);
      },
      /** @returns {string} */
      get() {
        return this.mode;
      }
    },
    transform() {
      void this.recompute;
      if (!this.text) {
        return;
      }
      return this.transformCode(this.text);
    }
  },
  methods: {
    /** @param {string} mode */
    onModeChange(mode) {
      this.$emit("modeChange", mode);
    },
    copy() {
      if (!this.transform) return;

      navigator.permissions
        .query({ name: "clipboard-write" })
        .then(result => {
          if (result.state == "granted" || result.state == "prompt") {
            navigator.clipboard
              .writeText(this.transform)
              .then(this.onCopy, this.onError);
          }
        })
        .catch(() => {
          this.$refs.quiz.$refs.textarea.select();
          const result = document.execCommand("copy");
          this.$refs.quiz.$refs.textarea.blur();

          if (result) {
            this.onCopy();
          } else {
            this.onError();
          }
        });
    },
    onCopy() {
      this.$toast.open({
        message: "Copied!",
        type: "is-success",
        position: "is-bottom"
      });
    },
    onError() {
      this.$toast.open({
        message: "Error!",
        type: "is-danger",
        position: "is-bottom"
      });
    },
    /**
     * @param {string} sentence
     * @param {number} start
     * @param {number} end
     * @returns {string}
     */
    replaceWord(sentence, start, end) {
      return `${sentence.substring(0, start)}(  )${sentence.substring(end)}`;
    },
    /** @param {string} word */
    clean(word) {
      return word.replace(/[^\w\s']|_/g, "").replace(/\s+/g, " ");
    },
    onOptionChanged() {
      console.log("QuizArea onOptionChanged");
      void this.recompute;

      this.text = this.text;
    },
    transformCode(code) {
      var options = {
        code: code,
        filename: "",
        bRenameLocalVariable: this.options.renameVariable,
        bRenameFunctionName: this.options.renameFunName,
        bRenameFunctionParam: this.options.renameFunParam,
        bRenameRequire: this.options.renameRequire,
        bRenameExport: this.options.renameExport,
        bRenameLambda: this.options.renameLambda,
        bClearState: true
      };

      beautifyJS.transformCode(options);
      if (options.errCode != 0) {
        return options.errStr;
      } else {
        return options.result;
      }
    }
  }
};
</script>

<style scoped></style>
