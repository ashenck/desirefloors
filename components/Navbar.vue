<template>
  <div>
    <header>
      <nav
        class="navbar navbar-expand-md navbar-light bg-light shadow fixed-top p-0"
        style="z-index: 1"
      >
        <div class="container">
          <button
            class="navbar-toggler collapsed mb-1 m-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse_removed"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            v-on:click="sideMenuToggle()"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Cart class="d-block d-sm-none" />
          <NuxtLink class="navbar-brand me-0" to="/">
            <h3 class="d-none d-md-block mb-0 me-2 fw-bold">
              <img
                src="https://res.cloudinary.com/trekkerpoint-com/image/upload/v1627289961/desirefloors/logo.svg"
                class=" "
                height="60px"
              />
              DESIRE FLOORS
            </h3>
            <img
              src="https://res.cloudinary.com/trekkerpoint-com/image/upload/v1627289961/desirefloors/logo.svg"
              class="d-block d-sm-none"
              height="30px"
            />
          </NuxtLink>
          <div class="navbar-collapse collapse" id="navbarCollapse" style="">
            <span class="d-flex flex-fill me-auto mb-2 mb-md-0"> </span>
            <ul class="navbar-nav mb-2 mb-md-0">
              <li class="nav-item active">
                <NuxtLink class="nav-link text-dark fw-bold" to="/"
                  >HOME</NuxtLink
                >
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle fw-bold text-dark"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li v-for="(service, index) in services" :key="index">
                    <NuxtLink
                      class="dropdown-item text-white hover-yellow"
                      :to="service.link"
                      >{{service.title}}</NuxtLink
                    >
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link text-dark fw-bold" to="/gallery"
                  >GALLERY</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link text-dark fw-bold" to="/about"
                  >ABOUT</NuxtLink
                >
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link text-dark fw-bold" to="/contact"
                  >CONTACT US</NuxtLink
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <aside class="sidebar">
      <div class="toggle" v-if="showCloseSideBarBtn">
        <a
          href="#"
          class="burger js-menu-toggle bg-danger active"
          data-toggle="collapse"
          data-target="#main-navbar"
          v-on:click="sideMenuToggle()"
        >
          <span></span>
        </a>
      </div>
      <div class="side-inner pt-1">
        <div class="nav-menu">
          <Mainsidemenu />
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import Cart from "./icons/cart.vue";
import Mainsidemenu from "./sidemenus/Mainsidemenu.vue";

const getservices = () =>
  import("~/data/services.json").then(m => m.default || m);

export default {
  components: {
    Cart,
    Mainsidemenu
  },
  data() {
    return {
      isOpen: false,
      showCloseSideBarBtn: false,
      coordinates: null,
      map_center: { lat: 7.0477897, lng: 79.8970348 },
      markers: [{ position: { lat: 7.0477897, lng: 79.8970348 } }],
      placeData: null,
      mapDragCoordinates: null,
      services : []
    };
  },
  computed: {},
  async mounted() {
    this.services = await getservices();
  },
  methods: {
    sideMenuToggle: function name(params) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      var body = document.body;

      let checkShowSidebar = body.classList.contains("show-sidebar");

      checkShowSidebar
        ? body.classList.remove("show-sidebar")
        : body.classList.add("show-sidebar");
      checkShowSidebar
        ? (this.showCloseSideBarBtn = false)
        : (this.showCloseSideBarBtn = true);
    },
  }
};
</script>

<style>
.emoji {
  font-size: 30px;
}

@media only screen and (min-width: 576px) {
  .modal-dialog-responsive {
    height: 90%;
    min-height: 440px;
  }
}

.pac-container {
  z-index: 1100 !important;
}
</style>
