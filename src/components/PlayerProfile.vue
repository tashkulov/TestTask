<template>
  <div>
    <h1>{{ player.name }}</h1>
    <p>Возраст: {{ player.age }}</p>
    <p>{{ player.description }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const players = [
  {
    name: 'Алина',
    age: 25,
    description: 'Алина — талантливая и амбициозная девушка, увлекающаяся спортом и искусством.'
  },
  {
    name: 'Алина1',
    age: 26,
    description: 'Алина1 — успешный профессионал, который любит путешествовать и открывать новые культуры.'
  },
  {
    name: 'Алинаа',
    age: 27,
    description: 'Алинаа — энергичная и креативная девушка, всегда готова помочь друзьям и близким.'
  },
  {
    name: 'Алиина',
    age: 28,
    description: 'Алиина — опытный специалист в своей области, увлекается чтением и историей.'
  },
  {
    name: 'Алиберта',
    age: 29,
    description: 'Алиберта — лидер по натуре, вдохновляющая людей вокруг себя на новые достижения.'
  },
  // Добавьте больше игроков по аналогии
];

const player = computed(() => {
  return players.find(p => p.name === route.params.name);
});
</script>

<style scoped>
/* Добавим простые стили для улучшения внешнего вида */
div {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 20px auto;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  margin: 5px 0;
}
</style>
