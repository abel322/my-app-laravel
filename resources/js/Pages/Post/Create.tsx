import React from "react";
import { Link, useForm } from "@inertiajs/react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { MailIcon } from "@/Components/icons";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import InputsComponent from '@/Components/InputsComponent';
import SelectForm from "@/Components/selectForm";

// Define the types for form data and errors
interface FormData {
    title: string;
    description: string;
}

interface FormErrors {
    title?: string;
    description?: string;
}

const Create = ({ auth }: PageProps) => {
    const { data, setData, errors, post } = useForm<FormData>({
        title: "",
        description: "",
    });

    // Handle form submission
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("posts.store"));
    }
    const handleChange = (e: any) => setData(e.target.value);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <div className="container mx-auto max-w-7xl">
                <div>
                    <h1 className="mb-8 text-3xl font-bold mt-8">
                        <Link
                            href={route("posts.index")}
                            className="text-blue-600 font-bold hover:text-blue-700"
                        >
                            Posts
                        </Link>
                        <span className="font-medium text-blue-600"> / </span>
                        Create
                    </h1>
                </div>
                <div className="max-w-6xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <Input
                                    key="1"
                                    type="text"
                                    labelPlacement="outside"
                                    placeholder='cantidad'
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    radius="full"
                                    endContent={
                                        <MailIcon className="text-2xl text-default-600 pointer-events-none flex-shrink-0" />
                                    }
                                    classNames={{
                                        label: "text-black/50 dark:text-white/90",
                                        input: [
                                            "bg-transparent",
                                            "text-black/90 dark:text-white/90",
                                            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                                        ],
                                        innerWrapper: "bg-transparent",
                                        inputWrapper: [
                                            "shadow-xl",
                                            "bg-default-200/50",
                                            "dark:bg-default/60",
                                            "backdrop-blur-xl",
                                            "backdrop-saturate-200",
                                            "hover:bg-default-200/70",
                                            "dark:hover:bg-default/70",
                                            "dark:group-data-[focus=true]:bg-default/60",
                                            "!cursor-text",
                                        ],
                                    }}
                                />
                                <Input
                                    isDisabled
                                    type="email"
                                    label="Email"
                                    defaultValue="junior@nextui.org"
                                    className="max-w-xs"
                                />
                                <Button
                                    radius="full"
                                    className="mt-12 w-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                                >
                                    Enviar
                                </Button>
                                <SelectForm />
                                <input
                                    type="text"
                                    id="title"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    name="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />


                                {errors.title && (
                                    <span className="text-red-600 text-sm">
                                        {errors.title}
                                    </span>
                                )}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block text-gray-700">Description</label>
                                <textarea
                                    id="description"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                {errors.description && (
                                    <span className="text-red-600 text-sm">
                                        {errors.description}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="px-3 py-1.5  text-white bg-blue-500 rounded hover:bg-blue-600"
                            >
                                Save
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </AuthenticatedLayout>
    );
};

export default Create;
