import { useFormContext } from "react-hook-form";
import { inputStyles } from "./ApplyLoanForm";
import { calculatePaymentPeriod } from "@/utils/helperFunctions";
import { useNavigate } from "react-router-dom";

const LoanDetails = () => {
    const formMethods = useFormContext();
    const navigate = useNavigate();
    const { register, setValue, getValues } = formMethods;

    return (
        <div className="flex flex-col gap-2">
            <h2 className='text-2xl font-bold'>Contact Information</h2>
            <div className='flex flex-col gap-1'>
                <label htmlFor="Monthly salary">Monthly salary</label>
                <input
                    id='Monthly salary'
                    className={inputStyles}
                    type="number"
                    placeholder="Monthly salary"
                    {...register("Monthly salary", { required: true, min: 100000 })}
                />

                <label htmlFor="Amount requested">Amount requested</label>
                <input
                    id='Amount requested'
                    className={inputStyles}
                    type="number"
                    placeholder="Amount requested"
                    {
                    ...register(
                        "Amount requested",
                        {
                            required: true,
                            max: 5000000,
                            min: 100000,
                            onChange(event) {
                                const paymentPeriod = calculatePaymentPeriod(event.target.value, getValues("Monthly salary"));
                                setValue("Repayment period", paymentPeriod);
                            },
                        }
                    )
                    }
                />


                <label htmlFor="Repayment perid">Repayment period</label>
                <input
                    id='Repayment perid'
                    className={inputStyles}
                    type="number"
                    placeholder="Repayment period"
                    {...register("Repayment period", { required: true, max: 15, min: 2 })}
                />

                <label htmlFor="Bank account number">Bank account number</label>
                <input
                    id='Bank account number'
                    className={inputStyles}
                    type="text"
                    placeholder="Bank account number"
                    {...register("Bank account number", { required: true })}
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

export default LoanDetails;