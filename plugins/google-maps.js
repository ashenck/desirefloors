import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAEzJPN1jHnls5aQPnvzuzwC1f1jq6x7Zg",
    libraries: "places"
  }
});
