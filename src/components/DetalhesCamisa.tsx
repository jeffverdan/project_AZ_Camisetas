import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { DataCamisaType, VariacoesProdutoType } from '@/interfaces/Camisetas'
import Image from 'next/image';

const produto = {
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    descricao:
        `Nossas camisetas tem um tecido leve e confortável. Composto de 100% Algodão seu caimento é mais Slim e tem como principal diferencial não encolher e nem desbotar pós lavagem! Corte Mais justo, perfeito para uso no dia a dia!`,
};

const colors = [
    { name: 'Branco', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Preto', class: 'bg-gray-900', selectedClass: 'ring-gray-400' },
    { name: "Vermelho", class: 'bg-red-900', selectedClass: 'ring-gray-400' },
    { name: "Bordô", class: 'bg-red-200', selectedClass: 'ring-gray-400' },
    { name: "Azul", class: 'bg-blue-900', selectedClass: 'ring-gray-400' },
    { name: "Amarelo", class: 'bg-yellow-900', selectedClass: 'ring-gray-400' },
    { name: "Verde", class: 'bg-green-900', selectedClass: 'ring-gray-400' },
];

const reviews = { href: '#', average: 4, totalCount: 117 };

interface Props {
    camiseta: DataCamisaType
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function DetalhesCamiseta({ camiseta }: Props) {
    const [selectedColor, setSelectedColor] = useState();
    const [selectedSize, setSelectedSize] = useState();
    console.log(camiseta);


    return (
        <div className="bg-white">
            <div className="pt-6">

                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                    <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                        <img
                            src={camiseta.imagens?.[0].url || ''}
                            alt={camiseta.imagens?.[0].alt || ''}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src={camiseta.imagens?.[1].url || ''}
                                alt={camiseta.imagens?.[1].alt || ''}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                        <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
                            <img
                                src={camiseta.imagens?.[2].url || ''}
                                alt={camiseta.imagens?.[2].alt || ''}
                                className="h-full w-full object-cover object-center"
                            />
                        </div>
                    </div>
                    <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
                        <img
                            src={camiseta.imagens?.[3].url || ''}
                            alt={camiseta.imagens?.[3].alt || ''}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
                    <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{camiseta.nome}</h1>
                    </div>

                    {/* Options */}
                    <div className="mt-4 lg:row-span-3 lg:mt-0">
                        <h2 className="sr-only">Product information</h2>
                        <p className="text-3xl tracking-tight text-gray-900">{camiseta.preco}</p>

                        {/* Reviews */}
                        <div className="mt-6">
                            <h3 className="sr-only">Reviews</h3>
                            <div className="flex items-center">
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <StarIcon
                                            key={rating}
                                            className={classNames(
                                                reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                                                'h-5 w-5 flex-shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="sr-only">{reviews.average} out of 5 stars</p>
                                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    {reviews.totalCount} reviews
                                </a>
                            </div>
                        </div>

                        <form className="mt-10">
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">Variações</h3>

                                <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                                    <RadioGroup.Label className="sr-only">Escolha uma cor</RadioGroup.Label>
                                    <div className="flex items-center space-x-3">
                                        {colors?.map((cor) => (
                                            <RadioGroup.Option
                                                key={cor.name}
                                                value={cor.name}
                                                className={({ active, checked }) =>
                                                    classNames(
                                                        cor.selectedClass || '',
                                                        active && checked ? 'ring ring-offset-1' : '',
                                                        !active && checked ? 'ring-2' : '',
                                                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                                    )
                                                }
                                            >
                                                <RadioGroup.Label as="span" className="sr-only">
                                                    {cor.name}
                                                </RadioGroup.Label>
                                                <span
                                                    aria-hidden="true"
                                                    className={classNames(
                                                        cor.class,
                                                        'h-8 w-8 rounded-full border border-black border-opacity-10'
                                                    )}
                                                />
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>

                            {/* Sizes */}
                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-sm font-medium text-gray-900">Tamanhos</h3>
                                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                        Guia
                                    </a>
                                </div>

                                <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                    <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                                    <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                        {produto.sizes.map((size) => (
                                            <RadioGroup.Option
                                                key={size.name}
                                                value={size}
                                                disabled={!size.inStock}
                                                className={({ active }) =>
                                                    classNames(
                                                        size.inStock
                                                            ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                                            : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                                        active ? 'ring-2 ring-indigo-500' : '',
                                                        'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                                    )
                                                }
                                            >
                                                {({ active, checked }) => (
                                                    <>
                                                        <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                        {size.inStock ? (
                                                            <span
                                                                className={classNames(
                                                                    active ? 'border' : 'border-2',
                                                                    checked ? 'border-indigo-500' : 'border-transparent',
                                                                    'pointer-events-none absolute -inset-px rounded-md'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        ) : (
                                                            <span
                                                                aria-hidden="true"
                                                                className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                            >
                                                                <svg
                                                                    className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                    viewBox="0 0 100 100"
                                                                    preserveAspectRatio="none"
                                                                    stroke="currentColor"
                                                                >
                                                                    <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                </svg>
                                                            </span>
                                                        )}
                                                    </>
                                                )}
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>

                            <button
                                type="submit"
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                + Adicionar ao carrinho
                            </button>
                        </form>
                    </div>

                    <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                        {/* Description and details */}
                        <div>
                            <h3 className="sr-only">Descrição</h3>

                            <div className="space-y-6">
                                <p className="text-base text-gray-900">{produto.descricao}</p>

                                <div>
                                    <p className="text-base text-gray-900">TAMANHOS:</p>
                                    <p className="text-base text-gray-900">P: Altura 69,0 cm | Cintura 44,5 cm | Peito 48,5cm | Manga 19 cm</p>
                                    <p className="text-base text-gray-900">M: Altura 71,0 cm | Cintura 50,0 cm | Peito 52,5 cm | Manga 20 cm</p>
                                    <p className="text-base text-gray-900">G: Altura 74,0 cm | Cintura 53,5 cm | Peito 57, 0 cm | Manga 22 cm</p>
                                    <p className="text-base text-gray-900">GG: Altura 77 cm | Cintura 57,0 cm | Peito 61,5 cm | Manga 23 cm</p>
                                </div>
                                <p className="text-base text-gray-900">COMO ESCOLHO O TAMANHO E CORES?</p>
                                <p className="text-base text-gray-900">
                                    Pode escolher somente 1 tamanho por compra, caso queira mais de 1 tamanho compre no carrinho, cada compra com seu tamanho especifico, e as cores são escolhida no campo abaixo do preço, mais de 1 cor deve se colocar no carrinho, cada compra com cor especifica.
                                </p>

                            </div>
                        </div>

                        {/* <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {produto.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}

                        {/* <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{produto.details}</p>
              </div>
            </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
