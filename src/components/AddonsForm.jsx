import { addons } from "../data";
import useStore from "../store";
import Addon from "./Addon";
import FormButtons from "./FormButtons";
import FormHeading from "./FormHeading";
import FormSummary from "./FormSummary";
import StepForm from "./StepForm";

export default function AddonsForm() {
    let step = useStore.use.step();
    let setStep = useStore.use.setStep();

    function handleSubmit(e) {
        e.preventDefault();

        setStep(step + 1);
    }

    return (
        <StepForm onSubmit={handleSubmit} className="flex flex-col h-full">
            <FormHeading>Pick add-ons</FormHeading>

            <FormSummary>
                Add-ons help enhance your gaming experience.
            </FormSummary>

            <AddonsList />
            <FormButtons />
        </StepForm>
    );
}

function AddonsList() {
    let planType = useStore.use.planType();

    return (
        <div className="space-y-3">
            {addons.map((a) => (
                <Addon
                    key={a.value}
                    name={a.name}
                    value={a.value}
                    summary={a.summary}
                    price={a.price[planType]}
                />
            ))}
        </div>
    );
}
