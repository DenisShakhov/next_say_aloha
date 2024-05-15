import BoatCard from "./components/BoatCard";

export default function Page() {
  const handleBooking = () => {
    alert("Booking clicked!");
  };
  const BoatData = [
    {
      imageSrc: "/img/boat_select.png",
      imageAlt: "Boat with a transparent bottom",
      title: "Лодка с прозрачным дном1",
      amenities: "Туалет, душ и каюта, прохладительные напитки",
      options: ["Включено барбекю", "Туалет на борту", "Прозрачное дно"],
      price: 350,
      optionsForZustand: {
        barbeque: true,
      },
    },
    {
      imageSrc: "/img/boat_select.png",
      imageAlt: "Boat with a transparent bottom",
      title: "Лодка с прозрачным дном1",
      amenities: "Туалет, душ и каюта, прохладительные напитки",
      options: ["Включено барбекю", "Туалет на борту", "Прозрачное дно"],
      price: 350,
      optionsForZustand: {
        barbeque: true,
      },
    },
    {
      imageSrc: "/img/boat_select.png",
      imageAlt: "Boat with a transparent bottom",
      title: "Лодка с прозрачным дном1",
      amenities: "Туалет, душ и каюта, прохладительные напитки",
      options: ["Включено барбекю", "Туалет на борту", "Прозрачное дно"],
      price: 350,
      optionsForZustand: {
        barbeque: true,
      },
    },
  ];
  return (
    <div className="px-[25px] bg-light-blue container mx-auto xl:px-0">
      <h2 className="text-[42px] l-100">Выберите желаемую лодку</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-[50px]">
        {BoatData.map((option, index) => (
          <BoatCard key={index} {...option} />
        ))}
      </div>
    </div>
  );
}
