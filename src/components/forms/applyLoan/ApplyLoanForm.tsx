import { ApplyFormInputTypes } from '@/types/applyFormTypes';
import { useForm, FormProvider } from 'react-hook-form';
import { Outlet } from 'react-router-dom';

export const inputStyles = 'rounded-md border-2 border-slate-600 py-1 px-3 text-slate-600';

const ApplyLoanForm = () => {
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
                </form>
            </FormProvider>
        </div>
    );
}

export default ApplyLoanForm;