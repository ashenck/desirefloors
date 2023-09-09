<template>
  <div class="col-lg-3 col-md-4 col-12 mb-5">
    <NuxtLink :to="product.purl">
      <div class="product">
        <div class="product_img">
          <div
            v-if="product.discount"
            class="text-white fw-bold bg-danger rounded-pill discount-pill m-2"
          >
            <span>-{{ product.discount }}%</span>
          </div>
          <a href="shop-product-detail.html">
            <img
              v-if="product.pimage"
              :src="getProductImg()"
              :alt="product.title"
              class="img-fluid rounded"
            />
            <img
              v-else
              src="https://res.cloudinary.com/trekkerpoint-com/image/upload/h_300/v1608320918/martzone/products/no_image.png"
              alt="No Product Image"
              class="img-fluid rounded"
            />
          </a>
        </div>
        <div class="product_info">
          <div class="product_price">
            <div class="stars-card" v-if="product.stars">
              <li
                v-for="index_stars in product.stars"
                :key="index_stars"
                class="fa fa-star text-warning px-1"
              ></li>
            </div>
            <div class="stars-card" v-if="!product.stars">
              <li class="fa fa-star-o text-warning"></li>
            </div>
            <span v-if="product.price" class="price fs-4 fw-bold text-dark"
              >Rs.{{ product.price }}</span
            >
            <del v-if="product.old_price" class="text-muted"
              >Rs.{{ product.old_price }}</del
            >
            <h6 class="product_title text-capitalize mt-0 mb-0">
              <a
                href="shop-product-detail.html"
                class="text-dark hover-yellow title-eclipse"
                >{{ product.title ? product.title : "" }}</a
              >
            </h6>
          </div>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
<script>
export default {
  props: {
    product: Object,
  },
  data() {
    return {
      products: {},
      error: null,
      productimg:
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/h_300/v1608320918/martzone/products/no_image.png",
    };
  },
  watch: {
    product: function(newVal, oldVal) {
      // watch it
      // this.processData();
    },
  },
  async mounted() {
    try {
      //   this.products = await this.$strapi.$products.find();
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    getProductImg: function() {
      if (this.product.pimage) {
        let imgSplit = this.product.pimage.split("/upload/");
        let hsize = "/upload/h_300,";
        return imgSplit && imgSplit[0] && imgSplit[1]
          ? imgSplit[0] + hsize + imgSplit[1]
          : this.productimg;
      } else {
        return this.productimg;
      }
    },
  },
};
</script>
