import { FC, FormEvent, Fragment, useCallback, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import useDebounce from '../../hooks/useDebounce'

export interface IBaseSelect {
  id: number
  name: string
}

export interface ISearch {
  data: IBaseSelect[]
  onChange: (select: IBaseSelect) => void
  debouncedValue: string
  placeholder: string
}

 const Search: FC<ISearch> = ({ data, placeholder, onChange, debouncedValue }) => {
  const [selected, setSelected] = useState<{id: number, name: string}>({id: 0, name: ""})
  const [query, setQuery] = useState('')
  const debouncedValue = useDebounce<string>(query, 2000)

  const filteredData =
    query === ''
      ? data
      : data.filter((obj: IBaseSelect) =>
          obj.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        )

  const changeHandler = (e: IBaseSelect) => {
    setSelected(e)
    onChange(e)
  }

  const inputHandler = useCallback((e: FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value)
    onInput(e.currentTarget.value)
  }, [debouncedValue])

  return (
    <div className="w-72">
      <Combobox value={selected} onChange={changeHandler}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(search: IBaseSelect) => search.name}
              onChange={inputHandler}
              placeholder={placeholder}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <p>ok</p>
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {filteredData.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredData.map((obj: any) => (
                  <Combobox.Option
                    key={obj.id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={obj}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {obj.name}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <p>ok</p>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default Search;
