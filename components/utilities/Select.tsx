import React, { FC, Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import UpChevron from "../../public/vectors/up_chevron.svg";
import { IBaseSelect } from "./Search";

export interface ISelect {
    data: IBaseSelect[]
    defaultTitle: string
    onChange: (select: IBaseSelect) => void
}

const Select: FC<ISelect> = ({ data, defaultTitle, onChange }) => {
  const [selected, setSelected] = useState({id: 0, name: ""});

  const handler = (e: IBaseSelect) => {
    setSelected(e)
    onChange(e)
  }

  return (
    <div className="w-72">
      <Listbox value={selected} onChange={handler}>
        {({ open }) => (
          <div className="relative mt-1">
            <Listbox.Button
              className={`relative w-full cursor-pointer bg-white text-[17px] py-2 pl-3 pr-10 text-left focus:outline-none 
                                    focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 
                                    focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 ${
                                      open ? "rounded-t" : "rounded"
                                    }`}
            >
              <span className="block truncate">{selected.name || defaultTitle}</span>
              <span
                className={`pointer-events-none absolute duration-300 ease-in right-3 flex inset-y-0 items-center ${
                  open ? "-rotate-0" : "rotate-180"
                }`}
              >
                <UpChevron className="w-3 h-3 text-black" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              enter="transition ease-in duration-180"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-180"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute px-4 rounded-b max-h-60 w-full overflow-auto bg-white ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {data.map((obj) => (
                  <Listbox.Option
                    key={obj.id}
                    className={({ active }) =>
                      `relative cursor-pointer border-t border-solid text-[17px] select-none py-2 px-0 ${
                        active ? " text-blue-500" : "text-black"
                      }`
                    }
                    value={obj}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {obj.name}
                        </span>
                        {/* {selected ? (
                          <span className="absolute inset-y-0 left-0 flex text-amber-600">
                            <UpChevron className="w-3 h-3 text-black" />
                          </span>
                        ) : null} */}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        )}
      </Listbox>
    </div>
  );
};

export default Select;