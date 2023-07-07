import AddonsForm from "./components/AddonsForm";
import SummaryForm from "./components/SummaryForm";
import PersonalInfoForm from "./components/PersonalInfoForm";
import PlanForm from "./components/PlanForm";
import Sidebar from "./components/Sidebar";
import useStore from "./store";

export default function App() {
    let step = useStore.use.step();

    return (
        <div className="md:p-4 md:flex w-full md:shadow-xl  md:shadow-neutral-600/15 md:h-[600px] md:max-w-4xl md:mx-4 lg:mx-0 pb-24 bg-white rounded-lg">
            <Sidebar />
            <div className="shadow-neutral-600/15 md:flex-1 md:col-span-3 md:shadow-none md:px-10 xl:px-14 px-6 py-8 mx-4 bg-white rounded-lg shadow-xl">
                {step == 1 && <PersonalInfoForm />}
                {step == 2 && <PlanForm />}
                {step == 3 && <AddonsForm />}
                {step == 4 && <SummaryForm />}
            </div>
        </div>
    );
}
