import useStore from "../store";
import AddonSummary from "./AddonSummary";
import FormButtons from "./FormButtons";
import FormHeading from "./FormHeading";
import FormSummary from "./FormSummary";
import PlanSummary from "./PlanSummary";
import StepForm from "./StepForm";
import TotalPrice from "./TotalPrice";

export default function SummaryForm() {
    let addons = useStore.use.addons();
    let setIsSubmitted = useStore.use.setIsSubmitted();
    let isSubmitted = useStore.use.isSubmitted();

    function handleSubmit(e) {
        e.preventDefault();
        setIsSubmitted(true);
    }

    return !isSubmitted ? (
        <StepForm onSubmit={handleSubmit}>
            <FormHeading>Finishing up</FormHeading>
            <FormSummary>
                Double-check everything looks OK before confirming.
            </FormSummary>

            <div className="bg-[#F8F9FE] rounded-lg px-4 py-5">
                <PlanSummary />
                {addons.length > 0 && (
                    <div className="pt-4 mt-3 space-y-4 border-t">
                        {addons.map((addon) => (
                            <AddonSummary key={addon} addon={addon} />
                        ))}
                    </div>
                )}
            </div>

            <TotalPrice />

            <FormButtons />
        </StepForm>
    ) : (
        <>
            <img
                src="/icon-thank-you.svg"
                alt=""
                className="w-14 md:w-20 md:mt-20 mx-auto mt-12 mb-6"
            />
            <FormHeading centerText>Thank you!</FormHeading>
            <FormSummary centerText>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </FormSummary>
        </>
    );
}
