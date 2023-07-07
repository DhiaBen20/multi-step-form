export function formatMoney(number) {
    return Number(number).toLocaleString(undefined, {
        style: "currency",
        currency: "usd",
        minimumFractionDigits: 0,
    });
}

export function priceSuffix(duration) {
    switch (duration) {
        case "monthly":
            return "mo";
        case "yearly":
            return "yr";
        default:
            throw new Error(`unsupported duration value`);
    }
}
