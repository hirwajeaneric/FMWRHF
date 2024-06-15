import { Form } from '@/components/ui/form';
import { useForm, FormProvider } from 'react-hook-form';
import { Outlet } from 'react-router-dom';
import { z } from 'zod';

export const inputStyles = 'rounded-md border-2 border-slate-600 py-1 px-3 text-slate-600';

const formSchema = z.object({
    "First name": z.string({
        required_error: 'First name is required',
    }),
    "Last name": z.string({
        required_error: 'Last name is required',
    }),
    "Email": z.string({
        required_error: 'Email is required',
    }).email({
        message: 'Invalid email',
    }),
    "Mobile number": z.string({
        required_error: 'Mobile number is required',
        description: 'Must be in the format 07xxxxxxxx',
    }),
    "Position": z.enum(["Teacher", "School Director", "Other"]),
    "Marital Status": z.enum(["Single", "Married", "Divorced", "Widowed"]),
    "Gender": z.enum(["Male", "Female", "Other"]),
    "National Id": z.string({
        required_error: 'National Id is required',
    }),
    "Date of birth": z.date({
        required_error: 'Date of birth is required',
    }),
    "Number of dependencies": z.number({
        required_error: 'Number of dependencies is required',
    }),
    "Work school": z.string({
        required_error: 'Work school is required',
    }),
    "Monthly salary": z.number({
        required_error: 'Monthly salary is required',
    }),
    "Amount requested": z.number({
        required_error: 'Amount requested is required',
    }),
    "Repayment period": z.number({
        required_error: 'Repayment period is required',
    }),
    "Bank account number": z.string({
        required_error: 'Bank account number is required',
    }),
    "Work contract": z.string({
        required_error: 'Work contract is required',
    }),
});

export type ApplyFormDataTypes = z.infer<typeof formSchema>;

const ApplyLoanForm = () => {
    const methods = useForm<ApplyFormDataTypes>({
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

    const onSubmit = async (data: ApplyFormDataTypes) => {
        console.log(data);
        console.log(methods.formState.errors);
    }

    return (
        <div className='flex flex-col items-center w-full bg-white'>
            <FormProvider {...methods}>
                <Form {...methods}>
                    <form onSubmit={methods.handleSubmit(onSubmit)} className='flex flex-col gap-2'>
                        <Outlet />
                    </form>
                </Form>
            </FormProvider>
        </div>
    );
}

export default ApplyLoanForm;