import useStore from "../store";
import { formatMoney, priceSuffix } from "../utlities";
import Checkbox from "./Checkbox";

export default function Addon({ name, summary, price, value }) {
    let planType = useStore.use.planType();
    let addons = useStore.use.addons();
    let selectAddon = useStore.use.selectAddon();
    let isChecked = addons.includes(value);

    return (
        <div
            className={`rounded-lg border flex items-center gap-3 py-3.5 px-3 cursor-pointer hover:border-[#534C9A] ${
                isChecked ? "border-[#534C9A] bg-[hsl(243,100%,62%)]/5" : ""
            }`}
            onClick={() => selectAddon(value)}
        >
            <Checkbox name="addon" value={value} isChecked={isChecked} />

            <div className="flex-1">
                <h3 className="font-[500] text-[#02295a]">{name}</h3>
                <p className="text-sm text-[#9699ab] mb-0.5">{summary}</p>
            </div>

            <span className="text-xs text-[#534C9A]">
                +{formatMoney(price)}/{priceSuffix(planType)}
            </span>
        </div>
    );
}
