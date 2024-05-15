"use client";
import useStore from "../store/useStore";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/semantic-ui.css";
export default function Page() {
  const {
    name,
    setName,
    lastname,
    setLastname,
    email,
    setEmail,
    phone,
    setPhone,
    options,
    startDate,
    endDate,
    setOptions,
    messengerToChat,
    setMessengerToChat,
    members,
    setChildrenMembers,
    setOldMembers,
    setAddress,
    address,
    totalPrice,
    excursionTitle,
    excursionPrice,
  } = useStore();
  const [wishes, setWishes] = useState("");
  const [transfer, setTransfer] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("Visa masterCard");
  const [message, setMessage] = useState("123\n123");

  function sendMessageToTelegram() {
    const botToken = "6650030375:AAH8iYgzieoF2WRtKRLOMPd16_YOth1Fh58"; // Replace with your bot token
    const channelId = "-1002118882079"; // Replace with your channel ID or username

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    var messenger = ``;
    if (messengerToChat.telegram) {
      messenger = `telegram`;
    } else if (messengerToChat.viber) {
      messenger = `viber`;
    } else if (messengerToChat.whatsup) {
      messenger = `whatsup`;
    }
    var countMembers = `${members.old != 0 ? `Взрослые: ${members.old}` : ""} ${
      members.children != 0 ? `Дети: ${members.children}` : ""
    }`;
    var date = `${startDate ? startDate.toLocaleDateString("ru-RU") : ""} ${
      endDate ? endDate.toLocaleDateString("ru-RU") : ""
    }`;
    var addService = "";
    if (options.barbeque) {
      addService += "Барбекю ";
    }
    if (options.photograph) {
      addService += "Фотограф ";
    }
    if (options.russian_guide) {
      addService += "Русский гид ";
    }
    if (options.alcohol) {
      addService += "Алкоголь ";
    }
    if (options.fishing) {
      addService += "Рыбалка ";
    }
    const message = `Имя: ${name}\nФамилия: ${lastname}\nemail: ${email}\nтелефон: ${phone}\nКуда звонить, писать: ${messenger}\nУчастники: ${countMembers}\nДата: ${date}\nТрансфер: ${
      transfer ? `Нужен\n Адресс: ${address}` : "Нет"
    }\nДоп услуги: ${addService}${
      wishes ? `\n${wishes}` : ""
    }\nСпособ оплаты: ${paymentMethod}\nФул цена: ${totalPrice}`;
    const payload = {
      chat_id: channelId,
      text: message,
      parse_mode: "Markdown",
    };

    try {
      const response = fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Message sent successfully");
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  }

  function send(e) {
    e.preventDefault();
    sendMessageToTelegram();
  }
  return (
    <main className="bg-white">
      <div className="container  mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-center w-full ">
          <div className="md:w-1/2 md:p-[50px] flex flex-col items-start justify-start">
            <h4 className="text-[24px] font-semibold l-140">
              Оплата бронирования
            </h4>
            <div className="mt-[20px] w-full h-[1px] bg-black"></div>

            <form>
              <div className="flex mt-[30px] flex-col gap-x-[20px] md:flex-row items-start xl:justify-between">
                <div className="flex flex-col items-start justify-start">
                  <label className="font-bold text-[16px]">Имя</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ангелина"
                    className="p-5 placeholder:text-blue-text rounded-3xl mt-[16px] w-full xl:w-[233px] bg-light-blue"
                  />
                </div>
                <div className="flex flex-col items-start justify-start">
                  <label className="font-bold text-[16px]">Фамилия</label>
                  <input
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    placeholder="Андрусенко"
                    className="p-5 placeholder:text-blue-text rounded-3xl mt-[16px] w-full xl:w-[233px] bg-light-blue"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col mt-5 items-start justify-start">
                <label className="font-bold text-[16px]">E-mail</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="andrusenko15@bk.ru"
                  className="p-5 placeholder:text-blue-text rounded-3xl mt-[16px] w-full  bg-light-blue"
                />
              </div>
              <div className="flex w-full flex-col mt-5 items-start justify-start">
                <label className="font-bold text-[16px]">
                  Введите номер телефона
                </label>
                <div className="text-[12px]">
                  по которому мы сможем с вами связаться в мессенджере:{" "}
                </div>
                <div className="flex xl:justify-start gap-x-[20px] justify-start h-[60px]  rounded-3xl items-center  w-[280px] md:w-full xl:w-[404px]">
                  <div className="flex items-center gap-x-[8px] justify-start">
                    <input
                      type="radio"
                      name="paymentMethodMessenger"
                      checked={messengerToChat.telegram}
                      onClick={() => setMessengerToChat("telegram")}
                      id="telegram"
                    />
                    <label
                      htmlFor="telegram"
                      className="font-bold text-[12px] gap-x-[2px] flex items-center justify-center"
                    >
                      <img src="/img/telegram_3.svg" className="w-[15px]" />
                      Telegram
                    </label>
                  </div>
                  <div className="flex items-center gap-x-[8px] justify-start">
                    <input
                      type="radio"
                      name="paymentMethodMessenger"
                      id="whatsapp"
                      checked={messengerToChat.whatsup}
                      onClick={() => setMessengerToChat("whatsup")}
                    />
                    <label
                      htmlFor="whatsapp"
                      className="font-bold text-[12px] gap-x-[2px] flex items-center justify-center"
                    >
                      <img src="/img/whatsup_4.svg" className="w-[15px]" />
                      WhatsApp
                    </label>
                  </div>
                  <div className="flex items-center gap-x-[8px] justify-start">
                    <input
                      type="radio"
                      name="paymentMethodMessenger"
                      checked={messengerToChat.viber}
                      onClick={() => setMessengerToChat("viber")}
                      id="viber"
                    />
                    <label
                      htmlFor="viber"
                      className="font-bold text-[12px] gap-x-[2px] flex items-center justify-center"
                    >
                      <img src="/img/viber_4.svg" className="w-[15px]" />
                      Viber
                    </label>
                  </div>
                </div>

                <div className="flex  xl:justify-start  justify-start h-[60px] pl-[30px] xl:pl-[30px] rounded-3xl items-center bg-light-blue w-[280px] md:w-full xl:w-[485px]">
                  <PhoneInput
                    country="ru"
                    inputClass="input_phone_class"
                    searchClass="search_phone_class"
                    buttonClass="button_phone_class"
                    containerClass="container_phone_class"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                  />
                </div>
              </div>
              <div className="flex w-full relative flex-col mt-5 items-start justify-start">
                <label className="font-bold text-[16px]">
                  Количество участников
                </label>

                <div
                  id="members_content"
                  className="w-[250px]  top-[90px]  flex-col   h-[120px]  rounded-3xl"
                >
                  <div className="flex items-center w-full justify-between  pt-[20px]">
                    <div className="max-w-[70px]">Взрослые</div>
                    <div className="flex items-center justify-start gap-x-[15px]">
                      <img
                        className="cursor-pointer"
                        onClick={() => setOldMembers(members.old - 1)}
                        src="/img/minus_2.svg"
                      />
                      <div>{members.old}</div>
                      <img
                        className="cursor-pointer"
                        onClick={() => setOldMembers(members.old + 1)}
                        src="/img/plus_2.svg"
                      />
                    </div>
                  </div>
                  <div className="flex items-center w-full justify-between  pt-2 pb-[26px]">
                    <div className="max-w-[70px]">Дети до 12 лет</div>
                    <div className="flex items-center justify-start gap-x-[15px]">
                      <img
                        className="cursor-pointer"
                        onClick={() => setChildrenMembers(members.children - 1)}
                        src="/img/minus_2.svg"
                      />
                      <div>{members.children}</div>
                      <img
                        className="cursor-pointer"
                        onClick={() => setChildrenMembers(members.children + 1)}
                        src="/img/plus_2.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-light-blue text-blue-text flex items-center justify-between px-[25px] rounded-3xl w-[240px]  h-[60px]">
                <div className="text-[14px]">
                  {startDate && endDate
                    ? `${startDate.toLocaleDateString(
                        "ru-RU"
                      )} - ${endDate.toLocaleDateString("ru-RU")}`
                    : "Выберите дату"}
                </div>
                {!startDate && (
                  <img src="/img/arrow_down.svg" alt="Arrow Down" />
                )}
              </div>
              <div className="flex w-full flex-col mt-5 items-start justify-start">
                <label className="font-bold text-[16px]">
                  Нужен ли трансфер?
                </label>
                <div className="flex xl:justify-start gap-x-[20px] justify-start h-[60px] rounded-3xl items-center w-[280px] md:w-full xl:w-[404px]">
                  <div className="flex items-center gap-x-[4px] justify-start">
                    <input
                      checked={transfer}
                      onChange={() => setTransfer(true)}
                      type="radio"
                      name="transfer"
                      id="needed"
                    />
                    <label htmlFor="needed" className="font-bold text-[12px]">
                      Нужен
                    </label>
                  </div>
                  <div className="flex items-center gap-x-[4px] justify-start">
                    <input
                      checked={!transfer}
                      onChange={() => setTransfer(false)}
                      type="radio"
                      name="transfer"
                      id="not_needed"
                    />
                    <label
                      htmlFor="not_needed"
                      className="font-bold text-[12px]"
                    >
                      Нет
                    </label>
                  </div>
                </div>
              </div>
              {transfer && (
                <>
                  <div className="flex w-full flex-col  items-start justify-start">
                    <label className="font-bold text-[16px]">
                      Введите ваш адрес:
                    </label>
                    <input
                      placeholder="Адрес"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-8 placeholder:text-blue-text placeholder:text-[14px] bg-light-blue h-[60px] rounded-3xl mt-4"
                    />
                  </div>
                  <div className="mt-5 text-[12px] max-w-[300px] text-grey-text">
                    Трансфер к данному месту оплачивается отдельно — менеджер
                    вас ознакомит с вариантами{" "}
                  </div>
                </>
              )}

              <div className="flex w-full flex-col mt-5 items-start justify-start">
                <label className="font-bold text-[16px]">
                  Выберите дополнительные услуги
                </label>
                <div className="mt-2 text-[12px]  text-grey-text">
                  которые могут вам понадобиться и менеджер сформирует для вас
                  варианты
                </div>
                <div className="flex gap-x-[20px] items-center mt-[20px] justify-start">
                  <div className="flex items-center justify-start">
                    <input
                      id="barbeque"
                      type="checkbox"
                      checked={options.barbeque}
                      onChange={(e) => setOptions("barbeque", e.target.checked)}
                      className="form-checkbox h-[20px] w-7 text-indigo-600  transition duration-150 ease-in-out rounded border-gray-300"
                    />
                    <label
                      htmlFor="barbeque"
                      className="ml-[8px] block text-[12px]  xl:mb-0 text-blue-text"
                    >
                      Барбекю
                      <br />
                      50€
                    </label>
                  </div>
                  <div className="flex items-center justify-start">
                    <input
                      id="photograph"
                      type="checkbox"
                      checked={options.photograph}
                      onChange={(e) =>
                        setOptions("photograph", e.target.checked)
                      }
                      className="form-checkbox h-[20px] w-7 text-indigo-600  transition duration-150 ease-in-out rounded border-gray-300"
                    />
                    <label
                      htmlFor="photograph"
                      className="ml-[8px] block text-[12px]  xl:mb-0 text-blue-text"
                    >
                      Фотограф
                      <br />
                      от 150€
                    </label>
                  </div>
                  <div className="flex items-center justify-start">
                    <input
                      id="russian gid"
                      type="checkbox"
                      checked={options.russian_guide}
                      onChange={(e) =>
                        setOptions("russian_guide", e.target.checked)
                      }
                      className="form-checkbox h-[20px] w-7 text-indigo-600  transition duration-150 ease-in-out rounded border-gray-300"
                    />
                    <label
                      htmlFor="russian gid"
                      className="ml-[8px] block text-[12px]  xl:mb-0 text-blue-text"
                    >
                      Русский гид
                      <br />
                      от 300€
                    </label>
                  </div>
                  <div className="flex items-center justify-start">
                    <input
                      id="alco"
                      type="checkbox"
                      checked={options.alcohol}
                      onChange={(e) => setOptions("alcohol", e.target.checked)}
                      className="form-checkbox h-[20px] w-7 text-indigo-600  transition duration-150 ease-in-out rounded border-gray-300"
                    />
                    <label
                      htmlFor="alco"
                      className="ml-[8px] block text-[12px]  xl:mb-0 text-blue-text"
                    >
                      Алкоголь
                      <br />
                      от 10€
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col mt-5 items-start justify-start">
                <textarea
                  placeholder="Введите ваши пожелания при необходимости"
                  value={wishes}
                  onChange={(e) => {
                    setWishes(e.target.value);
                  }}
                  className="w-full px-8 placeholder:pt-4 placeholder:text-blue-text placeholder:text-[14px] bg-light-blue h-[60px] rounded-3xl mt-4"
                />
              </div>
              <div className="flex w-full flex-col mt-5 items-start justify-start">
                <label className="font-bold text-[16px] text-[#F69E18]">
                  Я согласен на условия акции
                </label>
                <div className="text-[12px]">
                  Перед началом экскурсии вносится полная оплата. По завершении
                  экскурсии мы вернем вам 20 евро за ваш отзыв на нашем сайте
                  или в телеграм-канале.
                </div>
                <div className="flex items-center mt-5 justify-start relative">
                  <input
                    id="in-sale"
                    type="checkbox"
                    className="custom-checkbox form-checkbox appearance-none h-[20px] w-[20px] rounded-md border-[#F69E18] text-[#F69E18] cursor-pointer focus:ring-[#F69E18] focus:border-[#F69E18]"
                  />
                  <label
                    htmlFor="in-sale"
                    className="ml-[8px] block text-[12px] text-blue-text"
                  >
                    Участвую в акции
                  </label>
                </div>
              </div>
              <div className="flex w-full flex-col mt-5 items-start justify-start">
                <label className="font-bold text-[16px]">
                  Выберите способ оплаты:
                </label>
                <div className="flex xl:justify-start gap-x-[20px] justify-start h-[60px]  rounded-3xl items-center  w-[280px] md:w-full xl:w-[404px]">
                  <div className="flex items-center gap-x-[4px] justify-start">
                    <input
                      onClick={() => {
                        setPaymentMethod("Visa masterCard");
                      }}
                      checked={
                        paymentMethod == "Visa masterCard" ? true : false
                      }
                      type="radio"
                      name="paymentMethodPayment"
                      id="visa_mastercard"
                    />
                    <label
                      htmlFor="visa_mastercard"
                      className="font-bold text-[16px]"
                    >
                      Visa, MasterCard
                    </label>
                  </div>
                  <div className="flex items-center gap-x-[4px] justify-start">
                    <input
                      onClick={() => {
                        setPaymentMethod("PayPal");
                      }}
                      checked={paymentMethod == "PayPal" ? true : false}
                      type="radio"
                      name="paymentMethodPayment"
                      id="paypal"
                    />
                    <label htmlFor="paypal" className="font-bold text-[16px]">
                      PayPal
                    </label>
                  </div>
                  <div className="flex items-center gap-x-[4px] justify-start">
                    <input
                      onClick={() => {
                        setPaymentMethod("Mir");
                      }}
                      checked={paymentMethod == "Mir" ? true : false}
                      type="radio"
                      name="paymentMethodPayment"
                      id="mir"
                    />
                    <label htmlFor="mir" className="font-bold text-[16px]">
                      Мир
                    </label>
                  </div>
                </div>
              </div>
              <button
                onClick={send}
                className="xl:w-[440px] bg-blue py-[18px] text-[16px] text-white rounded-3xl"
              >
                Оплатить
              </button>
              <div className="flex mt-[5px] max-w-[362px] md:max-w-full xl:max-w-[362px] mb-10 items-center">
                <input
                  id="terms"
                  type="checkbox"
                  className="form-checkbox h-[32px] w-7 text-indigo-600  transition duration-150 ease-in-out rounded border-gray-300"
                />
                <label
                  htmlFor="terms"
                  className="ml-3 block text-[12px]  xl:mb-0 text-blue-text"
                >
                  {" "}
                  Нажимая на кнопку, я соглашаюсь с политикой конфиденциальности
                  сайта
                </label>
              </div>
            </form>
          </div>
          <div className="md:w-1/2 bg-light-blue md:p-[50px] flex flex-col items-start justify-start">
            <h4 className="text-[24px] font-semibold l-140">
              Ваше путешествие:
            </h4>
            <div className="mt-[20px] w-full h-[1px] bg-black"></div>
            <div className="flex w-full mt-5 items-start justify-between">
              <div className="max-w-[226px] text-[18px]">{excursionTitle}</div>
              <div className="ml-auto font-semibold text-[18px] l-140">
                {excursionPrice} €
              </div>
            </div>
            <div className="mt-[20px] w-full h-[1px] bg-black"></div>
            <div className="flex w-full text-blue mt-5 items-start justify-between">
              <div className="max-w-[226px] text-[18px]">
                Количество участников:
              </div>
              <div className="ml-auto font-semibold text-[18px] l-140">
                {members.old + members.children}
              </div>
            </div>
            <div className="mt-[20px] w-full h-[1px] bg-black"></div>
            <div className="flex w-full mt-5 items-start justify-between">
              <div className="max-w-[226px] text-[18px]">Итого:</div>
              <div className="ml-auto font-semibold text-[18px] l-140">
                {totalPrice} €
              </div>
            </div>
            <div className="flex w-full mt-5 items-start justify-between">
              <div className="max-w-[286px] text-[18px]">
                К оплате сейчас по депозиту
              </div>
              <div className="ml-auto font-semibold text-[18px] l-140">
                {totalPrice > 0 ? "10 €" : "0"}
              </div>
            </div>
            <div className="p-5 bg-white text-[12px] mt-[30px]">
              Итоговая сумма списания может отличаться, если валюта вашей карты
              отличается от валюты тура (уточните в вашем банке курс
              конвертации)
            </div>
            <div className="text-grey-text text-[12px] opacity-75 mt-[10px]">
              *Если передумаете, то в течение 24 часов после оплаты оформим 100%
              возврат*
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
