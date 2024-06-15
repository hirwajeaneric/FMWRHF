import { useFormContext } from "react-hook-form";
import { inputStyles } from "./ApplyLoanForm";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
    const formMethods = useFormContext();
    const navigate = useNavigate();
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
            <div className='flex justify-between items-center'>
                {window.location.pathname.split('/')[1] === '1' ? <></> : <button type='button' className='text-white bg-slate-800 py-2 px-4 rounded-md' onClick={() => navigate(`/${Number(window.location.pathname.split('/')[1]) - 1}`)}>Previous</button>}
                {window.location.pathname.split('/')[1] === '4' ? <></> : <button type='button' className='text-white bg-slate-800 py-2 px-4 rounded-md' onClick={() => navigate(`/${Number(window.location.pathname.split('/')[1]) + 1}`)}>Next</button>}
                {window.location.pathname.split('/')[1] === '4' && <input type="submit" className='text-white bg-slate-800 py-2 px-4 rounded-md cursor-pointer' />}
            </div>
        </div>
    )
}

export default UserInfo;