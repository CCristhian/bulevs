import React from "react";
import { Disclosure } from "@headlessui/react";

interface sesion {
  id_sesion: number;
  nombre_ambito_padre: string;
  nombre_ambito: string;
  nombre_sesion: string;
  descripcion: string;
  fecha: string;
  hora_inicio: string;
  hora_fin: string;
  ejecutada: boolean;
}

interface sesions {
  sesions: sesion[];
}

const DefaultDisclosure = ({ sesions }: sesions) => {
  return (
    <>
      {sesions.map((sesion) => {
        return (
          <div className="pb-2">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-blue-500 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span>{sesion.nombre_sesion}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    {sesion.descripcion}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        );
      })}
    </>
  );
};

export default DefaultDisclosure;
