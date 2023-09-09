<template>
  <footer class="pb-0 mb-0">
    <div class="footer_top border-bottom bg-dark">
      <div class="container pt-3">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="widget">
              <div class="footer_logo">
                <img
                  src="https://res.cloudinary.com/trekkerpoint-com/image/upload/v1597857981/desirefloors/logofull_whitesvg.svg"
                  alt=""
                  width="100"
                  height="100"
                  class="jsx-2085888330 mb-2"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6 col-6 mb-2">
            <div class="widget">
              <!-- <h6 class="text-white border-bottom border-secondary">Useful Links</h6> -->
              <ul class="list-group list-group-flush">
                <li class="list-group-item bg-dark p-0 border-bottom-0">
                  <NuxtLink class="text-white hover-yellow" to="/gallery"
                    >Gallery</NuxtLink
                  >
                </li>
                <li class="list-group-item bg-dark p-0 border-bottom-0">
                  <NuxtLink class="text-white hover-yellow" to="/about"
                    >About Us</NuxtLink
                  >
                </li>
                <li class="list-group-item bg-dark p-0 border-bottom-0">
                  <NuxtLink class="text-white hover-yellow" to="/contact"
                    >Contact Us</NuxtLink
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-4 col-sm-12 col-12 mb-2">
            <div class="widget">
              <h6
                class="text-warning border-bottom border-secondary text-uppercase fw-bold"
              >
                Contact Info
              </h6>
              <ul class="list-group list-group-flush">
                <li class="list-group-item bg-dark p-0 border-bottom-0">
                  <p class="mb-0 pb-0 text-white">
                    486/1, Nungamugoda Junction, Waragoda Road, Kelaniya. Colombo, Sri Lanka
                  </p>
                </li>
                <li class="list-group-item bg-dark p-0 border-bottom-0">
                  <i class="ti-email"></i>
                  <a href="mailto:info@desirefloors.lk"
                    ><i class="fa fa-paper-plane mr-1 text-white"></i>
                    info@desirefloors.lk</a
                  >
                </li>
                <li class="list-group-item bg-dark p-0 border-bottom-0">
                  <a href="tel:+94761414532" class="text-white"
                    ><i class="fa fa-phone-square mr-1"></i> +94 76 141 45 32</a
                  >
                </li>
                <li class="list-group-item bg-dark p-0 border-bottom-0">
                  <a href="tel:+94761414530" class="text-white"
                    ><i class="fa fa-phone-square mr-1"></i> +94 76 141 45 30</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bottom_footer border-top-tran bg-dark">
      <div class="container">
        <div class="row">
          <div class="d-flex bd-highlight">
            <div class="p-2 flex-grow-1 bd-highlight align-self-center">
              <p class="mb-0 pb-0 text-white">
                ©2021 All Rights Reserved by Desire Floors
              </p>
            </div>
            <div class="p-2 bd-highlight">
              <div class="widget">
                <ul class="nav justify-content-start">
                  <li class="nav-item">
                    <a
                      class="nav-link active px-1"
                      aria-current="page"
                      href="https://www.facebook.com/Desirefloors/"
                      target="_blank"
                      ><span
                        class="fa fa-facebook-official fs-2 text-white"
                      ></span
                    ></a>
                  </li>
                  <!-- <li class="nav-item">
                    <a
                      class="nav-link icon1 active px-2"
                      aria-current="page"
                      href="https://instagram.com/vlfresh?igshid=wx2y48pwhb3z"
                      target="_blank"
                    >
                      <span class="fa fa-instagram fs-2 text-white"></span>
                    </a>
                  </li> -->
                  <!-- whatsapp -->
                  <li class="nav-item">
                    <a
                      class="nav-link active px-2"
                      aria-current="page"
                      href="https://api.whatsapp.com/send?phone=94761414532"
                      target="_blank"
                      ><span class="fa fa-whatsapp fs-2 text-white"></span
                    ></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active px-2" aria-current="page" href="#"
                      ><span class="fa fa-viber fs-2 text-white"></span
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <h6 class="text-white text-center p-2 bg-secondary">
      Developed By Colombo Business Cabin
    </h6> -->
    <div class="shadow-lg text-muted bg-secondary">
      <p class="text-white text-center p-1 m-0">
        Developed By Colombo Business Cabin
      </p>
    </div>
  </footer>
</template>
<script>
import Twitter from "~/components/icons/twitter.vue";
import Github from "~/components/icons/github.vue";
import Facebook from "~/components/icons/facebook.vue";

export default {
  components: {
    Twitter,
    Github,
    Facebook
  }
};
</script>

<style scoped>
.emoji {
  font-size: 30px;
}

.fa:hover {
  opacity: 0.7;
}
.fa-whatsapp {
  color: #25d366;
}
.fa-facebook-official {
  color: #3b5998;
}
.fa-instagram {
  color: rgb(138, 58, 185);
}
.fa-messenger {
  color: #006aff;
}
</style>
