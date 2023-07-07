import useStore from "../store";
import StepIndicator from "./StepIndicator";

let steps = [
    {
        step: 1,
        name: "Your info",
    },
    {
        step: 2,
        name: "Select plan",
    },
    {
        step: 3,
        name: "Add-ons",
    },
    {
        step: 4,
        name: "Summary",
    },
];

export default function Sidebar() {
    let step = useStore.use.step();

    return (
        <div className="sidebar-bg h-44 -mb-[70px] md:w-72 rounded-lg md:mb-[unset] md:h-[unset] md:px-8">
            <div className="md:flex-col md:justify-stretch flex justify-center gap-4 md:gap-6 pt-8">
                {steps.map((s) => (
                    <div key={s.step} className="flex items-center gap-4">
                        <StepIndicator isActive={step == s.step}>
                            {s.step}
                        </StepIndicator>
                        <div className="md:flex flex-col hidden">
                            <span className="text-[#F1EFFF] uppercase text-xs">
                                step {s.step}
                            </span>
                            <span className="text-white uppercase text-sm font-[500] tracking-widest">
                                {s.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
