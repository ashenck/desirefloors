<template>
  <div class="container mt-4 mt-lg-5 mb-3 min-vh-100 flex-grow">
    <section class="section pb-5">
      <!--Section heading-->
      <center>
        <h2 class="section-heading h1 pt-5 pb-1 fw-bold">
          Laminated Wooden Flooring
        </h2>
      </center>
      <hr />
      <div class="row">
        <div class="col-12 mb-4 animate__animated animate__fadeInUp">
          <p>
            The Laminate Wood Flooring in Desire Floors uses high-quality
            printing technology on high-density fibreboards, to represent the
            look of natural hardwood. Finally, the product is protected by an
            extremely strong resin coating, to avoid further durability and
            maintenance costs.
          </p>
          <p>
            Since Desire Floors' Laminate Wooden Floor can be installed directly
            on the existing floor of your home/building, you do not have to
            demolish the existing floor and spend extra money. For your complete
            convenience, this creation has the perfect finish when you buy it.
            Once installed, you do not need to varnish it again, even after
            years of use. This unique alternative will give you years of comfort
            and a new look.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 animate__animated animate__fadeInLeft">
          <h4>
            <b>KEY FEATURES</b>
          </h4>
          <ul>
            <li>Manufactured to European and Singaporean quality standards</li>
            <li>Quick, Easy and trouble-free installation</li>
            <li>Can be installed directly on the existing floor</li>
            <li>No Nail - No Glue</li>
            <li>Economic and eco-friendly</li>
            <li>Add Value for your Money</li>
            <li>Maintenance Free</li>
            <li>Scratch Resistant</li>
            <li>Termite & fungus resistant</li>
            <li>Reduces the impact of fall</li>
            <li>Soft to the touch</li>
            <li>Wide range of decorative choices</li>
            <li>More colors and patterns</li>
          </ul>
        </div>
        <div class="col-sm-6">
          <!--Google map-->
          <div
            id="map-container-google-11"
            class="h-100 w-100 rounded animate__animated animate__fadeInRight"
            style="background-image: url(https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1622055495/desirefloors/services/service1-progressive2.jpg); background-size: cover; background-position: bottom; min-height: 200px;"
          ></div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 my-3 animate__animated animate__fadeInUp">
          <h4>
            <b>APPLICATIONS</b>
          </h4>
          <p>
            Houses, Bed rooms, Kitchen area, Living rooms, Hotels / Resorts,
            Residence / Apartments, Cafe / Restaurants, Offices, Schools, Shops,
            Halls, Class rooms
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 my-3">
          <h4>
            <b>COLOURS</b>
          </h4>
          <div >
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
      title: "Services - Laminated Wooden Flooring | Desirefloors.lk",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "The Laminate Wood Flooring in Desire Floors uses high-quality printing technology on high-density fibreboards, to represent the look of natural hardwood. Finally, the product is protected by an extremely strong resin coating, to avoid further durability and maintenance costs. | Desirefloors.lk"
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
            "The Laminate Wood Flooring in Desire Floors uses high-quality printing technology on high-density fibreboards, to represent the look of natural hardwood. Finally, the product is protected by an extremely strong resin coating, to avoid further durability and maintenance costs. | Desirefloors.lk"
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1622055495/desirefloors/services/service1-progressive2.jpg"
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1622055495/desirefloors/services/service1-progressive2.jpg"
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: "Services - Laminated Wooden Flooring | Desirefloors.lk"
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
          content: "Services - Laminated Wooden Flooring | Desirefloors.lk"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "The Laminate Wood Flooring in Desire Floors uses high-quality printing technology on high-density fibreboards, to represent the look of natural hardwood. Finally, the product is protected by an extremely strong resin coating, to avoid further durability and maintenance costs. | Desirefloors.lk"
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1622055495/desirefloors/services/service1-progressive2.jpg"
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: "Services - Laminated Wooden Flooring | Desirefloors.lk"
        }
      ]
    };
  },
  async asyncData({ req }) {
    const woodcolors = await getcolors();

    let availableColors = [];

    let colorArray = [
      "Congo Oak",
      "Beach Oak",
      "Red Oak",
      "Wild Teak",
      "Burwood",
      "American Walnut",
      "Awana Teak",
      "Java Oak",
      "Cherry Oak",
      "Black Forest",
      "Everest Oak",
      "Golden Cherry",
      "Nightshade",
      "Sunshine Teak",
      "Roman Teak",
      "Turkey Colors",
      "Fuji",
      "Rodos",
      "Ilgaz Oak",
      "Tibet",
      "Rosso",
      "Atlas",
      "Selge",
      "English White"
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
