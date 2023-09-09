<template>
  <div class="container mt-4 mt-lg-5 mb-3 min-vh-100 flex-grow">
    <section class="section pb-5">
      <!--Section heading-->
      <center>
        <h2 class="section-heading h1 pt-5 pb-1 fw-bold">
          Luxury Vinyl (SPC) Flooring
        </h2>
      </center>
      <hr />
      <div class="row">
        <div class="col-12 mb-4 animate__animated animate__fadeInUp">
          <p>
            Luxury Vinyl flooring, also known as SPC flooring, is the most
            durable and waterproof Vinyl flooring option Desire flfloors offers.
            This has become a popular choice in residential and commercial
            settings as it combines nature with maximum comfort.
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
          <p>
            Our affordable, stunning solution offers you a wide variety of
            natural designs such as hard wood, stone or tile and is made from
            realistic wood grains with elegant stones and rough textures. Choose
            the one that suits your lifestyle & your settings.
          </p>
          <p>
            With great warmth and a wonderful texture underneath, this awesome
            option can be easily installed with a peel-and-stick, glue - down or
            click – together. SPC flooring stands for Stone Plastic Composite or
            Stone Polymer Composite. This describes the extreme rigidity of
            luxury Vinyl Floors. This floor is made up of multiple layers that
            contribute to great advantages.
          </p>
          <h4>
            <b>Types of Luxury Vinyl Flooring</b>
          </h4>
          <ul>
            <li><strong>Plank</strong> - Mimic hardwood</li>
            <li>
              <strong>Tile</strong> - Replicate stone or create an intricate
              pattern
            </li>
            <li>
              <strong>Sheet</strong> - to areas subject to moisture (ex:
              bathroom, kitchen)
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 animate__animated animate__fadeInLeft">
          <h4>
            <b>KEY FEATURES</b>
          </h4>
          <ul>
            <li>100% water proof</li>
            <li>Durable</li>
            <li>Easy maintenance</li>
            <li>
              Brings a real and natural authentic look of wood, stone or tile
            </li>
            <ul>
              <li>
                For hard wood look - be sure to choose Vinyl Plank Flooring
              </li>
              <li>
                For a stone look - we suggest to choose Vinyl Tile Flooring
              </li>
            </ul>
            <li>Premium performance</li>
            <li>Resist scratches and dirt</li>
            <li>Can withstand moisture, heavy foot traffic and leaks</li>
            <li>Can be installed anywhere in the house</li>
            <li>No Use of messy glue</li>
          </ul>
        </div>
        <div class="col-sm-6">
          <!--Google map-->
          <div
            id="map-container-google-11"
            class="h-100 w-100 rounded animate__animated animate__fadeInRight"
            style="background-image: url(https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service2-progressive.jpg); background-size: cover; background-position: bottom; min-height: 200px;"
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
            Residence / apartments, Cafes / Restaurants, Offices, Schools,
            Shops, Halls, Class rooms, Child play areas
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
      title: "Services - Luxury Vinyl (SPC) Flooring | Desirefloors.lk",
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
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service2-progressive.jpg"
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service2-progressive.jpg"
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: "Services - Luxury Vinyl (SPC) Flooring | Desirefloors.lk"
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
          content: "Services - Luxury Vinyl (SPC) Flooring | Desirefloors.lk"
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
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service2-progressive.jpg"
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: "Services - Luxury Vinyl (SPC) Flooring | Desirefloors.lk"
        }
      ]
    };
  },
  async asyncData({ req }) {
    const woodcolors = await getcolors();

    let availableColors = [];

    let colorArray = [
      "Olive Gray",
      "Pine Wood",
      "Rose Wood",
      "Rustic Honey"
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
