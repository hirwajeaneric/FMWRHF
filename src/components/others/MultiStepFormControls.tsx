import { useNavigate } from "react-router-dom"

type Props = {
    currentPage: string;
    valid: boolean;
}

const MultiStepFormControls = ({ currentPage, valid }: Props) => {
    const navigate = useNavigate();
    return (
        <>
            {currentPage === '1'
                ? <></>
                : <button
                    type='button'
                    className='text-white bg-slate-800 py-2 px-4 rounded-md'
                    onClick={() => navigate(`/${Number(currentPage) - 1}`)}>
                    Previous
                </button>
            }
            {currentPage === '4'
                ? <></>
                : <button
                    type='button'
                    disabled={!valid}
                    className='text-white bg-slate-800 py-2 px-4 rounded-md disabled:bg-slate-600'
                    onClick={() => navigate(`/${Number(currentPage) + 1}`)}>
                    Next
                </button>
            }
            {currentPage === '4'
                &&
                <input
                    type="submit"
                    className='text-white bg-slate-800 py-2 px-4 rounded-md cursor-pointer'
                />
            }
        </>
    )
}

export default MultiStepFormControls