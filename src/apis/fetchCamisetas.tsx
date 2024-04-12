import { ResApiType, filterType } from "@/interfaces/Camisetas";

interface Props {
    genero?: string,
    tamanho?: string
}

const fetchCamisetas = async (props?: Props) => {
    try {
        // Fazer a solicitação à API do Mercado Livre para buscar camisetas
        const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=camiseta${!!props?.genero ? '&' + 'FILTRABLE_GENDER=' + props?.genero : ''}`);
        const data = await response.json();
        // Extrair os dados relevantes das camisetas da resposta
        const filtros = {
            genero: data.available_filters.find(((e: { id: string; }) => e.id === "FILTRABLE_GENDER")),
            tamanho: data.available_filters.find(((e: { id: string; }) => e.id === "FILTRABLE_SIZE")),
        }
        const camisetas = data.results.map((result: ResApiType) => ({
            id: result.id,
            nome: result.title,
            preco: "R$ " + Number(result.price).toFixed(2),
            imagem: result.thumbnail,
            quant_disponivel: result.available_quantity
        }));
        return { filtros, camisetas }
    } catch (error) {
        console.error('Erro ao buscar camisetas:', error);
    }
}

export default fetchCamisetas;