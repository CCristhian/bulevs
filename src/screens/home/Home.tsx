import { Popover } from "@headlessui/react";
import React from "react";
import { DefaultDisclosure, DefaultHeader } from "../../components";
import { getSesions } from "../../endpoints/sesions/sesionsEndpoint";

function Home() {
  const sesions = getSesions();

  return (
    <>
      <DefaultHeader />
      <div className="">
        <div className="flex centre">
          <h1 className="text-4xl p-2">Facultad de Informática</h1>
        </div>
        <div className="flex centre">
          <h1 className="text-2xl p-2">Consejo Directivo</h1>
        </div>
        <Popover className="relative">
          <Popover.Button>Filtros</Popover.Button>

          <Popover.Panel className="absolute z-10">
            <div className="grid grid-cols-2">
              <a href="/analytics">Analytics</a>
              <a href="/engagement">Engagement</a>
              <a href="/security">Security</a>
              <a href="/integrations">Integrations</a>
            </div>

            <img src="/solutions.jpg" alt="" />
          </Popover.Panel>
        </Popover>

        <div className="px-4 pt-4">
          <div className="w-5/6 p-2 mx-auto bg-white rounded-2xl">
            <DefaultDisclosure sesions={sesions} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
