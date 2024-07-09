<template>
  <ul>
    <li
        v-for="(suggestion, index) in suggestions"
        :key="index"
        :class="{ 'selected': index === selectedIndex }"
        @mousedown.prevent="select(suggestion)"
    >
      {{ suggestion.name }}
    </li>
  </ul>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  suggestions: Array,
  selectedIndex: Number
});

const emit = defineEmits(['select']);

const select = (suggestion) => {
  emit('select', suggestion);
};
</script>

<style scoped>
/* Стили находятся в App.vue */
</style>
