import {GlobeIcon} from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-200 text-sm text-gray-500" >
        <div className="px-7 py-3">
            <p>Brazil</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense px-8 py-3">
            <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2">
                <GlobeIcon className="h-5 mr-1 text-green-700" />Carbon neural since 2007
            </div>
            <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                <p>Publicidade</p>
                <p>Negócios</p>
                <p>Como funciona a Pesquisa</p>
            </div>
            <div className="flex justify-center space-x-8 md:ml-auto">
                <p>Privacidade</p>
                <p>Termos</p>
                <p>Configurações</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer