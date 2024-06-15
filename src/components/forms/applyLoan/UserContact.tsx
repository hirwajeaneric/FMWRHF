import { useFormContext } from "react-hook-form";
import { inputStyles } from "./ApplyLoanForm";

const UserInfo = () => {
    const formMethods = useFormContext();
    const { register } = formMethods;

    return (
        <div className="flex flex-col gap-2">
            <h2 className='text-2xl font-bold'>Contact Information</h2>
            <div className='flex flex-col gap-1'>
                <input
                    className={inputStyles}
                    type="text"
                    placeholder="First name"
                    {...register("First name",
                        { required: true })
                    }
                />
                <input
                    className={inputStyles}
                    type="text"
                    placeholder="Last name"
                    {...register("Last name", { required: true })}
                />
                <input
                    className={inputStyles}
                    type="email"
                    placeholder="Email"
                    {...register("Email", { required: true, min: 8 })}
                />
                <input
                    className={inputStyles}
                    type="tel"
                    placeholder="Mobile number"
                    {...register("Mobile number", { required: true })}
                />
            </div>
        </div>
    )
}

export default UserInfo;