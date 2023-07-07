import { plans } from "../data";
import useStore from "../store";
import { formatMoney, priceSuffix } from "../utlities";

export default function PlanSummary() {
    let plan = useStore.use.plan();
    let planType = useStore.use.planType();
    let setStep = useStore.use.setStep();

    let { name, price } = plans.find((p) => p.value == plan);

    return (
        <div className="flex items-center justify-between">
            <div className="flex flex-col items-start">
                <span className="text-[#02295a] font-bold text-sm">
                    {name} ({planType})
                </span>
                <button
                    className="underline text-[#98999D] text-sm hover:text-[#473dff]"
                    onClick={() => setStep(2)}
                >
                    Change
                </button>
            </div>

            <span className="text-[#02295a] font-bold text-sm">
                {formatMoney(price[planType])}/{priceSuffix(planType)}
            </span>
        </div>
    );
}
