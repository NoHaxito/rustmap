<script setup>
  import { ref } from 'vue'
  import { VueFlow } from '@vue-flow/core'
  import { MiniMap } from '@vue-flow/minimap'
  import { Controls } from '@vue-flow/controls'
  import NodeCard from './NodeCard.vue'

  const elements = ref([
    { id: '1', type: 'custom', label: 'Node 1', position: { x: 250, y: 5 } },
    { id: '2', type: 'custom', label: 'Node 2', position: { x: 100, y: 100 }, },
    { id: '3', type: 'custom', label: 'Node 3', position: { x: 400, y: 100 } },
    { id: '4', type: 'custom', label: 'Node 4', position: { x: 400, y: 200 } },
    { id: 'e1-3', source: '1', target: '3', animated: true },
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e3-4', source: '3', target: '4', animated: true },
  ])
</script>

<template>
  <VueFlow
    fit-view-on-init
    v-model="elements"
    :apply-changes="false"
    :nodes-draggable="false"
    class="min-h-screen min-w-full"
    >
    <MiniMap
      pannable zoomable
      nodeBorderRadius="0"
      position="top-right"
      />
    <Controls
      position="top-left"
      :show-interactive="false"
      class="group flex flex-col border border-black bg-orange-50 dark:bg-black/40 drop-shadow-[0_0_0_rgba(0,0,0)] transition justify-between"
      />

    <template #node-custom="props">
      <NodeCard :label="props.label" />
    </template>
  </VueFlow>
</template>

<style>
  @import '@vue-flow/core/dist/style.css';
  @import '@vue-flow/minimap/dist/style.css';
  @import '@vue-flow/controls/dist/style.css';

  .vue-flow__edge-path { background: #fff; }

  /*
   * Controls
   */
  .vue-flow__controls,
  .vue-flow__controls-button,
  .vue-flow__controls-button svg {
    background-color: #fff7ed;
    box-shadow: none;
    border: none;
  }

  .vue-flow__controls:hover {
    box-shadow: 4px 4px 0 rgb(0 0 0 / 40%);
  }

  .vue-flow__controls-button:hover,
  .vue-flow__controls-button:hover svg {
    background-color: #f97316;
  }

  /*
   * MiniMap
   */
  .vue-flow__minimap {
    background-color: rgb(254 215 170);
    margin-right: 1rem;
    transform: scale(70%);
  }
  .vue-flow__minimap-mask {
    fill: rgb(255 247 237 / 60%);
  }

  .vue-flow__minimap-node {
    fill: #f97316;
  }

  /*
   * Dark
   */
  @media (prefers-color-scheme: dark) {
    /*
     * Controls
     */
    .vue-flow__controls,
    .vue-flow__minimap-node,
    .vue-flow__controls-button,
    .vue-flow__controls-button svg {
      background-color: rgb(24 24 27 / 40%);
      fill: rgb(226, 206, 169);
    }

    .vue-flow__controls-button:hover,
    .vue-flow__controls-button:hover svg {
      background-color: rgb(0 0 0 / 40%) !important;
      fill: #f97316;
    }

    .vue-flow__minimap { background-color: rgb(24 24 27) }
    .vue-flow__minimap-mask { fill: rgb(0 0 0 / 70%) }
  }
</style>