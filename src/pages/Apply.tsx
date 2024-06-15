import ApplyLoanForm from "@/components/forms/applyLoan/ApplyLoanForm"

const Apply = () => {
  return (
    <div className="flex flex-col gap-2 items-center py-10">
        <h1 className='text-3xl font-bold mb-5'>Apply for a loan</h1>
        <ApplyLoanForm />
    </div>
  )
}

export default Apply