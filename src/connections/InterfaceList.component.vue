<script setup lang="ts">
  import { ref } from 'vue';
  import axios from 'axios';
  import Serial from '../connections/Serial.component.vue'
  import { LAYOUT_ID } from '../constants.js';

  const props = defineProps({
    interfaces: Array
  });

  // const layoutId = LAYOUT_ID;
  // const layout = ref(null);

  // try {
  //   const { data } = await axios.get(`/api/layouts/${layoutId}`);

  //   layout.value = data;
  // } catch (err) {
  //   console.error(err);
  // }

  // console.log('interfaces', props.interfaces, layout?.value?.interfaces);

</script>

<template>
  <ul class="p-2">
    <li class="mb-2" v-for="iface in interfaces" :key="iface.id">
      <Serial v-if="iface.type === 'serial'" :iface="iface" />
      <!-- {{ iface.id }} - {{  iface }} -->
    </li>
  </ul>
</template>
