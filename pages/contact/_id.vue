<template>
  <div class="container mt-4 mt-lg-5 mb-3 min-vh-100 flex-grow">
    <section class="section pb-5">
      <!--Section heading-->
      <center>
        <h2 class="section-heading h1 pt-5 pb-1 fw-bold">CONTACT US</h2>
      </center>
      <hr />

      <div class="row text-center">
        <div class="col-md-4">
          <div class="col-md-3 display-1" style="margin: 0 auto;">
            <li class="fa fa-map-marker p-2 m-2 text-grey" ></li>
          </div>
          <p class="contact-detail fs-5">
            486/1, Nungamugoda Junction, <br />
            Waragoda Road, Kelaniya,<br />
            Colombo,<br />
            Sri Lanka
          </p>
        </div>

        <div class="col-md-4">
          <div class="col-md-3 display-1" style="margin: 0 auto;">
            <li class="fa fa-phone p-2 m-2 text-grey" ></li>
          </div>
          <a class="fs-5" href="tel:+94761414532">+94 76 141 45 32</a> <br/>
          <a class="fs-5" href="tel:+94761414530">+94 76 141 45 30</a>
          <!-- <p class="contact-detail">
                Mon - Fri: 8:00-05:30 <br />
                Sat - Sun: 8.30-12.00(noon)
              </p> -->
        </div>

        <div class="col-md-4">
          <div class="col-md-3 display-1" style="margin: 0 auto;">
            <li class="fa fa-envelope p-2 m-2 text-grey" ></li>
          </div>
          <a class="fs-5" href="mailto:info@desirefloors.lk">info@desirefloors.lk</a>
        </div>
      </div>
      <!-- form and map design start -->
      <div class="row mt-2">
        <hr/>
        <div class="col-12">
          <!--Google map-->
          <div
            id="map-container-google-11"
            class="z-depth-1-half map-container-6"
            style="height: 450px"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15841.64578064676!2d79.9132883!3d6.9606952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa4948fd6d5322baf!2sDesire%20floors%20(Pvt)%20Ltd!5e0!3m2!1sen!2slk!4v1627288790928!5m2!1sen!2slk"
              frameborder="0"
              style="border: 0; height: 450px"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* h2 {
  padding-top: 2rem;
  font-weight: bold;
} */
.map-container-6 {
  overflow: hidden;
  position: relative;
  height: 0;
}
.map-container-6 iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}
/*  */
.input-container {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  margin-bottom: 15px;
}
.op-hours {
  color: darkred;
  font-weight: bold;
}
.description {
  margin-top: 25px;
}
p {
  color: black;
}
.contact-detail {
  font-size: 14px;
  font-weight: 550;
}
.paraghaph {
  margin-left: 1rem;
  text-align: justify;
}
.heading {
  padding: 10px;
  font-weight: 300;
  text-decoration: unerline;
  text-align: center;
}
.icon1 {
  color: crimson;
}
.icon {
  padding: 10px;
  background: teal;
  color: white;
  min-width: 40px;
  text-align: center;
}

.input-field {
  width: 100%;
  padding: 10px;
  outline: none;
}

.input-field:focus {
  border: 2px solid teal;
}

.input-field-txtarea {
  width: 100%;
  padding: 10px;
  outline: none;
  height: 212px;
}
.input-field-txtarea:focus {
  border: 2px solid teal;
}
/* Set a style for the submit button */
.btn {
  background-color: teal;
  color: black;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  font-size: 20px;
}
.btn:hover {
  opacity: 8;
}
.conIcon {
  color: orangered;
  font-size: 30px;
}
</style>

<script>
export default {
  components: {},
  data() {
    return {};
  }
};
</script>
