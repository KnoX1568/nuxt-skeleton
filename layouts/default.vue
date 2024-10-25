<template>
  <v-app>
    <v-app-bar density="comfortable">
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />
      <v-toolbar-title :text="$t('appName')" style="cursor: pointer" />
      <v-spacer />
      <v-btn :icon="(theme.global.current.value.dark) ? 'mdi-weather-sunny' : 'mdi-moon-waxing-crescent'" @click="toggleTheme" />
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'top' : undefined"
    >
      <v-list>
        <v-list-subheader
            :title="$t('layout.default.menu.title')"
        />

        <v-list-item-action>
          <v-select
              v-model="$i18n.locale"
              :label="$t('layout.default.menu.language.select.label')"
              :items="$i18n.availableLocales"
          >
            <template #selection="{ item, props }">
              <v-list-item v-bind="props" :title="$t(`layout.default.menu.language.select.locale.${item.value}`)" />
            </template>
            <template #item="{ item, props }">
              <v-list-item v-bind="props" :title="$t(`layout.default.menu.language.select.locale.${item.value}`)" />
            </template>
          </v-select>
        </v-list-item-action>

        <v-divider />
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex justify-center" style="min-height: 300px">
      <slot />

      <v-fab-transition>
        <v-fab
            v-show="showScrollToTopButton"
            v-scroll="onScroll"
            icon="mdi-chevron-up"
            style="position: fixed; bottom: 50px; right: 25px"
            color="primary"
            absolute
            @click="scrollToTop"
        />
      </v-fab-transition>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme();
const drawer = ref(false);
const showScrollToTopButton = ref(false);

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'customLightTheme' : 'customDarkTheme'
}

const onScroll = (event) => {
  const top = window.scrollY || event.target.scrollTop || 0;
  showScrollToTopButton.value = top > 20;
}
const scrollToTop = () => {
  window.scrollTo(0,0);
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>

<style scoped>
</style>