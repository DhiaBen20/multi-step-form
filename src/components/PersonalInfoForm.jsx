import useStore from "../store";
import FormButtons from "./FormButtons";
import FormGroup from "./FormGroup";
import FormHeading from "./FormHeading";
import FormSummary from "./FormSummary";
import Input from "./Input";
import Label from "./Label";
import StepForm from "./StepForm";

export default function PersonalInfoForm() {
    let step = useStore.use.step();
    let setStep = useStore.use.setStep();

    let { name, email, phone } = useStore.use.personalInfo();
    let setPersonalInfo = useStore.use.setPersonalInfo();

    let {
        name: nameMessage,
        email: emailMessage,
        phone: phoneMessage,
    } = useStore.use.errors();

    let setErrors = useStore.use.setErrors();

    function handleSubmit(e) {
        e.preventDefault();

        if (!name.trim()) {
            setErrors(`set_name_message`, {
                name: "This field is required",
            });
        }

        if (!email.trim()) {
            setErrors(`set_email_message`, {
                email: "This field is required",
            });
        }

        if (!phone.trim()) {
            setErrors(`set_phone_message`, {
                phone: "This field is required",
            });
        }

        if (name.trim() && email.trim() && phone.trim()) {
            setStep(step + 1);
        }
    }

    function handleChange(target) {
        let value = target.value;
        let name = target.id;
        let message = value ? "" : "This field is required";

        setPersonalInfo(`set_${name}`, { [name]: value });
        setErrors(`set_${name}_message`, { [name]: message });
    }

    return (
        <StepForm onSubmit={handleSubmit} className="flex flex-col h-full">
            <FormHeading>Personal info</FormHeading>
            <FormSummary>
                please provide your name, email address, and phone number.
            </FormSummary>

            <div className="space-y-4">
                <FormGroup>
                    <div className="flex justify-between">
                        <Label htmlFor="name">Name</Label>
                        {nameMessage && (
                            <span className="text-sm text-[#ed3548] font-[500]">
                                {nameMessage}
                            </span>
                        )}
                    </div>
                    <Input
                        id="name"
                        placeholder="e.g. Stephen king"
                        value={name}
                        onChange={(e) => handleChange(e.target)}
                        isError={Boolean(nameMessage)}
                    />
                </FormGroup>

                <FormGroup>
                    <div className="flex justify-between">
                        <Label htmlFor="email">Email Address</Label>
                        {emailMessage && (
                            <span className="text-sm text-[#ed3548] font-[500]">
                                {emailMessage}
                            </span>
                        )}
                    </div>
                    <Input
                        type="email"
                        id="email"
                        placeholder="e.g. stephenking@lorem.com"
                        value={email}
                        onChange={(e) => handleChange(e.target)}
                        isError={Boolean(emailMessage)}
                    />
                </FormGroup>

                <FormGroup>
                    <div className="flex justify-between">
                        <Label htmlFor="phone">Phone Number</Label>
                        {phoneMessage && (
                            <span className="text-sm text-[#ed3548] font-[500]">
                                {phoneMessage}
                            </span>
                        )}
                    </div>
                    <Input
                        type="tel"
                        id="phone"
                        placeholder="e.g. +1 234 567 890"
                        value={phone}
                        onChange={(e) => handleChange(e.target)}
                        isError={Boolean(phoneMessage)}
                    />
                </FormGroup>
            </div>

            <FormButtons />
        </StepForm>
    );
}
