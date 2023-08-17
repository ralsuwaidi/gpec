
import { Button, Checkbox, Label, TextInput, Accordion } from 'flowbite-react';


export default function ArtForm() {
    return (
        <form className="flex flex-col gap-4 mt-3">

            <Accordion>

                <Accordion.Panel>
                    <Accordion.Title>
                        <p className='text-gray-500 font-normal text-sm '>
                            Find out more
                        </p>
                    </Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400 font-normal text-sm">
                            <p>
                                Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                                has a design equivalent in our Figma file.
                            </p>
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>

            </Accordion>

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

            <div>
                <p className='font-semibold'>AI Art</p>
                <p className='text-sm text-gray-500'>Upload a picture of the following prompt (feel free to add or edit this prompt):</p>
                <div className=' w-full text-center bg-gray-50 border-gray-200 border rounded-md mt-4 mb-2 py-1'>
                    <p className='text-sm '>Sadness through the theme of Japanese line art</p>
                </div>
            </div>

            <div className="col-span-full ">
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 hover:bg-gray-50">
                    <div className="text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                        </svg>
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                            <label htmlFor="file-upload" className="relative cursor-pointer rounded-md  font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span>Upload a file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                </div>
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



            <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">
                    Remember me
                </Label>
            </div>
            <div className='max-w-[400px]'>
                <Button type="submit" color="dark">
                    Submit
                </Button>
            </div>
        </form>
    )
}