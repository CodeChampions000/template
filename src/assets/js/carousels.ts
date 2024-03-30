import Splide from "@splidejs/splide";

export default function galleryCarousel() {
  new Splide("#gallery", {
    type: "loop",
    perPage: 3,
  }).mount();
}
