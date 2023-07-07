import { addons, plans } from "../data";
import useStore from "../store";
import { formatMoney, priceSuffix } from "../utlities";

export default function TotalPrice() {
    let plan = useStore.use.plan();
    let planType = useStore.use.planType();
    let selectedAddons = useStore.use.addons();
    let planPrice = plans.find((p) => p.value == plan).price[planType];
    let addonsPrice = addons
        .filter((a) => selectedAddons.includes(a.value))
        .map((a) => a.price[planType])
        .reduce((a, b) => a + b, 0);

    return (
        <div className="flex items-center justify-between px-4 pt-6">
            <p className="text-[#98999D]">
                Total (per {planType.slice(0, -2)})
            </p>
            <p className="font-bold text-[hsl(243,100%,62%)]">
                +{formatMoney(planPrice + addonsPrice)}/{priceSuffix(planType)}
            </p>
        </div>
    );
}