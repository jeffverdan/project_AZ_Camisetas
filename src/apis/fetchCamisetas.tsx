import { ResApiType } from "@/interfaces/Camisetas";


const fetchCamisetas = async () => {
    try {
        // Fazer a solicitação à API do Mercado Livre para buscar camisetas
        const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=camiseta');
        const data = await response.json();
        // Extrair os dados relevantes das camisetas da resposta
        const camisetas = data.results.map((result: ResApiType) => ({
            id: result.id,
            nome: result.title,
            preco: "R$ " + Number(result.price).toFixed(2),
            imagem: result.thumbnail,
            quant_disponivel: result.available_quantity
        }));
        return camisetas
    } catch (error) {
        console.error('Erro ao buscar camisetas:', error);
    }
}

export default fetchCamisetas;