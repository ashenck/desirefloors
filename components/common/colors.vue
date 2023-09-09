<template>
  <div class="row">
    <div
      v-for="(avColor, index) in availableColors"
      :key="index"
      class="col-12 col-sm-3 rounded d-flex p-2 align-items-center animate__animated animate__fadeIn"
    >
      <div
        class="my-3 me-2 p-3 rounded"
        v-bind:style="{
          backgroundImage: 'url(' + avColor.link + ')',
          backgroundSize: 'cover'
        }"
        style=" height: 100%; width: 100%; background: grey;"
      >
      <span class="fs-5 text-white text-shadow">{{ avColor.title }}</span>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  props: {
    availableColors: Array
  },
  data() {
    return { 
    };
  },
  watch: { 
  },
  async mounted() { 
  },
  methods: {     
  }
};
</script>
