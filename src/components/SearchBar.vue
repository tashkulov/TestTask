<template>
  <div>
    <input
        type="text"
        v-model="query"
        @input="onInput"
        @keydown.down.prevent="onArrowDown"
        @keydown.up.prevent="onArrowUp"
        @keydown.enter.prevent="onEnter"
        placeholder="Введите имя игрока"
    />
    <AutoComplete
        v-if="showSuggestions"
        :suggestions="filteredPlayers"
        :selectedIndex="selectedIndex"
        @select="onSelect"
    />
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import AutoComplete from './AutoComplete.vue';

const router = useRouter();

const query = ref('');
const players = ref([
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
]);

const showSuggestions = ref(false);
const selectedIndex = ref(-1);

const filteredPlayers = computed(() => {
  if (query.value.length < 3) return [];
  return players.value.filter(player => player.name.toLowerCase().includes(query.value.toLowerCase())).slice(0, 10);
});

const onInput = () => {
  showSuggestions.value = query.value.length >= 3;
  selectedIndex.value = -1; // Сбрасываем индекс при изменении ввода
};

const onArrowDown = () => {
  if (selectedIndex.value < filteredPlayers.value.length - 1) {
    selectedIndex.value++;
  }
};

const onArrowUp = () => {
  if (selectedIndex.value > 0) {
    selectedIndex.value--;
  }
};

const onEnter = () => {
  if (selectedIndex.value >= 0 && selectedIndex.value < filteredPlayers.value.length) {
    const selectedPlayer = filteredPlayers.value[selectedIndex.value];
    onSelect(selectedPlayer);
  }
};

const onSelect = (player) => {
  console.log('Selected player:', player);
  showSuggestions.value = false;
  router.push({ path: `/profile/${player.name}` });
};
</script>
<style scoped>
input[type="text"] {
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
}

input[type="text"]:focus {
  border-color: #6e3adb;
}

.AutoComplete {
  position: absolute;
  background-color: white;
  border: 1px solid #ddd;
  max-height: 200px;
  overflow-y: auto;
  width: 300px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.suggestion {
  padding: 10px;
  cursor: pointer;
}

.suggestion:hover {
  background-color: #f0f0f0;
}
</style>
