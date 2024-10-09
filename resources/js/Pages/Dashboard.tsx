import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function Dashboard() {
    const { data, setData, post, processing, errors, reset } = useForm({
        nombre: "",
        cantidad: "",
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route("gastos"));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <GuestLayout>
                                <Head title="Register" />

                                <form onSubmit={submit}>
                                    <div>
                                        <InputLabel
                                            htmlFor="nombre"
                                            value="Nombre"
                                        />

                                        <TextInput
                                            id="nombre"
                                            name="nombre"
                                            value={data.nombre}
                                            className="mt-1 block w-full"
                                            autoComplete="nombre"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("nombre", e.target.value)
                                            }
                                            required
                                        />

                                        <InputError
                                            message={errors.nombre}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="cantidad"
                                            value="cantidad"
                                        />

                                        <TextInput
                                            id="cantidad"
                                            type="number"
                                            name="cantidad"
                                            value={data.cantidad}
                                            className="mt-1 block w-full"
                                            autoComplete="cantidad"
                                            onChange={(e) =>
                                                setData("cantidad", e.target.value)
                                            }
                                            required
                                        />

                                        <InputError
                                            message={errors.cantidad}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <PrimaryButton
                                            className="w-full flex justify-center"
                                            disabled={processing}
                                        >
                                            Enviar
                                        </PrimaryButton>
                                    </div>
                                </form>
                            </GuestLayout>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
