<template>
  <router-view />
</template>

<script setup>
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

input[type="text"] {
  width: 300px;
  padding: 10px;
  margin: 20px 0;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

li {
  padding: 10px;
  cursor: pointer;
}

li.selected {
  background-color: #007BFF;
  color: white;
}

li:hover {
  background-color: #f0f0f0;
}

h1 {
  font-size: 24px;
}

</style>
