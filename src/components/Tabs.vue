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
  flex-direction: column; /* Mobile first */
}

/* Tabs list */
.tabs__header {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  margin-bottom: 12px;
}

/* Individual tab */
.tabs__header > li {
  padding: 12px 16px;
  border-radius: 8px;
  margin-right: 8px;
  white-space: nowrap;
  cursor: pointer;
  background-color: #f1f5f9;
  color: #64748b;
  transition: background-color 0.2s ease;
  flex-shrink: 0;
}

.tabs__header > li:hover {
  background-color: #e2e8f0;
}

.tabs__header > li.tab__selected {
  background-color: #ffffff;
  color: #0057FF;
  font-weight: 600;
}

/* Tab content */
.tab-content {
  background-color: #ffffff;
  padding: 16px;
  border-radius: 8px;
}

/* Desktop layout */
@media (min-width: 768px) {
  .tabs-container {
    flex-direction: row;
    align-items: flex-start;
  }

  .tabs__header {
    flex-direction: column;
    width: 150px; /* Fixed width for vertical tab list */
    margin-right: 20px;
    margin-bottom: 0;
    overflow-x: visible;
    overflow-y: auto;
    max-height: 100%;
  }

  .tabs__header > li {
    margin-right: 0;
    margin-bottom: 8px;
  }

  .tab-content {
    flex: 1;
    min-width: 0; /* Prevent overflow issues */
  }
}

</style>
