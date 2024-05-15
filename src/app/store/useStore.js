import { create } from "zustand";

const optionPrices = {
  barbeque: 50,
  photograph: 150,
  russian_guide: 300,
  alcohol: 10,
  fishing: 60,
};

const useStore = create((set) => ({
  name: "",
  lastname: "",
  startDate: null,
  endDate: null,
  email: "",
  phone: "",
  address: "",
  members: {
    old: 0,
    children: 0,
  },
  boat: "",
  date: "",
  fishing: false,
  title: "",
  messengerToChat: {
    telegram: true,
    viber: false,
    whatsup: false,
  },
  options: {
    barbeque: false,
    photograph: false,
    russian_guide: false,
    alcohol: false,
    fishing: false,
  },
  excursionTitle: "",
  excursionPrice: 0,
  totalPrice: 0,
  setMessengerToChat: (messenger) =>
    set(() => ({
      messengerToChat: {
        telegram: messenger === "telegram",
        viber: messenger === "viber",
        whatsup: messenger === "whatsup",
      },
    })),
  setOptions: (option, value) =>
    set((state) => {
      const updatedOptions = {
        ...state.options,
        [option]: value,
      };
      const optionsPrice = Object.entries(updatedOptions).reduce(
        (acc, [key, val]) => acc + (val ? optionPrices[key] : 0),
        0
      );
      return {
        options: updatedOptions,
        totalPrice: state.excursionPrice + optionsPrice,
      };
    }),
  setName: (name) => set({ name }),
  setExcursionTitle: (excursionTitle) => set({ excursionTitle }),
  setLastname: (lastname) => set({ lastname }),
  setEmail: (email) => set({ email }),
  setPhone: (phone) => set({ phone }),
  setStartData: (startDate) => set({ startDate }),
  setEndData: (endDate) => set({ endDate }),
  setAddress: (address) => set({ address }),
  setMembers: (members) => set({ members }),
  setOldMembers: (old) =>
    set((state) => ({
      members: { ...state.members, old: old < 0 ? 0 : old },
    })),
  setChildrenMembers: (children) =>
    set((state) => ({
      members: { ...state.members, children: children < 0 ? 0 : children },
    })),
  setBoat: (boat) => set({ boat }),
  setDate: (date) => set({ date }),
  setFishing: (fishing) => set({ fishing }),
  setTitle: (title) => set({ title }),
  setExcursionPrice: (excursionPrice) =>
    set((state) => ({
      excursionPrice,
      totalPrice:
        excursionPrice +
        Object.entries(state.options).reduce(
          (acc, [key, val]) => acc + (val ? optionPrices[key] : 0),
          0
        ),
    })),
  setTotalPrice: (totalPrice) => set({ totalPrice }),
}));

export default useStore;
