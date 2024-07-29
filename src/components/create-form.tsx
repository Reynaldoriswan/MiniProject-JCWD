"use client";
import { saveContact } from "../../lib/action";
import { useFormState } from "react-dom";
import { SubmitButton } from "./button";
const CreateForm = () => {

    const [state, formAction] = useFormState(saveContact, null);

    return (
        <div>
            <form action={formAction}>
                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900"
                    >Full Name
                    </label>
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className="bg-gray-50 border border-gray-30
                    text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full
                    p-2.5" placeholder="full name..." 
                    />
                    <div id="name-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="phone" 
                    className="block text-sm font-medium text-gray-900"
                    >
                        Phone Number
                    </label>
                    <input 
                    type="text" 
                    name="phone" 
                    id="phone" 
                    className="bg-gray-50 border border-gray-30
                    text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full
                    p-2.5" placeholder="Phone Number..." 
                    />
                    <div id="phone-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
                    </div>
                    <div id="phone-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900"
                    > Events Name
                    </label>
                    <input 
                    type="text" 
                    name="events" 
                    id="events" 
                    className="bg-gray-50 border border-gray-30
                    text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full
                    p-2.5" placeholder="Events Name..." 
                    />
                    <div id="events-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.events}</p>
                    </div>
                    <div id="events-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900"
                    > Location
                    </label>
                    <input 
                    type="text" 
                    name="Location" 
                    id="Location" 
                    className="bg-gray-50 border border-gray-30
                    text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full
                    p-2.5" placeholder="Location..." 
                    />
                    <div id="events-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.Location}</p>
                    </div>
                    <div id="Location-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                    </div>
                </div>

                <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900"
                    > Prize Ticket
                    </label>
                    <input 
                    type="text" 
                    name="Prize" 
                    id="Prize" 
                    className="bg-gray-50 border border-gray-30
                    text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full
                    p-2.5" placeholder="Prize Ticket..." 
                    />
                    <div id="events-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.Error?.Location}</p>
                    </div>
                    <div id="Location-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 text-sm text-red-500">{state?.message}</p>
                    </div>
                </div>
                <SubmitButton label="save"/>
            </form>
        </div>
    )
}

export default CreateForm;