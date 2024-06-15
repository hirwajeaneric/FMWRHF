import { ApplyFormInputTypes } from '@/types/applyFormTypes';
import { useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Outlet, useNavigate } from 'react-router-dom';

export const inputStyles = 'rounded-md border-2 border-slate-600 py-1 px-3 text-slate-600';

const ApplyLoanForm = () => {
    const navigate = useNavigate();
    useEffect(() => {
        console.log(Number(window.location.pathname.split('/')[1]));
        
    }, []);

    const methods = useForm<ApplyFormInputTypes>({
        defaultValues: {
            "First name": "John",
            "Last name": "Doe",
            "Email": "johndoe@gmail.com",
            "Mobile number": "",
            "Position": "Teacher",
            "Marital Status": "Single",
            "Gender": "Male",
            "National Id": "",
            "Date of birth": new Date(),
            "Number of dependencies": 1,
            "Work school": "",
            "Monthly salary": 0,
            "Amount requested": 0,
            "Repayment period": 0,
            "Bank account number": "",
            "Work contract": "",
        },
    });

    const onSubmit = async (data: ApplyFormInputTypes) => {
        console.log(data);
        console.log(methods.formState.errors);
    }

    return (
        <div className='flex flex-col items-center w-full bg-white'>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-col gap-2'>
                    <Outlet />
                    <div className='flex justify-between items-center'>
                        {window.location.pathname.split('/')[1] === '1' ? <></> : <button type='button' className='text-white bg-slate-800 py-2 px-4 rounded-md' onClick={() => navigate(`/${Number(window.location.pathname.split('/')[1])-1}`)}>Previous</button>}
                        {window.location.pathname.split('/')[1] === '4' ? <></> : <button type='button' className='text-white bg-slate-800 py-2 px-4 rounded-md' onClick={() => navigate(`/${Number(window.location.pathname.split('/')[1])+1}`)}>Next</button>}
                        {window.location.pathname.split('/')[1] === '4' && <input type="submit" className='text-white bg-slate-800 py-2 px-4 rounded-md cursor-pointer' />}
                    </div>
                </form>
            </FormProvider>
        </div>
    );
}

export default ApplyLoanForm;