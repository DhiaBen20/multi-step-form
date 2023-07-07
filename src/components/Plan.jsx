import useStore from "../store";
import { formatMoney, priceSuffix } from "../utlities";

export default function Plan({ plan }) {
    let activePlan = useStore.use.plan();
    let setPlan = useStore.use.setPlan();
    let type = useStore.use.planType();

    let isActive = activePlan == plan.value;

    return (
        <div
            className={`rounded-lg border flex items-start md:flex-col gap-3 md:flex-1 md:gap-8 py-3.5 px-3 cursor-pointer hover:border-[#534C9A] ${
                isActive ? "border-[#534C9A] bg-[hsl(243,100%,62%)]/5" : ""
            }`}
            onClick={() => setPlan(plan.value)}
        >
            <input
                type="radio"
                name="plan"
                value={plan.value}
                checked={isActive}
                className="opacity-0"
                readOnly
                hidden
            />
            <img src={plan.icon} alt={""} />

            <div>
                <h3 className="font-[500] text-[#02295a]">{plan.name}</h3>
                <p className="text-sm text-[#9699ab] mb-0.5">
                    {formatMoney(plan.price[type])}/{priceSuffix(type)}
                </p>
                {plan.discount[type] && (
                    <p className="text-xs text-[#02295a]">
                        {plan.discount[type]}
                    </p>
                )}
            </div>
        </div>
    );
}
