<template>
  <div>
    <Carousel />
    <div class="container text-center my-4">
      <h5 class="bg-white mt-2 fw-bold">WHAT WE OFFER</h5>
      <hr class="mt-0" />
      <div class="row">
        <div
          class="col-sm-4 mb-3"
          v-for="(service, index) in services"
          :key="index"
        >
          <NuxtLink :to="service.link">
            <div class="card rounded-0">
              <img :src="service.image" class="card-img-top" alt="..." />
              <div class="card-body" :class="service.color_css">
                <h4
                  class="card-title text-uppercase text-start text-dark p-0 m-0"
                >
                  {{ service.title }}
                </h4>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
      <h5 class="bg-white mt-2 fw-bold">TRENDING PRODUCTS</h5>
      <hr class="mt-0" />
      <div class="row">
        <div class="col-md-6 mb-4">
          <img
            src="https://res.cloudinary.com/trekkerpoint-com/image/upload/c_crop,h_1500,y_630/v1621457363/desirefloors/trending/trending1.jpg"
            style="width: 100%"
            class="animate__animated animate__fadeInLeft"
          />
        </div>
        <div class="col-md-6">
          <div class="row mb-2">
            <NuxtLink
              to="/services/laminated-wooden-flooring"
              class="animate__animated animate__fadeInRight"
            >
              <div class="col-12 d-flex align-items-center">
                <div
                  class="my-3 me-2"
                  style="height: 120px; width: 120px; background: url(https://res.cloudinary.com/trekkerpoint-com/image/upload/v1621459101/desirefloors/trending/t1.jpg) 0% 0% / auto grey; background-position: bottom; float: left; border-radius: 50%;"
                ></div>
                <span class="fw-bold text-dark">LAMINATED WOODEN</span>
              </div>
            </NuxtLink>
          </div>
          <div class="row mb-2">
            <NuxtLink
              to="/services/luxury-vinyl-spc-flooring"
              class="animate__animated animate__fadeInRight"
            >
              <div class="col-12 d-flex align-items-center">
                <div
                  class="my-3 me-2"
                  style="height: 120px; width: 120px; background: url(https://i.pinimg.com/originals/7b/7c/5f/7b7c5f4d084ad27a76cee12f34b6a349.png) 0% 0% / auto grey; background-position: bottom; float: left; border-radius: 50%;"
                ></div>
                <span class="fw-bold text-dark">
                  LUXURY VINYL (SPC)
                </span>
              </div>
            </NuxtLink>
          </div>
          <div class="row mb-2">
            <NuxtLink
              to="/services/luxury-vinyl-spc-flooring"
              class="animate__animated animate__fadeInRight"
            >
              <div class="col-12 d-flex align-items-center">
                <div
                  class="my-3 me-2"
                  style="height: 120px; width: 120px; background: url(https://i.pinimg.com/originals/64/ea/ce/64eace599c15f530b06f3292f905d514.jpg) 0% 0% / auto grey; background-position: bottom; float: left; border-radius: 50%;"
                ></div>
                <span class="fw-bold text-dark">
                  WPC OUTDOOR DECKING
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>

      <hr class="mt-0" />
      <div class="row">
        <div class="col-md-4 mb-4 animate__animated animate__fadeInLeft">
          <div class="border border-1 border-grey">
            <div class="border border-1 border-grey m-1">
              <div class="row">
                <div class="col-md-3 display-1">
                  <li class="fa fa-dollar p-2 m-2 text-grey"></li>
                </div>
                <div class="col-md-9 text-center text-grey">
                  <h3 class="pb-1 mb-0 mt-0 mt-lg-4 text-dark">
                    AFFORDABLE PRICES
                  </h3>
                  <p class="p-0">BEST IN THE MARKET</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div
            class="border border-1 border-grey animate__animated animate__fadeInUp"
          >
            <div class="border border-1 border-grey m-1">
              <div class="row">
                <div class="col-md-3 display-1">
                  <li class="fa fa-diamond p-2 m-2 text-grey"></li>
                </div>
                <div class="col-md-9 text-center text-grey">
                  <h3 class="pb-1 mb-0 mt-0 mt-lg-4 text-dark">BEST QUALITY</h3>
                  <p class="p-0">GENUINE MATERIALS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div
            class="border border-1 border-grey animate__animated animate__fadeInRight"
          >
            <div class="border border-1 border-grey m-1">
              <div class="row">
                <div class="col-md-3 display-1">
                  <li class="fa fa-clock-o p-2 m-2 text-grey"></li>
                </div>
                <div class="col-md-9 text-center text-grey">
                  <h3 class="pb-1 mb-0 mt-0 mt-lg-4 text-dark">
                    DURABLE FINISH
                  </h3>
                  <p class="p-0">LONG LASTING</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h5 class="bg-white mt-2 fw-bold">RECENT PROJECT GALLERY</h5>
      <hr class="mt-0" />
      <div class="row">
        <div class="col-sm-4 mb-3">
          <NuxtLink to="/gallery">
            <div
              class="card rounded"
              style="height: 250px;
    width: 100%;
    background: url(https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188335497.jpg) center bottom / cover grey;
    float: left;"
            >
              <div
                class="d-flex border-1 border-grey align-self-center justify-content-center"
                style="position: absolute; height: 100%; background-color: #0000004d; width: 100%;"
              >
                <div class="row align-self-center">
                  <div class="col-md-12 display-1">
                    <li class="fa fa-search p-2 m-2 text-white"></li>
                  </div>
                  <div class="col-md-12 text-center text-grey"></div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="col-sm-4 mb-3">
          <NuxtLink to="/gallery">
            <div
              class="card rounded"
              style="
              height: 250px;
              width: 100%;
              background: url(https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188266790.jpg) center bottom / cover grey;
              float: left;"
            >
              <div
                class="d-flex border-1 border-grey align-self-center justify-content-center"
                style="position: absolute; height: 100%; background-color: #0000004d; width: 100%;"
              >
                <div class="row align-self-center">
                  <div class="col-md-12 display-1">
                    <li class="fa fa-search p-2 m-2 text-white"></li>
                  </div>
                  <div class="col-md-12 text-center text-grey"></div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="col-sm-4 mb-3">
          <NuxtLink to="/gallery">
            <div
              class="card rounded"
              style="
              height: 250px;
              width: 100%;
              background: url(https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188221508.jpg) center bottom / cover grey;
              float: left;"
            >
              <div
                class="d-flex border-1 border-grey align-self-center justify-content-center"
                style="position: absolute; height: 100%; background-color: #0000004d; width: 100%;"
              >
                <div class="row align-self-center">
                  <div class="col-md-12 display-1">
                    <li class="fa fa-search p-2 m-2 text-white"></li>
                  </div>
                  <div class="col-md-12 text-center text-grey"></div>
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// // optional style for arrows & dots
import "~/assets/css/vue-slick-carousel-theme.css";

import Carousel from "~/components/Carousel.vue";
const getservices = () =>
  import("~/data/services.json").then(m => m.default || m);

export default {
  components: {
    Carousel
  },
  async asyncData({ req }) {
    const services = await getservices();

    return { services };
  },
  data() {
    return {
      indexData: [],
      homeProducts: {
        new_arrival: [],
        best_selling: [],
        featured: [],
        special_offers: []
      },
      storeUrl: process.env.storeUrl,
      error: null
    };
  },
  computed: {},
  async mounted() {},
  methods: {}
};
</script>

<style scoped>
div.scrollmenu {
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu li {
  display: inline-block;
}
</style>
