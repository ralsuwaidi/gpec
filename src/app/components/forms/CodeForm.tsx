
import { Button, Checkbox, Label, TextInput, Accordion, Textarea } from 'flowbite-react';
import GeneralInput from './GeneralInput';


export default function LiteratureForm() {
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
                            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                            has a design equivalent in our Figma file.
                        </p>

                    </Accordion.Content>
                </Accordion.Panel>

            </Accordion>

            <GeneralInput />




            {/* ###  */}
            {/* LITERATURE SPECIFIC CODE  */}
            {/* ###  */}


            <div>
                <p className='font-semibold'>AI Literature</p>
                <p className='text-sm text-gray-500'>Create a short story using AI text generation based on the prompt below. The story should not surpass three prompts.</p>
                <div className=' w-full text-center bg-gray-50 border-gray-200 border rounded-md mt-4 mb-2 py-1'>
                    <p className='text-sm '>A story about an old man finding his youth in year 2072</p>
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
                                <span>Upload your text file</span>
                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">TXT, DOCX, up to 2MB</p>
                    </div>
                </div>
            </div>



            <TextInputElement title="AI Model Used" placeholder="ChatGPT-4" />

            <TextInputElement title="First Text Input" placeholder="Write a prompt about" />
            <TextareaElement title="First Generated Text" placeholder="There was once a ..." />

            <TextInputElement title="Second Text Input" placeholder="Write a prompt about" />
            <TextareaElement title="Second Generated Text" placeholder="There was once a ..." />

            <TextInputElement title="Third Text Input" placeholder="Write a prompt about" />
            <TextareaElement title="Third Generated Text" placeholder="There was once a ..." />





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


function TextInputElement(props: any) {
    return (
        <>
            <div className='flex-1'>
                <div className="mb-1 block">
                    <Label
                        htmlFor={props.title}
                        value={props.title}
                    />
                </div>
                <TextInput
                    id={props.title}
                    required
                    sizing={props.sizing}
                    placeholder={props.placeholder}
                    type="text"
                />
            </div>
        </>
    )
}


function TextareaElement(props: any) {
    return (
        <div
            className="flex-1"
            id={props.title}
        >
            <div className="mb-1 block">
                <Label
                    htmlFor={props.title}
                    value={props.title}
                />
            </div>
            <Textarea className=' text-sm'
                id={props.title}
                placeholder={props.placeholder}
                required
                rows={4}
            />
        </div>
    )
}