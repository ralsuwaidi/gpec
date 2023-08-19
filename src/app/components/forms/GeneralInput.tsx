import { Label, TextInput } from "flowbite-react";

export default function GeneralInput() {
    return (<>
        <div className='flex  gap-3'>
            <div className='flex-1'>
                <div className="mb-1 block">
                    <Label
                        htmlFor="firstName"
                        value="First Name"
                    />
                </div>
                <TextInput
                    id="firstName"
                    placeholder="First"
                    required
                    type="text"
                />
            </div>
            <div className='flex-1'>
                <div className="mb-1 block">
                    <Label
                        htmlFor="lastName"
                        value="Last Name"
                    />
                </div>
                <TextInput
                    id="lastName"
                    required
                    placeholder='Last'
                    type="text"
                />
            </div>
        </div>
        <div className='flex  gap-3'>
            <div className='flex-1'>
                <div className="mb-1 block">
                    <Label
                        htmlFor="email"
                        value="Email"
                    />
                </div>
                <TextInput
                    id="email"
                    placeholder="Email"
                    required
                    type="email"
                />
            </div>
            <div className='flex-1'>
                <div className="mb-1 block">
                    <Label
                        htmlFor="phone"
                        value="Phone"
                    />
                </div>
                <TextInput
                    id="phone"
                    required
                    placeholder='Phone'
                    type="text"
                />
            </div>
        </div>
        <div className='flex  gap-3'>
            <div className='flex-1'>
                <div className="mb-1 block">
                    <Label
                        htmlFor="DOB"
                        value="Date of Birth"
                    />
                </div>
                <TextInput
                    id="DOB"
                    placeholder="02/12/1994"
                    required
                    type="text"
                />
            </div>
            <div className='flex-1'>
                <div className="mb-1 block">
                    <Label
                        htmlFor="nationality"
                        value="Nationality"
                    />
                </div>
                <TextInput
                    id="nationality"
                    required
                    placeholder='Nationality'
                    type="text"
                />
            </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>

    </>

    )
}