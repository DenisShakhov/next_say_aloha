export default function Slide4() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 text-[16px] xl:text-[20px] place-items-stretch border-none bg-none gap-4 mt-20">
        <h2 className="md:col-span-2 text-[30px] xl:text-[42px] text-blue-text font-bold">
          Выберите свой
          <br className="md:hidden" />
          стиль отдыха
        </h2>
        <div
          className="relative uppercase rounded-3xl xl:mt-12 h-[400px] md:h-[350px] xl:h-[400px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(1, 130, 190, 0) 30%, rgba(1, 101, 147, 0.5) 70%, rgba(0, 71, 102, 0.85) 100%), url('/img/1.png') no-repeat center center / cover",
          }}
        >
          <div className="w-full text-white max-w-[224px] xl:max-w-full text-[16px] xl:text-[18px] pl-[30px] pb-[40px] font-bold xl:font-extrabold absolute bottom-0 ">
            Индивидуальные экскурсии
          </div>
          <a href="www.google.com">
            <img
              src="/img/arrow.svg"
              className="w-[40px] h-[40px] absolute right-4 top-4"
            />
          </a>
        </div>

        <div
          className="relative col-span-1 uppercase rounded-3xl xl:mt-12 up h-[400px] md:h-[350px] xl:h-[400px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(1, 130, 190, 0) 30%, rgba(1, 101, 147, 0.5) 70%, rgba(0, 71, 102, 0.85) 100%), url('/img/2.png') no-repeat center center / cover",
          }}
        >
          <p className="w-full text-white max-w-[224px] xl:max-w-full text-[16px] xl:text-[18px] pl-[30px] pb-[40px] font-bold xl:font-extrabold absolute bottom-0 ">
            Групповые Приключения
          </p>
          <a href="www.google.com">
            <img
              src="/img/arrow.svg"
              className="w-[40px] h-[40px] absolute right-4 top-4"
            />
          </a>
        </div>

        <div
          className="relative uppercase rounded-3xl h-[400px] md:h-[350px] xl:h-[400px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(1, 130, 190, 0) 30%, rgba(1, 101, 147, 0.5) 70%, rgba(0, 71, 102, 0.85) 100%), url('/img/3.png') no-repeat center center / cover",
          }}
        >
          <p className="w-full text-white max-w-[224px] xl:max-w-full text-[16px] xl:text-[18px] pl-[30px] pb-[40px] font-bold xl:font-extrabold absolute bottom-0 ">
            Путешествие на катамаране
          </p>
          <a href="www.google.com">
            <img
              src="/img/arrow.svg"
              className="w-[40px] h-[40px] absolute right-4 top-4"
            />
          </a>
        </div>

        <div
          className="relative uppercase flex items-start col-span-1 justify-start rounded-3xl h-[400px] md:h-[350px] xl:h-[400px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(1, 130, 190, 0) 30%, rgba(1, 101, 147, 0.5) 70%, rgba(0, 71, 102, 0.85) 100%), url('/img/4.png') no-repeat center center / cover",
          }}
        >
          <p className="w-full text-white max-w-[224px] xl:max-w-full text-[16px] xl:text-[18px] pl-[30px] pb-[40px] font-bold xl:font-extrabold absolute bottom-0 ">
            Яхтинг
          </p>
          <a href="www.google.com">
            <img
              src="/img/arrow.svg"
              className="w-[40px] h-[40px] absolute right-4 top-4"
            />
          </a>
        </div>

        <div
          className="relative uppercase rounded-3xl col-span-1 md:col-span-2 h-[400px] md:h-[350px] xl:h-[400px]"
          style={{
            background:
              "linear-gradient(to bottom, transparent, rgba(1, 130, 190, 0) 30%, rgba(1, 101, 147, 0.5) 70%, rgba(0, 71, 102, 0.85) 100%), url('/img/5.png') no-repeat center center / cover",
          }}
        >
          <p className="w-full text-white max-w-[224px] xl:max-w-full text-[16px] xl:text-[18px] pl-[30px] pb-[40px] font-bold xl:font-extrabold absolute bottom-0 ">
            Рыболовные Экспедиции
          </p>
          <a href="www.google.com">
            <img
              src="/img/arrow.svg"
              className="w-[40px] h-[40px] absolute right-4 top-4"
            />
          </a>
        </div>
      </div>
    </>
  );
}
