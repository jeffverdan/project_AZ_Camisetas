type ResApiType =  { 
    id: number | string
    title: string
    price: string
    thumbnail: string
    available_quantity: number
  }

  type ImagensType = {
    id: string
    url: string
    alt: string
}

type VariacoesProdutoType = {
  id: string
  preco: string
  atributos: {
    nome: string
    valor_nome: string
  }
}

  type DataCamisaType =  { 
    id: number | string
    nome: string
    preco: string
    imagem: string
    quant_disponivel: number
    imagens?: ImagensType[]
    variacoes?: VariacoesProdutoType[]
  }

  type filterType = {
    id: string,
    name: string,
    type: string,
    values: {
        id: string,
        name: string,
        results: string
    }[]
}

  export type { ResApiType, DataCamisaType, ImagensType, VariacoesProdutoType, filterType }