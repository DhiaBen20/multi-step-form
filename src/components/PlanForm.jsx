import { plans } from "../data";
import useStore from "../store";
import FormButtons from "./FormButtons";
import FormHeading from "./FormHeading";
import FormSummary from "./FormSummary";
import Plan from "./Plan";
import PlanTypeSwitch from "./PlanTypeSwitch";
import StepForm from "./StepForm";

export default function PlanForm() {
    let step = useStore.use.step();
    let setStep = useStore.use.setStep();

    function handleSubmit(e) {
        e.preventDefault();
        setStep(step + 1);
    }

    return (
        <StepForm onSubmit={handleSubmit} className="flex flex-col h-full">
            <FormHeading>Select your plan</FormHeading>
            <FormSummary>
                You have the option of monthly or yearly billing.
            </FormSummary>

            <PlansList />
            <PlanTypeSwitch />
            <FormButtons />
        </StepForm>
    );
}

function PlansList() {
    return (
        <div className="flex flex-col gap-3 md:gap-5 md:flex-row">
            {plans.map((plan) => (
                <Plan key={plan.value} plan={plan} />
            ))}
        </div>
    );
}
