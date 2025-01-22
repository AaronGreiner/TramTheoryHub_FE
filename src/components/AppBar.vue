<template>
  <v-app-bar :elevation="0">
    <template v-slot:prepend>
      <v-img
        :width="60"
        src="https://q-soft.de/wp-content/uploads/2020/02/Favivon@4x.png"
        alt="Logo"
      />
      <v-btn icon="mdi-home" @click="useComponentStore().switchComponent('home')"/>
    </template>

    <template v-slot:append>
      <v-btn :icon="currentIcon" @click="switchTheme" />
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useTheme } from 'vuetify';
import { useComponentStore } from '../stores/useComponentStore';

const theme = useTheme();
const themeModes = ref(['light', 'dark', 'system']);
const currentMode = ref(localStorage.getItem('themeMode') || 'system');

const currentIcon = computed(() => {
  switch (currentMode.value) {
    case 'light':
      return 'mdi-weather-sunny';
    case 'dark':
      return 'mdi-weather-night';
    case 'system':
    default:
      return 'mdi-monitor';
  }
});

const switchTheme = () => {
  const currentIndex = themeModes.value.indexOf(currentMode.value);
  const nextIndex = (currentIndex + 1) % themeModes.value.length;
  currentMode.value = themeModes.value[nextIndex];
};

const applyTheme = () => {
  if (currentMode.value === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    theme.global.name.value = prefersDark ? 'dark' : 'light';
  } else {
    theme.global.name.value = currentMode.value;
  }
};

watch(currentMode, (newMode) => {
  localStorage.setItem('themeMode', newMode);
  applyTheme();
});

onMounted(() => {
  applyTheme();
});
</script>
