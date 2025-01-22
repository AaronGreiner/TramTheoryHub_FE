<template>
  <v-responsive class="align-centerfill-height mx-auto">
    <v-app>
      <AppBar />
      <v-main>
        <component :is="currentComponent"></component>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useComponentStore } from './stores/useComponentStore';

const currentComponent = computed(() => useComponentStore().currentComponent);
</script>
