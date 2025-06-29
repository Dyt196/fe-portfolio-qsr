<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          v-if="!leftDrawerOpen"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Mohammad Ikhmal Hidayat </q-toolbar-title>

        <div>Made with Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-primary"
      :mini="drawerMinify"
      @mouseover="drawerMinify = false"
      @mouseout="drawerMinify = true"
    >
      <q-list>
        <q-item @mouseover="drawerMinify = false" class="menu-font">
          <q-item-section>My Portfolio</q-item-section>
          <q-item-section v-if="!drawerMinify" side style="color: white">
            <q-btn
              @mouseover="drawerMinify = false"
              @click="toggleLeftDrawer"
              icon="close"
              round
              flat
              style="color: white"
            />
          </q-item-section>
        </q-item>
        <q-item
          clickable
          ripple
          :class="`menu-list ${checkPath('/') ? 'active' : ''}`"
          @click="goPage('/')"
        >
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section> Home </q-item-section>
        </q-item>
        <q-item
          clickable
          ripple
          :class="`menu-list ${checkPath('/skill') ? 'active' : ''}`"
          @click="goPage('/skill')"
        >
          <q-item-section avatar>
            <q-icon name="engineering" />
          </q-item-section>
          <q-item-section> Skills </q-item-section>
        </q-item>
        <q-item
          clickable
          ripple
          :class="`menu-list ${checkPath('/project') ? 'active' : ''}`"
          @click="goPage('/project')"
        >
          <q-item-section avatar>
            <q-icon name="work" />
          </q-item-section>
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
import { useRoute, useRouter } from 'vue-router';

const leftDrawerOpen = ref(false);
const drawerMinify = ref(true);
const router = useRouter();
const route = useRoute();

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

async function goPage(page: string) {
  await router.push(page);
}

function checkPath(page: string) {
  if (page == route.fullPath) {
    return true;
  } else {
    return false;
  }
}
</script>
