<template>
  <div>
    <h1>Selected</h1>
    <p>Selected</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selected: [],
    };
  },
  methods: {
    toggleSelection(item) {
      if (this.selected.includes(item)) {
        this.selected = this.selected.filter((i) => i !== item);
      } else {
        this.selected.push(item);
      }
    },
  }
}
</script>