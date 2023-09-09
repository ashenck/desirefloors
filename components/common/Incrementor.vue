<template>
  <div>
    <h5 class="fw-bold">
      QTY :
      <button @click="deduct" class="btn btn-sm bg-green-dark text-white">
        <li class="fa fa-chevron-down"></li>
      </button>
      <span class="px-2">{{ counter }}</span>
      <button @click="increment" class="btn btn-sm bg-green-dark text-white">
        <li class="fa fa-chevron-up"></li>
      </button>
    </h5>
  </div>
</template>
<script>
export default {
  props: {
    maxQty: Number,
    selectedQty: Number,
  },
  data() {
    return {
      counter: 1,
    };
  },
  watch: {
    maxQty: function(newVal, oldVal) {
      // watch it
      // this.processData();
      this.validateQty();
    },
  },
  async mounted() {
    try {
      if(this.selectedQty){
        this.counter  = this.selectedQty;
      }
      //   this.products = await this.$strapi.$products.find();
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    validateQty(){      
      
      if (this.maxQty < this.counter) {
        this.counter  = this.maxQty;
      }
      this.$emit('changeQty', this.counter)
    },
    increment() {
      if (this.maxQty > 0 && this.counter !== this.maxQty) {
        this.counter++;
      }
      this.$emit('changeQty', this.counter)
    },
    deduct() {
      if (this.maxQty > 0 && this.counter > 1) {
        this.counter--;
      }
      this.$emit('changeQty', this.counter)
    },
  },
};
</script>
