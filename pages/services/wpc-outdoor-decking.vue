<template>
  <div class="container mt-4 mt-lg-5 mb-3 min-vh-100 flex-grow">
    <section class="section pb-5">
      <!--Section heading-->
      <center>
        <h2 class="section-heading h1 pt-5 pb-1 fw-bold">
          WPC Outdoor Decking
        </h2>
      </center>
      <hr />
      <div class="row">
        <div class="col-12 mb-4 animate__animated animate__fadeInUp">
          <p>
            WPC stands for Wood-Plastic Composite. WPC board is a mixture of
            stacked wood, recycled plastic and a small amount of adhesive. Not
            only are they non-toxic, but they are also known to be more durable
            than conventional pressure treated wood. Now it has become a
            wonderful building material for both residential and commercial use.
          </p>
          <p>
            Combining the advantages of different materials, WPC boards are
            stronger and also have the natural look of wood. Desire Floors
            promises that the integrity and colour of the panels will not fade
            over time like conventional composite decking.
          </p>
          <p>
            So choose your favourite deck for your outdoor, lounge, backyard,
            swimming pool, garden, club, residence, landscaping, bridge, pool
            and many more.
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
            <li>Easy installation</li>
            <li>No nails or screws on the floor surface</li>
            <li>Create a real wood look and feel</li>
            <li>Extremely durable</li>
            <li>Resistant scratches</li>
            <li>Resist moisture penetration</li>
            <li>Resistant to deterioration by fungal rot</li>
            <li>Easy cleaning</li>
            <li>Minimum maintenance</li>
            <li>The colors do not fade</li>
            <li>Never re-paint, sand or oil</li>
          </ul>
        </div>
        <div class="col-sm-6">
          <!--Google map-->
          <div
            id="map-container-google-11"
            class="h-100 w-100 rounded animate__animated animate__fadeInRight"
            style="background-image: url(https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service5-progressive.jpg); background-size: cover; background-position: bottom; min-height: 200px;"
          ></div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 my-3 animate__animated animate__fadeInUp">
          <h4>
            <b>APPLICATIONS</b>
          </h4>
          <p>
            Hotels ,Restaurants, Cafes, Apartments , Residence, Play area,
            Gardens, Pool areas, Ground areas, Backyard, Bridges
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 my-1">
          <h4>
            <b>COLOURS</b>
          </h4>
          <ul>
            <li>Bamboo</li>
            <li>Local</li>
            <li>Imported</li>
          </ul>
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
      title: "Services - WPC Outdoor Decking | Desirefloors.lk",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "WPC stands for Wood-Plastic Composite. WPC board is a mixture of stacked wood, recycled plastic and a small amount of adhesive. Not only are they non-toxic, but they are also known to be more durable than conventional pressure treated wood. Now it has become a wonderful  building material for both residential and commercial use. | Desirefloors.lk"
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
            "WPC stands for Wood-Plastic Composite. WPC board is a mixture of stacked wood, recycled plastic and a small amount of adhesive. Not only are they non-toxic, but they are also known to be more durable than conventional pressure treated wood. Now it has become a wonderful  building material for both residential and commercial use. | Desirefloors.lk"
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service5-progressive.jpg"
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service5-progressive.jpg"
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: "Services - WPC Outdoor Decking | Desirefloors.lk"
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
          content: "Services - WPC Outdoor Decking | Desirefloors.lk"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "WPC stands for Wood-Plastic Composite. WPC board is a mixture of stacked wood, recycled plastic and a small amount of adhesive. Not only are they non-toxic, but they are also known to be more durable than conventional pressure treated wood. Now it has become a wonderful  building material for both residential and commercial use. | Desirefloors.lk"
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service5-progressive.jpg"
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: "Services - WPC Outdoor Decking | Desirefloors.lk"
        }
      ]
    };
  },
  async asyncData({ req }) {
    const woodcolors = await getcolors();

    let availableColors = [];

    let colorArray = ["Oak", "Walnut", "Teak", "Maple"];

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
