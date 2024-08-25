import { Input } from "../Input"

export const CardForm = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <form className="w-full h-full flex flex-col gap-4 justify-center items-center">
               <Input typeText="text" placeholder="Digite o número do cartão" label="Número do cartão"/>
               <Input typeText="text" placeholder="Nome do proprietário" label="Nome do proprietário"/>
               <Input typeText="text" placeholder="Validade" label="Validade"/>
               <Input typeText="text" placeholder="CVV" label="CVV"/>

               <button className="w-1/2 h-12 rounded-lg bg-blue-500 text-white">Verificar</button>
            </form>
        </div>
    )
}