<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import InterfaceList from '../connections/InterfaceList.component.vue'
  import Turnout from '../turnouts/Turnout.component.vue'
  import axios from "axios";
  import { LAYOUT_ID } from '../constants.js';

  const layout = ref(null);

  onMounted(async () => {
    console.log('Home.onMounted');
    getLayout(LAYOUT_ID);

  });

  async function getLayout(layoutId:string) {
    try {
      const { data } = await axios.get(`/api/layouts/${layoutId}`);

      console.log('data', data);
      layout.value = data;
    } catch (err) {
      console.error(err);
    }
  }

// const effects = [];
// const turnouts = [];


// const connected = ref(false);
// const lightOn = ref(false);
// const port = ref(null);
// let outputDone;
// let outputStream:any;

// async function handleTurnout(turnout:any) {
//   const cmd:any = tunroutCommand(turnout);
//   const { action, payload } = cmd;
//   console.log('Home.toggleTurnout', turnout, action, payload);
  
//   // writeToStream(JSON.stringify([{ action, payload }]))
// }

// function toggleLight() {
//   lightOn.value = !lightOn.value;
//   const cmd = [{"action":"pin","payload":{"pin":5,"state":lightOn.value}}];
//   // writeToStream(JSON.stringify(cmd));
// }

// const tunroutCommand = (turnout:any) => {
//   switch(turnout.config.type) {
//     case 'kato':
//       return {
//         iFaceId: turnout.config.interface,
//         action: 'turnout', 
//         payload: { 
//           turnout: turnout.config.turnoutIdx, 
//           state: turnout.state 
//         }
//       };
//     case 'servo':
//       return {
//         iFaceId: turnout.config.interface,
//         action: 'servo', 
//         payload: { 
//           servo: turnout.config.servo, 
//           value: turnout.state 
//             ? turnout.config.straight 
//             : turnout.config.divergent, 
//           current: !turnout.state 
//             ? turnout.config.straight 
//             : turnout.config.divergent
//         }
//       };
//     default:
//       // no op
//       break;
//   }
// }

</script>

<template>
  <main>
    <InterfaceList v-if="layout?.interfaces" :interfaces="layout?.interfaces" />
    <!-- <button 
      v-if="connected" 
      @click="toggleLight" 
      class="btn btn-blue">
        Light
      </button>
    <Turnout v-if="connected" @update="handleTurnout" /> -->
  </main>
</template>
