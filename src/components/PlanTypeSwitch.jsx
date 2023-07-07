import useStore from "../store";
import Switch from "./Switch";

export default function PlanTypeSwitch() {
    let planType = useStore.use.planType();
    let setPlanType = useStore.use.setPlanType();

    return (
        <div className="flex items-center justify-center gap-6 rounded-lg bg-[#F8F9FE] py-3 mt-4">
            <span
                className={`text-sm ${
                    planType == "monthly" ? "text-[#02295a]" : "text-[#98999D]"
                }`}
            >
                Monthly
            </span>
            <div>
                <input
                    type="hidden"
                    name="planType"
                    value={planType}
                    readOnly
                />
                <Switch
                    isToggled={planType == "yearly"}
                    onChange={(state) =>
                        setPlanType(state ? "yearly" : "monthly")
                    }
                />
            </div>
            <span
                className={`text-sm ${
                    planType == "yearly" ? "text-[#02295a]" : "text-[#98999D]"
                }`}
            >
                Yearly
            </span>
        </div>
    );
}
