import { Input } from "@nextui-org/input";
import { MailIcon } from '@/Components/icons';
interface props {
    key: number,
    id?: string,
    value?: string,
    label?: string,
    placeholder?: string,
    cambio?: any,
    tipo?: string,
    activarIcon?: boolean,
    textInput?: string
}
function InputsComponent({ key, id, value, label, placeholder, cambio, tipo, activarIcon, textInput = "" }: props) {

    return (
        <div >
            <Input
                key={key}
                id={id}
                type={tipo}
                label={label}
                labelPlacement="outside"
                onChange={cambio}
                placeholder={placeholder}   
                value={value}
                radius="full"
                endContent={
                    (function () {
                        if (activarIcon) {
                            return <MailIcon className="text-2xl text-default-600 pointer-events-none flex-shrink-0" />
                        } else {
                            return textInput
                        }
                    })()
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
                        "mt-3",
                        "shadow-xl",
                        "bg-default-200/50",
                        "dark:bg-default/60",
                        "backdrop-blur-xl",
                        "backdrop-saturate-200",
                        "hover:bg-default-200/70",
                        "dark:hover:bg-default/70",
                        "group-data-[focus=true]:bg-default-200/50",
                        "dark:group-data-[focus=true]:bg-default/60",
                        "!cursor-text",
                    ],
                }}
            />
        </div>
    );
}
export default InputsComponent;
