<template>
  <div class="inline-container" :class="isValidMessage ? 'text-primaryAccent' : 'text-red-600'"
       @mouseenter="setIsActive(false)" @mouseleave="(idx < messages.length) && setIsActive(true)">
    <a :href="isValidMessage ? `mailto:${message}@mldangelo.com` : ''">
      <span>{{ message }}</span>
      <span>@jay.is-savvy.dev</span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    loopMessage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hold: 50,
      delay: 50,
      idx: 0,
      message: '',
      char: 0,
      isActive: true,
      messages: [
        'hi',
        'hello',
        'namste',
        'kem-cho',
        'you-can-email-me-at-literally-anything! Really',
        'well, not anything. But most things',
        'like-this',
        'or-this',
        'but not this :(  ',
        'you.can.also.email.me.with.specific.topics.like',
        'just-saying-hi',
        'please-work-for-us',
        'help',
        'admin',
        'or-I-really-like-your-website',
        'thanks'
      ]
    };
  },
  computed: {
    isValidMessage() {
      return this.validateText(this.message);
    }
  },
  methods: {
    validateText(text) {
      const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))$/;
      return re.test(text) || text.length === 0;
    },
    setIsActive(value) {
      this.isActive = value;
    }
  },
  created() {
    this.interval = setInterval(() => {
      let newIdx = this.idx;
      let newChar = this.char;
      if (this.char - this.hold >= this.messages[this.idx].length) {
        newIdx += 1;
        newChar = 0;
      }
      if (newIdx === this.messages.length) {
        if (this.loopMessage) {
          this.idx = 0;
          this.char = 0;
        } else {
          clearInterval(this.interval);
          this.isActive = false;
        }
      } else {
        this.message = this.messages[newIdx].slice(0, newChar);
        this.idx = newIdx;
        this.char = newChar + 1;
      }
    }, this.isActive ? this.delay : null);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>

<style scoped>
.inline-container a {
  text-decoration: none;
}
</style>
