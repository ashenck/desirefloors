<template>
  <div class="container mt-4 mt-lg-5 mb-3 min-vh-100">
    <center>
      <h2 class="section-heading h1 pt-5 pb-1 fw-bold text-uppercase">
        Gallery
      </h2>
    </center>
    <hr />
    <no-ssr>
      <LightGallery
        :images="images"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
      
        <div id="project1" class="col-12 my-3">
          <div class="row">
            <div
              v-for="(avColor, thumbIndex) in thumbs"
              class="col-6 col-md-3 mb-3 d-flex align-items-center animate__animated animate__fadeIn"
              :key="thumbIndex"
              @click="index = thumbIndex"
            >
              <div
                class="rounded"
                v-bind:style="{
                  backgroundImage: 'url(' + avColor + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'bottom'
                }"
                style=" height: 250px; width: 100%; background: grey; float: left;"
              ></div>
            </div>
          </div>
        </div>        
        <!-- <div id="project2" class="col-12 my-3">
          <h4>
            <b>PROJECT 2</b>
          </h4>
          <div class="row">
            <div
              v-for="(avColor, thumbIndex) in thumbs.slice(5, 15)"
              class="col-6 col-md-3 mb-3 d-flex align-items-center animate__animated animate__fadeIn"
              :key="thumbIndex"
              @click="index = thumbIndex + 5"
            >
              <div
                class="rounded"
                v-bind:style="{
                  backgroundImage: 'url(' + avColor + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'bottom'
                }"
                style=" height: 250px; width: 100%; background: grey; float: left;"
              ></div>
            </div>
          </div>
        </div>
        <div id="project3" class="col-12 my-3">
          <h4>
            <b>PROJECT 3</b>
          </h4>
          <div class="row">
            <div
              v-for="(avColor, thumbIndex) in thumbs.slice(15, 19)"
              class="col-6 col-md-3 mb-3 d-flex align-items-center animate__animated animate__fadeIn"
              :key="thumbIndex"
              @click="index = thumbIndex + 15"
            >
              <div
                class="rounded"
                v-bind:style="{
                  backgroundImage: 'url(' + avColor + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'bottom'
                }"
                style=" height: 250px; width: 100%; background: grey; float: left;"
              ></div>
            </div>
          </div>
        </div>        
        <div id="project4" class="col-12 my-3">
          <h4>
            <b>PROJECT 4</b>
          </h4>
          <div class="row">
            <div
              v-for="(avColor, thumbIndex) in thumbs.slice(19, 27)"
              class="col-6 col-md-3 mb-3 d-flex align-items-center animate__animated animate__fadeIn"
              :key="thumbIndex"
              @click="index = thumbIndex + 19"
            >
              <div
                class="rounded"
                v-bind:style="{
                  backgroundImage: 'url(' + avColor + ')',
                  backgroundSize: 'cover',
                  backgroundPosition: 'bottom'
                }"
                style=" height: 250px; width: 100%; background: grey; float: left;"
              ></div>
            </div>
          </div>
        </div> -->
    </no-ssr>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      thumbs : [    
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC00188.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1665322864/desirefloors/gallery/DSC00193.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC00238.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1665323129/desirefloors/gallery/DSC00265.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1665323236/desirefloors/gallery/DSC00271.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1665323458/desirefloors/gallery/DSC00275.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08022.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08024.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08026.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08028.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08031-HDR.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08032.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08035.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08040.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08045.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08056-HDR.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08062-Edit.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08066-Edit.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08079.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08083.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08084.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08089.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08092.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08095.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08097.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08105.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08107-HDR.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08110.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08114.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08121.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08122.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08127.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08129-HDR.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08131-HDR.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08136.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08140.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08144.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08147.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08151-HDR.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08154.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08163.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08164.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08167.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08171.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08177.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08180.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08184.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08185.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08187.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08190.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08191.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08200.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/DSC08201.jpg",    
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/08df153f-218b-49d6-8700-75614bef4988.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/55a39be4-a79a-472e-927f-b3d1a4657b4a.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/13322bd9-034e-4038-a1bd-193e51d434d0.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/8b2bfab8-c01d-42a9-9609-ebe51632dedb.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/4fb79d80-3273-4f36-93bf-972b796343fc.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/87c1c8a5-a63f-4b30-bc0a-b6e82fc6ec85.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/d6408501-e9fe-4f10-bdd7-030a4d018c30.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/2d424218-97f7-4883-a418-c0d793828c09.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860329/desirefloors/gallery/079c418f-3582-433e-acf3-d3482ce79aa0.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1630860330/desirefloors/gallery/d52ee1a5-6c12-4cba-8b51-bff8031348a2.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1622129277/desirefloors/gallery/IMG-20210525-WA0055.jpg",    
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1622129277/desirefloors/gallery/IMG-20210525-WA0053.jpg",    
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1622129277/desirefloors/gallery/IMG-20210525-WA0056.jpg",    
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1622129277/desirefloors/gallery/IMG-20210525-WA0054.jpg",    
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/IMG-20210525-WA0046.jpg",    
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/IMG-20210525-WA0049.jpg",    
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/IMG-20210525-WA0048.jpg",    
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/IMG-20210525-WA0047.jpg",    
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188221516.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188221500.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188221512.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188221508.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188221504.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188335497.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188335470.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188335446.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188335493.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188335487.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188335457.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188335483.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188335478.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188335453.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188335464.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188291600.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188291629.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188291614.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188291622.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188266774.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188266766.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188266790.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188266759.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188266782.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188266744.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188266752.jpg",
        "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,h_400/v1621372645/desirefloors/gallery/1621188266738.jpg"
      ],
      images: [
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC00188.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1665322864/desirefloors/gallery/DSC00193.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC00238.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1665323129/desirefloors/gallery/DSC00265.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1665323236/desirefloors/gallery/DSC00271.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1665323458/desirefloors/gallery/DSC00275.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08022.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08024.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08026.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08028.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08031-HDR.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08032.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08035.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08040.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08045.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08056-HDR.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08062-Edit.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08066-Edit.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08079.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08083.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08084.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08089.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08092.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08095.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08097.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08105.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08107-HDR.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08110.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08114.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08121.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08122.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08127.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08129-HDR.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08131-HDR.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08136.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08140.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08144.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08147.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08151-HDR.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08154.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08163.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08164.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08167.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08171.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08177.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08180.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08184.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08185.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08187.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08190.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08191.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08200.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/DSC08201.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/08df153f-218b-49d6-8700-75614bef4988.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/55a39be4-a79a-472e-927f-b3d1a4657b4a.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/13322bd9-034e-4038-a1bd-193e51d434d0.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/8b2bfab8-c01d-42a9-9609-ebe51632dedb.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/4fb79d80-3273-4f36-93bf-972b796343fc.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/87c1c8a5-a63f-4b30-bc0a-b6e82fc6ec85.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/d6408501-e9fe-4f10-bdd7-030a4d018c30.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/2d424218-97f7-4883-a418-c0d793828c09.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860329/desirefloors/gallery/079c418f-3582-433e-acf3-d3482ce79aa0.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1630860330/desirefloors/gallery/d52ee1a5-6c12-4cba-8b51-bff8031348a2.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1622129277/desirefloors/gallery/IMG-20210525-WA0055.jpg"},    
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1622129277/desirefloors/gallery/IMG-20210525-WA0053.jpg"},    
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1622129277/desirefloors/gallery/IMG-20210525-WA0056.jpg"},    
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1622129277/desirefloors/gallery/IMG-20210525-WA0054.jpg"},  
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/IMG-20210525-WA0046.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/IMG-20210525-WA0049.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/IMG-20210525-WA0048.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/IMG-20210525-WA0047.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188221516.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188221500.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188221512.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188221508.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188221504.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188335497.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188335470.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188335446.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188335493.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188335487.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188335457.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188335483.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188335478.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188335453.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188335464.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188291600.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188291629.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188291614.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188291622.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188266774.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188266766.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188266790.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188266759.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188266782.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188266744.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188266752.jpg"},
        { url: "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/1621188266738.jpg"},
        
        
      ],
      index: null
    };
  },
  mounted(){
  }
};
</script>
