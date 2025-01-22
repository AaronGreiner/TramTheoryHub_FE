<template>
  <v-container class="fill-height align-center justify-center">
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Startseite</h1>
      </v-col>
      <v-col cols="6">
        <v-btn color="primary" block @click="useComponentStore().switchComponent('practice')">Übung starten</v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn color="secondary" block @click="useComponentStore().switchComponent('exam')">Prüfung starten</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useComponentStore } from '../stores/useComponentStore';
</script>
