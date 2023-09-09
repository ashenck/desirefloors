<template>
  <div class="container mt-4 mt-lg-5 mb-3 min-vh-100 flex-grow">
    <section class="section pb-5">
      <!--Section heading-->
      <center>
        <h2 class="section-heading h1 pt-5 pb-1 fw-bold">
          Staircase
        </h2>
      </center>
      <hr />
      <div class="row">
        <div class="col-12 mb-4 animate__animated animate__fadeInUp">
          <p>
            Desire Floors, staircase solutions come with a brilliant combination of technology with art. Creating a wonderful, rustic & authentic look that just can’t be achieved with any other wooden materials, will achieve a unique glamour to your home.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 animate__animated animate__fadeInLeft">
          <h4>
            <b>Choose your desire from our collection</b>
          </h4>
          <ul>
            <li>Solid Wood Staircase</li> 
            <li>Kumbuk Wood Staircase</li> 
            <li>Teak Wood Staircase</li> 
            <li>Sooriyamara Wood Staircase</li> 
            <li>Mahogany Wood Staircase</li> 
            <li>Laminated Wood Staircase</li> 
            <li>Bamboo Wood Staircase</li> 
          </ul>
          <p>
            Our products are designed to create a seamless transition between your floors, skirtings, and stairs. Make everywhere home with Desire Floors.
          </p>
        </div>
        <div class="col-sm-6">
          <!--Google map-->
          <div
            id="map-container-google-11"
            class="h-100 w-100 rounded animate__animated animate__fadeInRight"
            style="background-image: url(https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto/v1621372645/desirefloors/gallery/IMG-20210525-WA0049.jpg); background-size: cover; background-position: bottom; min-height: 200px;"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const getcolors = () =>
  import("~/data/wood_colors.json").then(m => m.default || m);

export default {
  components: {},

  head() {
    return {
      title: "Services - Bamboo Flooring | Desirefloors.lk",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Bamboo Flooring is a natural surface coating material made from bamboo. Desire Floors' Bamboo Flooring is 100% sustainable strand bamboo floor which gives you the aesthetics and feel of traditional wood floors. At the same time, keep in mind that it is a masterpiece that lasts a lifetime, with the finest finish... | Desirefloors.lk"
        },
        {
          hid: "og:title",
          property: "og:title",
          content: " | Desirefloors.lk"
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Bamboo Flooring is a natural surface coating material made from bamboo. Desire Floors' Bamboo Flooring is 100% sustainable strand bamboo floor which gives you the aesthetics and feel of traditional wood floors. At the same time, keep in mind that it is a masterpiece that lasts a lifetime, with the finest finish... | Desirefloors.lk"
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service4-progressive.jpg"
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service4-progressive.jpg"
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: "Services - Bamboo Flooring | Desirefloors.lk"
        },
        {
          hid: "og:url",
          property: "og:url",
          content:
            "https://www.desirefloors.lk/services/laminated-wooden-flooring"
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Services - Bamboo Flooring | Desirefloors.lk"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Bamboo Flooring is a natural surface coating material made from bamboo. Desire Floors' Bamboo Flooring is 100% sustainable strand bamboo floor which gives you the aesthetics and feel of traditional wood floors. At the same time, keep in mind that it is a masterpiece that lasts a lifetime, with the finest finish... | Desirefloors.lk"
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service4-progressive.jpg"
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: "Services - Bamboo Flooring | Desirefloors.lk"
        }
      ]
    };
  },
  async asyncData({ req }) {
    const woodcolors = await getcolors();

    let availableColors = [];

    let colorArray = [
      "Oak",
      "Walnut",
      "Teak",
      "Maple"
    ];

    colorArray.forEach(element => {
      for (let index = 0; index < woodcolors.length; index++) {
        const obj = woodcolors[index];
        if (obj.title == element) {
          availableColors.push(obj);
        }
      }
    });

    return { availableColors };
  },
  data() {
    return {};
  }
};
</script>
