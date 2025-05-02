<template lang="html">
  <div class="tab" v-show="isActive">
    <slot></slot>
    <div v-for="(role, index) in roles" :key="index" class="mb-6">
      <h2 class="font-bold pb-2 text-textPrimary">
        <span>{{ role.position }} </span>
        <span>
          <a class="text-primaryAccent underline underline-offset-4" :href="companyURL" rel="noopener noreferrer" target="_blank">
            @{{ company }}
          </a>
        </span>
      </h2>
      <ul style="list-style-type: disc;">
        <li v-for="(item, idx) in role.itemList" :key="idx" class="text-textPrimary leading-8">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Tab'
    },
    roles: {
      type: Array,
      required: true
    },
    company: {
      type: String,
      default: null
    },
    companyURL: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isActive: true
    }
  }
}
</script>

<style lang="css">

</style>