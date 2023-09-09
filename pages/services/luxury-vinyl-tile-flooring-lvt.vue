<template>
  <div class="container mt-4 mt-lg-5 mb-3 min-vh-100 flex-grow">
    <section class="section pb-5">
      <!--Section heading-->
      <center>
        <h2 class="section-heading h1 pt-5 pb-1 fw-bold">
          Luxury Vinyl Tile Flooring (LVT)
        </h2>
      </center>
      <hr />
      <div class="row">
        <div class="col-12 mb-4 animate__animated animate__fadeInUp">
          <p>
            Luxury Vinyl Tile floor is recommended for various residential and commercial settings due to its high impact and slip resistance. These flooring solutions are available in non-clickable as well as clickable designs.
          </p>
          <p>
            In Desire Floors, you have a huge selection of designs, formats and colours to choose. But make sure you find the style you love.
          </p>
          <p>
            Luxury Vinyl Tile (LVT) is a heavy-duty vinyl tile produced as tiles or planks. The planks are made by combining a very photo realistic natural locking wood design with a durable wear layer and a strong vinyl backing layer on the bottom.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 animate__animated animate__fadeInLeft">
          <h4>
            <b>KEY FEATURES</b>
          </h4>
          <ul>
            <li>Environmentally friendly</li>
            <li>Cost effective</li>
            <li>Easy to install</li>
            <li>Safe</li>
            <li>Realistic natural wood designs Waterproof & high moisture resistance</li>
            <li>Easy to maintain and clean compared to wood or tile</li>
            <li>Quiet & soft underfoot</li>
            <li>High durable</li>
            <li>Strong & pressure bearing</li>
            <li>Super wear resistant </li>
            <li>Anti-slip</li>
            <li>Flexible</li>
            <li>Light weight</li>
          </ul>
        </div>
        <div class="col-sm-6">
          <!--Google map-->
          <div
            id="map-container-google-11"
            class="h-100 w-100 rounded animate__animated animate__fadeInRight"
            style="background-image: url(https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service3-progressive.jpg); background-size: cover; background-position: bottom; min-height: 200px;"
          ></div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 my-3 animate__animated animate__fadeInUp">
          <h4>
            <b>APPLICATIONS</b>
          </h4>
          <p>
            Hotels / Resorts, Residence / apartments, Cafes / Restaurants, Offices, Schools, Shops, Halls, Class rooms, Child play areas
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 my-3">
          <h4>
            <b>COLOURS</b>
          </h4>
          <div>
            <Colors v-bind:availableColors="availableColors" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const getcolors = () =>
  import("~/data/wood_colors.json").then(m => m.default || m);

import Colors from "~/components/common/colors.vue";

export default {
  components: {
    Colors
  },
  head() {
    return {
      title: "Services - Luxury Vinyl Tile Flooring (LVT) | Desirefloors.lk",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Luxury Vinyl flooring, also known as SPC flooring, is the most durable and waterproof Vinyl flooring option Desire Floors offers. This has become a popular choice in residential and commercial settings as it combines nature with maximum comfort. | Desirefloors.lk"
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
            "Luxury Vinyl flooring, also known as SPC flooring, is the most durable and waterproof Vinyl flooring option Desire Floors offers. This has become a popular choice in residential and commercial settings as it combines nature with maximum comfort. | Desirefloors.lk"
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service3-progressive.jpg"
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service3-progressive.jpg"
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: "Services - Luxury Vinyl Tile Flooring (LVT) | Desirefloors.lk"
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
          content: "Services - Luxury Vinyl Tile Flooring (LVT) | Desirefloors.lk"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Luxury Vinyl flooring, also known as SPC flooring, is the most durable and waterproof Vinyl flooring option Desire Floors offers. This has become a popular choice in residential and commercial settings as it combines nature with maximum comfort. | Desirefloors.lk"
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service3-progressive.jpg"
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: "Services - Luxury Vinyl Tile Flooring (LVT) | Desirefloors.lk"
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
