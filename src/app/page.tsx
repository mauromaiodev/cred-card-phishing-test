import { CardForm } from "@/components/CardForm";

export default function Home() {
  return (
    <>
      <div className="gap-8 flex flex-col">
        <span className="font-bold text-4xl">Verifique se seu cartão já foi clonado</span>
        <div className="w-full h-12 rounded-lg">
          Preencha as informações abaixo:
        </div>
        <div className="border-dashed w-full h-full rounded-lg">

        <CardForm />
        </div>
      </div>
    </>
  );
}
