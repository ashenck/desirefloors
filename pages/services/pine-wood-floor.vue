<template>
  <div class="container mt-4 mt-lg-5 mb-3 min-vh-100 flex-grow">
    <section class="section pb-5">
      <!--Section heading-->
      <center>
        <h2 class="section-heading h1 pt-5 pb-1 fw-bold">
          Pine Wood Floor
        </h2>
      </center>
      <hr />
      <div class="row">
        <div class="col-12 mb-4 animate__animated animate__fadeInUp">
          <p>
            Pinewood is an attractive flooring that lasts for decades. The
            prominent grains, holes and knots in the wood give it a character
            and rough feel. It is very durable and lasts more than 100 years. It
            is available in a variety of colours in White, golden Yellow to
            deep, rich Brown and Red.
          </p>
          <p>
            Since pine flooring comes unfinished to the market, you have the
            opportunity to finish your floor in any colour that suits your
            preferences and the colour of your home. You can also use Tung oil,
            clear varnish or whitewash to colour your pine floor.
          </p>
          <p>
            Pine is a soft wood. Softwoods are generally less expensive than
            hardwoods. It often costs less than Luxury Vinyl Flooring, which is
            designed to mimic the look of wood.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6 animate__animated animate__fadeInLeft">
          <h4>
            <b>KEY FEATURES</b>
          </h4>
          <ul>
            <li>Environmental sustainable High durable</li>
            <li>Low cost with high cost looking</li>
            <li>Pleasant Appearance</li>
            <li>Easy installation</li>
            <li>Add value to your money</li>
            <li>More colours</li>
            <li>You will definitely love it even after years of use</li>
          </ul>
          <p>
            In addition to all this, the following points should be specially
            mentioned. Since you are a valued customer of Desire Floors, we have
            a responsibility to make you aware of these things.
          </p>
          <ul>
            <li>
              Pine Floors are typically sold unfinished. So it needs to be
              finished after installation.
            </li>
            <li>
              Although Pine wood is usually durable, the durability of your
              floor depends on the type of pine you choose and how you finish
              it.
            </li>
          </ul>
        </div>
        <div class="col-sm-6">
          <!--Google map-->
          <div
            id="map-container-google-11"
            class="h-100 w-100 rounded animate__animated animate__fadeInRight"
            style="background-image: url(https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service6-progressive.jpg); background-size: cover; background-position: bottom; min-height: 200px;"
          ></div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 my-1 animate__animated animate__fadeInUp">
          <h4>But don't worry!</h4>
          <p>
            <strong>Desire Floors</strong> is ready to give you the prefect
            finishing quality you want.
          </p>
          <ul>
            <li>
              Like some other wooden floors, pine floors also need to be
              polished from time to time by sanding, staining and coating with
              polyurethane.
            </li>
            <li>
              If you stain it and seal two or three polyurethane coats, your
              deck will last longer.
            </li>
          </ul>
          <p>
            We know you are a little confused by these facts. But we have to
            tell you, We are here for you, not only to deliver the product, but
            to give you everything we know, to give you maximum confidence in
            maintaining your floor.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 my-1 animate__animated animate__fadeInUp">
          <h4>
            <b>APPLICATIONS</b>
          </h4>
          <p>
            Hotels, Restaurants, Cafes, Apartments, Residences, Shops, Offices
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
      title: "Services - Pine Wood Floor | Desirefloors.lk",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Pine Wood Floor is a natural surface coating material made from bamboo. Desire Floors' Pine Wood Floor is 100% sustainable strand bamboo floor which gives you the aesthetics and feel of traditional wood floors. At the same time, keep in mind that it is a masterpiece that lasts a lifetime, with the finest finish... | Desirefloors.lk"
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
            "Pine Wood Floor is a natural surface coating material made from bamboo. Desire Floors' Pine Wood Floor is 100% sustainable strand bamboo floor which gives you the aesthetics and feel of traditional wood floors. At the same time, keep in mind that it is a masterpiece that lasts a lifetime, with the finest finish... | Desirefloors.lk"
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service6-progressive.jpg"
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service6-progressive.jpg"
        },
        {
          hid: "og:image:alt",
          property: "og:image:alt",
          content: "Services - Pine Wood Floor | Desirefloors.lk"
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
          content: "Services - Pine Wood Floor | Desirefloors.lk"
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Pine Wood Floor is a natural surface coating material made from bamboo. Desire Floors' Pine Wood Floor is 100% sustainable strand bamboo floor which gives you the aesthetics and feel of traditional wood floors. At the same time, keep in mind that it is a masterpiece that lasts a lifetime, with the finest finish... | Desirefloors.lk"
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://res.cloudinary.com/trekkerpoint-com/image/upload/q_auto,fl_progressive/v1621022644/desirefloors/services/service6-progressive.jpg"
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: "Services - Pine Wood Floor | Desirefloors.lk"
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
