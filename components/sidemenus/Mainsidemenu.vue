<template>
  <div id="hmenu-content">
    <center>
      <h3 class="mt-1 p-0 mb-0 me-2 fw-bold"><img src="https://res.cloudinary.com/trekkerpoint-com/image/upload/v1627289961/desirefloors/logo.svg" height="60px" class=" ">
            DESIRE FLOORS
            </h3>
    </center>
    <!-- btn login, signup -->
    <hr class="mt-2" />
    <div class="col-12">
      <div class="widget"> 
        <ul class="list-group list-group-flush">
          <li class="list-group-item p-0 border-bottom-0">
            <a class="text-dark hover-yellow" @click="clickPush('/gallery')"
              >Gallery</a
            >
          </li>
          <li class="list-group-item p-0 border-bottom-0">
            <a class="text-dark hover-yellow" @click="clickPush('/about')"
              >About Us</a
            >
          </li>
          <li class="list-group-item p-0 border-bottom-0">
            <a class="text-dark hover-yellow"  @click="clickPush('/contact')"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- end buttons -->
    <hr />
    <!-- unordered list -->
    <ul>
      <li>
        <h6 class="mx-3 fw-bold text-capitalize">Services</h6>
      </li>
      <li v-for="(service, index) in services" :key="index">
        <a
          @click="clickPush(service.link)"
          class="hmenu-item"
          data-menu-id="2"
          ><div>{{service.title}}</div>
          <i class="nav-sprite hmenu-arrow-next"></i
        ></a>
      </li>
    </ul>
  </div>
</template>
<script>
const getservices = () =>
  import("~/data/services.json").then(m => m.default || m);

export default {
  props: {
    userData: Object,
  },
  data() {
    return {
      services : []
    };
  },
  async mounted() {
    this.services = await getservices();
  },
  methods: {
    clickPush(path) {
      this.$parent.sideMenuToggle();
      this.$router.push({ path: path });
    },
    logOut() {
      this.$parent.sideMenuToggle();
      this.$parent.logout();
    },
    toggleMenu() {
      this.$parent.sideMenuToggle();
    },
  },
};
</script>
