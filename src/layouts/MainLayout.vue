<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Mohammad Ikhmal Hidayat </q-toolbar-title>

        <div>Made with Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-primary">
      <q-list>
        <q-item class="menu-list active">
          <q-item-section> Home </q-item-section>
        </q-item>
        <q-item class="menu-list">
          <q-item-section> Skills </q-item-section>
        </q-item>
        <q-item class="menu-list">
          <q-item-section> Projects / Work </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
