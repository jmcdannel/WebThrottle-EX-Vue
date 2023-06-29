<script setup lang="ts">
  import { ref } from 'vue';

  const emitConn = defineEmits(['update']);

  const turnout = ref({
   config: {
      interface: "betatrack-layout",
      turnoutIdx: 0,
      type: "kato"
    },
    name: 'BT1',
    state: false,
    turnoutId: 101
  });

  const toggleTurnout = async (e) => {
    console.log('TURNOUT.toggleTurnout', turnout.value);
    turnout.value = { ...turnout.value, state: !turnout.value.state };
    emitConn('update', turnout.value);
  }

</script>

<template>
  <main>
    <button @click="toggleTurnout" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{{  turnout.name  }}</button>
    <p>Status: {{ turnout.state ? 'straight' : 'divergent' }}</p>
    <!-- create a tailwindcss card with actions, and icon and title -->
  </main>
</template>
