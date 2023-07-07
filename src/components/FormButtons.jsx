import useStore from "../store";
import Button from "./Button";

export default function FormButtons() {
    let step = useStore.use.step();
    let setStep = useStore.use.setStep();
    let isSubmitted = useStore.use.isSubmitted();

    return (
        !isSubmitted && (
            <div className="fixed md:static md:mt-auto md:h-[unset] bottom-0 left-0 right-0 flex h-[73px] items-center px-4 py-4 md:px-0 md:py-0 bg-white">
                {step > 1 && (
                    <Button
                        variant="ghost"
                        type="button"
                        onClick={() => setStep(step - 1)}
                    >
                        Go Back
                    </Button>
                )}
                <span className="flex-1"></span>
                {step < 4 && <Button>Next Step</Button>}
                {step == 4 && <Button variant="secondary">Confirm</Button>}
            </div>
        )
    );
}
