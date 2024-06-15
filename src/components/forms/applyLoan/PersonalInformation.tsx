import { useFormContext } from "react-hook-form";
import { inputStyles } from "./ApplyLoanForm";

const PersonalInformation = () => {
    const formMethods = useFormContext();
    const { register } = formMethods;

    return (
        <div className="flex flex-col gap-2">
            <h2 className='text-2xl font-bold'>Personal Information</h2>
            <div className='flex flex-col gap-1'>
                <div className='flex flex-col gap-2 text-gray-800'>
                    <p className='font-bold'>Gender</p>
                    <label htmlFor="Male">
                        <span>Male</span>
                        <input className={inputStyles} {...register("Gender")} type="radio" value="Male" />
                    </label>
                    <label htmlFor="Female">
                        <span>Female</span>
                        <input className={inputStyles} {...register("Gender")} type="radio" value="Female" />
                    </label>
                    <label htmlFor="Other">
                        <span>Other</span>
                        <input className={inputStyles} {...register("Gender")} type="radio" value="Other" />
                    </label>
                </div>
                <input
                    className={inputStyles}
                    type="datetime-local"
                    placeholder="Date of birth"
                    {...register("Date of birth", {})}
                />
                <input
                    className={inputStyles}
                    type="text"
                    maxLength={16}
                    placeholder="National Id"
                    {...register("National Id", { maxLength: 16 })}
                />
                <div className='flex flex-col gap-2 text-gray-800'>
                    <p className='font-bold'>Marital Status</p>
                    <label htmlFor="Single">
                        <span>Single</span>
                        <input className={inputStyles} {...register("Marital Status", { required: true })} type="radio" value="Single" />
                    </label>
                    <label htmlFor="Married">
                        <span>Married</span>
                        <input className={inputStyles} {...register("Marital Status", { required: true })} type="radio" value="Married" />
                    </label>
                    <label htmlFor="Married">
                        <span>Divorced</span>
                        <input className={inputStyles} {...register("Marital Status", { required: true })} type="radio" value="Divorced" />
                    </label>
                    <label htmlFor="Married">
                        <span>Widowed</span>
                        <input className={inputStyles} {...register("Marital Status", { required: true })} type="radio" value="Widowed" />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default PersonalInformation;