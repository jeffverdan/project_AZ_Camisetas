import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

const subCategories = [
    { name: 'Masculino', href: '#' },
    { name: 'Feminino', href: '#' },
    { name: 'Infantil', href: '#' },
]

export default function FiltrosLateral() {
    const filters = [
        {
            id: 'color',
            name: 'Color',
            options: [
                { value: 'branco', label: 'Branco', checked: false },
                { value: 'preto', label: 'Preto', checked: false },
                { value: 'vermelho', label: 'Vermelho', checked: true },
                { value: 'bordo', label: 'Bordô', checked: false },
                { value: 'azul', label: 'Azul', checked: false },
                { value: 'amarelo', label: 'Amarelo', checked: false },
                { value: 'verde', label: 'Verde', checked: false },
            ],
        },
        {
            id: 'size',
            name: 'Tamanho',
            options: [
                { value: 'pp', label: 'PP', checked: false },
                { value: 'p', label: 'P', checked: false },
                { value: 'm', label: 'M', checked: false },
                { value: 'g', label: 'G', checked: false },
                { value: 'gg', label: 'GG', checked: false },
                { value: 'xg', label: 'XG', checked: true },
            ],
        },
    ];

    return (
        <form className="hidden lg:block">
            <h3 className="sr-only">Categories</h3>
            <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                {subCategories.map((category) => (
                    <li key={category.name}>
                        <a href={category.href}>{category.name}</a>
                    </li>
                ))}

                <li>
                    <div className="mt-6 max-w-md flex flex-col gap-x-4">
                        <label htmlFor="filtro-preco">
                            Preço
                        </label>
                        <input
                            id="filtro-preco"
                            name="filtro-preco"
                            type="text"
                            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            placeholder="R$ 0,00"
                        />
                    </div>
                </li>

                <li>
                    <div className="mt-6 max-w-md flex flex-col gap-x-4">
                        <label htmlFor="filtro-nome">
                            Nome
                        </label>
                        <input
                            id="filtro-nome"
                            name="filtro-nome"
                            type="text"
                            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            placeholder="Ex. Camisa regata lisa"
                        />
                    </div>
                </li>

                <li>
                    <div className="mt-6 max-w-md flex flex-col gap-x-4">
                        <button
                            type="submit"
                            className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Filtrar
                        </button>
                    </div>
                </li>
            </ul>

            {filters.map((section) => (
                <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                        <>
                            <h3 className="-my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                                    <span className="font-medium text-gray-900">{section.name}</span>
                                    <span className="ml-6 flex items-center">
                                        {open ? (
                                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                        ) : (
                                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                        )}
                                    </span>
                                </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                                <div className="space-y-4">
                                    {section.options.map((option, optionIdx) => (
                                        <div key={option.value} className="flex items-center">
                                            <input
                                                id={`filter-${section.id}-${optionIdx}`}
                                                name={`${section.id}[]`}
                                                defaultValue={option.value}
                                                type="checkbox"
                                                defaultChecked={option.checked}
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label
                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                className="ml-3 text-sm text-gray-600"
                                            >
                                                {option.label}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            ))}
        </form>
    )
}
