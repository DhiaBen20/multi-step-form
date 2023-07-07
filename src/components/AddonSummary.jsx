import { addons } from "../data";
import useStore from "../store";
import { formatMoney, priceSuffix } from "../utlities";

export default function AddonSummary({ addon }) {
    let planType = useStore.use.planType();
    let { name, price } = addons.find((a) => a.value == addon);

    return (
        <div className="flex items-center justify-between">
            <span className="text-[#98999D] text-sm">{name}</span>
            <span className="text-[#02295a] text-sm">
                +{formatMoney(price[planType])}/{priceSuffix(planType)}
            </span>
        </div>
    );
}
