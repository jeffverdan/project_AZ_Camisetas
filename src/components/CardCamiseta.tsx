import { DataCamisaType } from '@/interfaces/Camisetas'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    camiseta: DataCamisaType
}

function CardCamiseta({ camiseta }: Props) {
    return (
        <Link key={camiseta.id} href={`camiseta/${camiseta.id}`} className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                    src={camiseta.imagem}
                    alt={camiseta.nome}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{camiseta.nome}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{camiseta.preco}</p>
        </Link>
    )
}

export default CardCamiseta