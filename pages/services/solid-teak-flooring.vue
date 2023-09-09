<template>
  <div class="container mt-4 mt-lg-5 mb-3 min-vh-100 flex-grow">
    <section class="section pb-5">
      <!--Section heading-->
      <center>
        <h2 class="section-heading h1 pt-5 pb-1 fw-bold">
          Solid Teak Flooring
        </h2>
      </center>
      <hr />
      <div class="row">
        <div class="col-sm-6 animate__animated animate__fadeInLeft" style="min-height: 300px;">
          <p>Solid Teak is a premium Floor designed to impress at first, sight wherever it is installed. It has a natural warming feature. Therefore it is best suited for use in rooms.</p>
          <p>If used in shops or any other crowded places, placing safety pads under the furniture legs can protect the teak floor and definitely it will help to maintain your floor for a long time.</p>
          <p>The real teak is made of light yellow-brown and dark gold-brown wood, which adds a stunning look to your floor.</p>
        </div>
        <div class="col-sm-6">
          <!--Google map-->
          <div
            id="map-container-google-11"
            class="h-100 w-100 rounded animate__animated animate__fadeInRight"
            style="background-image: url(https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service7-progressive.jpg); background-size: cover; background-position: bottom; min-height: 200px;"
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
      title: "Services - Solid Teak Flooring | Desirefloors.lk",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Solid Teak is a premium Floor  designed to impress at first, sight wherever it is installed. It has a natural warming feature. Therefore it is best suited for use in rooms. | Desirefloors.lk"
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
            "Solid Teak is a premium Floor  designed to impress at first, sight wherever it is installed. It has a natural warming feature. Therefore it is best suited for use in rooms. | Desirefloors.lk"
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service7-progressive.jpg"
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service7-progressive.jpg"
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: "Services - Solid Teak Flooring | Desirefloors.lk"
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
          content: "Services - Solid Teak Flooring | Desirefloors.lk"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Solid Teak is a premium Floor  designed to impress at first, sight wherever it is installed. It has a natural warming feature. Therefore it is best suited for use in rooms. | Desirefloors.lk"
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service7-progressive.jpg"
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: "Services - Solid Teak Flooring | Desirefloors.lk"
        }
      ]
    };
  },
  async asyncData({ req }) {
    const woodcolors = await getcolors();

    let availableColors = [];

    let colorArray = [
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
      "Selge"
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
