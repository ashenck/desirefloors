<template>
  <div class="container mt-4 mt-lg-5 mb-3 min-vh-100 flex-grow">
    <section class="section pb-5">
      <!--Section heading-->
      <center>
        <h2 class="section-heading h1 pt-5 pb-1 fw-bold">
          Solid Mahogany Flooring
        </h2>
      </center>
      <hr />
      <div class="row">
        <div class="col-12 mb-4 animate__animated animate__fadeInUp">
          <p>
            Desire Floors' Mahogany Hardwood Flooring provides the premium appearance and quality you wish. Mahogany is a exquisite hardwood floor with excellent, unique properties. Mahogany has light orange and dark reddish tones, giving a rich and unique look to any room. All of our prefinished sold wood floors are better for your peace of mind. Desire Floors' solid wood floorings offer excellent durability with excellent strength to your floor while being scratch resistant. And they are simple to clean and easy to maintain.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 animate__animated animate__fadeInLeft">
          <h4>
            <b>KEY FEATURES</b>
          </h4>
          <ul>
            <li>Strong</li>
            <li>Highly Durable</li>
            <li>Cost - Effective</li>
            <li>Eco - Friendly</li>
            <li>Suitable For Shaping</li>
            <li>Medium Bending Strength</li>
            <li>Low Solidity</li>
            <li>Scratch Resistant</li>
            <li>Impact Resistant</li>
            <li>Excellent Texture</li>
            <li>Lively Structure</li>
            <li>Easy To Clean & Maintain</li>
          </ul>
        </div>
        <div class="col-sm-6">
          <!--Google map-->
          <div
            id="map-container-google-11"
            class="h-100 w-100 rounded animate__animated animate__fadeInRight"
            style="background-image: url(https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service9-progressive.jpg); background-size: cover; background-position: bottom; min-height: 200px;"
          ></div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 my-3 animate__animated animate__fadeInUp">
          <h4>
            <b>APPLICATIONS</b>
          </h4>
          <p>
            Flooring, Staircase and Handrails, Skirting, Timber Decks and Attics.
          </p>
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
      title: "Services - Solid Mahogany Flooring | Desirefloors.lk",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Desire Floors' Mahogany Hardwood Flooring provides the  premium appearance and quality you wish. Mahogany is a exquisite hardwood floor with excellent, unique properties. Mahogany has light orange and dark reddish tones, giving a rich and unique look to any room.  | Desirefloors.lk"
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
            "Desire Floors' Mahogany Hardwood Flooring provides the  premium appearance and quality you wish. Mahogany is a exquisite hardwood floor with excellent, unique properties. Mahogany has light orange and dark reddish tones, giving a rich and unique look to any room.  | Desirefloors.lk"
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service9-progressive.jpg"
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service9-progressive.jpg"
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: "Services - Solid Mahogany Flooring | Desirefloors.lk"
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
          content: "Services - Solid Mahogany Flooring | Desirefloors.lk"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Desire Floors' Mahogany Hardwood Flooring provides the  premium appearance and quality you wish. Mahogany is a exquisite hardwood floor with excellent, unique properties. Mahogany has light orange and dark reddish tones, giving a rich and unique look to any room.  | Desirefloors.lk"
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service9-progressive.jpg"
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: "Services - Solid Mahogany Flooring | Desirefloors.lk"
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
