export let plans = [
    {
        name: "Arcade",
        value: "Arcade".toLocaleLowerCase().replaceAll(" ", "-"),
        icon: "/icon-arcade.svg",
        price: {
            monthly: 9,
            yearly: 90,
        },
        discount: {
            yearly: "2 months free",
        },
    },

    {
        name: "Advanced",
        value: "Advanced".toLocaleLowerCase().replaceAll(" ", "-"),
        icon: "/icon-advanced.svg",
        price: {
            monthly: 12,
            yearly: 120,
        },
        discount: {
            yearly: "2 months free",
        },
    },

    {
        name: "Pro",
        value: "Pro".toLocaleLowerCase().replaceAll(" ", "-"),
        icon: "/icon-pro.svg",
        price: {
            monthly: 15,
            yearly: 150,
        },
        discount: {
            yearly: "2 months free",
        },
    },
];

export let addons = [
    {
        name: "Online service",
        summary: "Access to multiplayer games",
        value: "Online service".toLocaleLowerCase().replaceAll(" ", "-"),
        price: {
            monthly: 1,
            yearly: 10,
        },
    },

    {
        name: "Larger storage",
        value: "Larger storage".toLocaleLowerCase().replaceAll(" ", "-"),
        summary: "Extra 1TB of clould save",
        price: {
            monthly: 2,
            yearly: 20,
        },
    },

    {
        name: "Customizable profile",
        value: "Customizable profile".toLocaleLowerCase().replaceAll(" ", "-"),
        summary: "Custom theme on your profile",
        price: {
            monthly: 2,
            yearly: 20,
        },
    },
];
