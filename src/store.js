import { create } from "zustand";

let useStore = create((set) => ({
    step: 4,
    setStep: (step) => set({ step }),

    isSubmitted: false,
    setIsSubmitted: (isSubmitted) => set({ isSubmitted }),

    personalInfo: {
        name: "",
        email: "",
        phone: "",
    },

    setPersonalInfo: (type, payload) => {
        let fields = {
            set_name: "name",
            set_email: "email",
            set_phone: "phone",
        };
        if (!fields[type]) throw new Error(`type ${type} is not supported`);

        let key = fields[type];
        set(({ personalInfo }) => ({
            personalInfo: {
                ...personalInfo,
                [key]: payload[key],
            },
        }));
    },

    errors: {
        name: "",
        email: "",
        phone: "",
    },

    setErrors: (type, payload) => {
        let fields = {
            set_name_message: "name",
            set_email_message: "email",
            set_phone_message: "phone",
        };

        if (!fields[type]) throw new Error(`type ${type} is not supported`);

        let key = fields[type];
        set(({ errors }) => ({
            errors: {
                ...errors,
                [key]: payload[key],
            },
        }));
    },

    nameMessage: "",
    setNameMessage: (nameMessage) => set({ nameMessage }),

    emailMessage: "",
    setEmailMessage: (emailMessage) => set({ emailMessage }),

    phoneMessage: "",
    setPhoneMessage: (phoneMessage) => set({ phoneMessage }),

    planType: "monthly",
    setPlanType: (planType) => set({ planType }),

    plan: "arcade",
    setPlan: (plan) => set({ plan }),

    addons: [],
    selectAddon: (addon) =>
        set(({ addons }) => {
            if (!addons.includes(addon)) {
                return { addons: [...addons, addon] };
            } else {
                return { addons: addons.filter((a) => a != addon) };
            }
        }),
}));

function generateSelectors(store) {
    store.use = {};

    for (let key of Object.keys(store.getState())) {
        store.use[key] = () => store((store) => store[key]);
    }
}

generateSelectors(useStore);

export default useStore;
