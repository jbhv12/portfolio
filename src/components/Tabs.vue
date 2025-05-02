<template>
  <div class="tabs-container">
    <ul class="tabs__header">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        @click="selectTab(index)"
        :class="{ 'tab__selected': index === selectedIndex }"
      >
        {{ tab.title }}
      </li>
    </ul>
    <div class="tab-content">
      <slot :index="selectedIndex"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedIndex: 0,
      tabs: []
    }
  },
  created () {
    this.tabs = this.$children
  },
  mounted () {
    this.selectTab(0)
  },
  methods: {
    selectTab (i) {
      this.selectedIndex = i
      this.tabs.forEach((tab, index) => {
        tab.isActive = (index === i)
      })
    }
  }
}
</script>

<style scoped>
.tabs-container {
  display: flex;
  align-items: flex-start;
}

.tabs__header {
  list-style: none;
  margin: 0;
  padding: 0;
  margin-right: 20px;
}

.tabs__header > li {
  padding: 12px 24px;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  background-color: #f1f5f9;
  color: #64748b;
  transition: background-color 0.2s ease;
}

.tabs__header > li:hover {
  background-color: #e2e8f0;
}

.tabs__header > li.tab__selected {
  background-color: #ffffff;
  color: #0057FF;
  font-weight: 600;
}

.tab-content {
  flex: 1;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 8px;
}
</style>
