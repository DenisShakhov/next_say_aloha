export default function Map({ map_path }) {
  return (
    <>
      <div className="mt-[50px] map xl:mt-[80px] flex flex-col items-start justify-start">
        <h2 className="text-blue-text text-[30px] xl:text-[42px] font-semibold">
          Маршрут экскурсии:
        </h2>
        <img src={map_path} className="md:mt-5" />
      </div>
    </>
  );
}
