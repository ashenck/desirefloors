<template>
  <div class="container mt-4 mt-lg-5 mb-3 min-vh-100 flex-grow">
    <section class="section pb-5">
      <!--Section heading-->
      <center>
        <h2 class="section-heading h1 pt-5 pb-1 fw-bold">
          Bamboo Flooring
        </h2>
      </center>
      <hr />
      <div class="row">
        <div class="col-12 mb-4 animate__animated animate__fadeInUp">
          <p>
            Bamboo Flooring is a natural surface coating material made from bamboo. Desire Floors' Bamboo Flooring is 100% sustainable strand bamboo floor which gives you the aesthetics and feel of traditional wood floors. At the same time, keep in mind that it is a masterpiece that lasts a lifetime, with the finest finish...
          </p>
          <p>
            Remember ! You can buy bamboo floors from anywhere. But keep in your mind, that its locking system is very important for its longevity. Without a proper locking system, problems like lifting & separating can occur. The strength of the locking system is very important when the floor experiences environmental changes or moisture.
          </p>
          <p>
            Moisture can cause the boards to expand and putting extra pressure on the locking system, which is unmanageable for low, inexpensive locking systems. But remember, Desire Floors uses the strongest engineering locking system on the market. Our installation avoids gaps - dust or dirt and moisture cannot enter along the join.
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
            style="background-image: url(https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service4-progressive.jpg); background-size: cover; background-position: bottom; min-height: 200px;"
          ></div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 my-3 animate__animated animate__fadeInUp">
          <h4>
            <b>APPLICATIONS</b>
          </h4>
          <p>
            Staircase (mainly), Living rooms, Bed rooms, Kitchen room, Hotels / Restaurants / Cafes / Pub /Apartments
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 my-1">
          <h4>
            <b>COLOURS</b>
          </h4>
          <ul>
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
