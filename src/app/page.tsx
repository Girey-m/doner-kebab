import SlideMain from "@/components/SlideMain/SlideMain";
const sliders = [
  {
    slidePath: "/sliders/shawarma-slide.webp",
    slideTitle: "Шаурма",
    slideDescription: "Это Описание  шаурмы",
  },
  {
    slidePath: "/sliders/doner-slide.webp",
    slideTitle: "Донер",
    slideDescription: "Это Описание донера",
  },
  {
    slidePath: "/sliders/samsa-slide.webp",
    slideTitle: "Самса",
    slideDescription: "Это Описание самсы",
  },
];
export default function Home() {
  return <SlideMain data={sliders} />;
}
