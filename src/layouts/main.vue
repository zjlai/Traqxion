<template>
  <q-layout view="hHh Lpr lff"> <!-- Be sure to play with the Layout demo on docs -->
    <q-layout-header reveal>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title>
          Traqxion App
          <span slot="subtitle">Your friendly Augmented Assistant</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      side="left"
      v-model="leftDrawer"
      :content-class="['bg-grey-3', 'q-pa-sm']"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit q-pa-sm">
        <q-list link inset-separator no-border>
          <q-item to="/todo/new">
            <q-item-main label="New Task" />
          </q-item>
          <q-item to="/consent">
            <q-item-main label="Consent Forms" />
          </q-item>
          <q-item to="/medcert">
            <q-item-main label="Medical Certificates" />
          </q-item>
          <q-item to="/messageboard">
            <q-item-main label="Message Board" />
          </q-item>
          <q-item to="/schedule">
            <q-item-main label="Schedule" />
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-layout-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutMain',
  data () {
    return {
      leftDrawer: this.$q.platform.is.desktop
    }
  }
}
</script>

<style>
</style>
