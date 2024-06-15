import { useFormContext } from "react-hook-form";
import { inputStyles } from "./ApplyLoanForm";
import { useState } from "react";
import MultiStepFormControls from "@/components/others/MultiStepFormControls";

const Work = () => {
    const formMethods = useFormContext();
    const { register, setValue, getValues } = formMethods;
    const currentPage = window.location.pathname.split('/')[1];
    const [valid, setValid] = useState(false);
    
    return (
        <div className="flex flex-col gap-2">
            <h2 className='text-2xl font-bold'>Work and dependencies</h2>
            <div className='flex flex-col gap-1'>
                <label htmlFor="Work position">Work position</label>
                <select
                    id='Work position'
                    className={inputStyles}
                    {...register("Position", { required: true })}
                >
                    <option value="Teacher">Teacher</option>
                    <option value="School Director">School Director</option>
                    <option value="Other">Other</option>
                </select>
                <label htmlFor="Number of dependencies">Number of dependencies</label>
                <input
                    id='Number of dependencies'
                    className={inputStyles}
                    type="number"
                    placeholder="Number of dependencies"
                    {...register("Number of dependencies", {})}
                />

                <label htmlFor="Work school">Work school</label>
                <input
                    id='Work school'
                    className={inputStyles}
                    type="text"
                    placeholder="Work school"
                    {...register("Work school", { required: true })}
                />

                <label htmlFor="Amount requested">Work contract</label>
                <input
                    id='Work contract'
                    className={inputStyles}
                    type="file"
                    {
                    ...register(
                        "Work contract",
                        {
                            required: true,
                            onChange(event) {
                                const file = event.target.files[0];
                                console.log(file.name);
                                setValue("Work contract", file.filename);
                                
                                if (getValues("Work contract") !== '' && getValues("Work school") !== '' && getValues("Position") !== '' && getValues("Number of dependencies") !== '') {
                                    setValid(true);
                                } else {
                                    setValid(false)
                                }
                            },
                        }
                    )
                    }
                />
            </div>
            <div className='flex justify-between items-center'>
                <MultiStepFormControls currentPage={currentPage} valid={valid} />
            </div>
        </div>
    )
}

export default Work;