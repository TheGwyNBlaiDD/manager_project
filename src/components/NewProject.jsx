import { useRef } from "react";
import Input from "./Input.jsx";
import Model from "./Model.jsx";

export default function NewProject({onAdd, onCancel}) {
    const model = useRef();

    const title = useRef();
    const description = useRef();
    const dueData = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueData.current.value;

        if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
            model.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueData: enteredDueDate
        });
    }

    return (
        <>
        <Model ref={model} buttonCaption="Close">
            <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value.</p>
            <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field.</p>
        </Model>
        <div className="w-[35rem] mt-16 ">
            <menu className="flex items-center justify-end gap-4 my-4">
            <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} label="Description" isTextarea />
                <Input type="date" ref={dueData} label="Due Date"/>
            </div>
        </div>
        </>
    );
}