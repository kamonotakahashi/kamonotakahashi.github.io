<template>
    <div><p v-if="isVisible">{{ message }}</p></div>
</template>

<script>
export default {
  data: function() {
    return {
      message: 'helloa',
      test: "Ab",
    }
  },
  computed: {
    isVisible: function() {
      if (this.message) {
        return true;
      } else {
        return false;
      }
    }
  }
}
</script>
