import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormControl, FormDescription, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const UserInfo = () => {
    const formMethods = useFormContext();
    const navigate = useNavigate();
    
    return (
        <div className="flex flex-col gap-2">
            <h2 className='text-2xl font-bold'>Contact Information</h2>
            <FormDescription>
                Provide your contact information
            </FormDescription>

            <div className='flex flex-col gap-1'>
                <FormField 
                    control={formMethods.control}
                    name="First name"
                    render={({ field}) => (
                        <FormItem>
                            <FormLabel>First name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={formMethods.control}
                    name="Last name"
                    render={({ field}) => (
                        <FormItem>
                            <FormLabel>Last name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={formMethods.control}
                    name="Email"
                    render={({ field}) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField 
                    control={formMethods.control}
                    name="Mobile number"
                    render={({ field}) => (
                        <FormItem>
                            <FormLabel>Mobile number</FormLabel>
                            <FormControl>
                                <Input {...field} placeholder="0722123456" />
                            </FormControl>
                        </FormItem>
                    )}
                />                
            </div>
            <div className='flex justify-between items-center'>
                {window.location.pathname.split('/')[1] === '1' ? <></> : <Button type='button' onClick={() => navigate(`/${Number(window.location.pathname.split('/')[1]) - 1}`)}>Previous</Button>}
                {window.location.pathname.split('/')[1] === '4' ? <></> : <Button type='button' onClick={() => navigate(`/${Number(window.location.pathname.split('/')[1]) + 1}`)}>Next</Button>}
                {window.location.pathname.split('/')[1] === '4' && <input type="submit" className='text-white bg-slate-800 py-2 px-4 rounded-md cursor-pointer' />}
            </div>
        </div>
    )
}

export default UserInfo;