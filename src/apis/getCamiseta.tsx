import { ImagensType } from "@/interfaces/Camisetas";

const colors = [
    { name: 'Branco', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Preto', class: 'bg-gray-900', selectedClass: 'ring-gray-400' },
    { name: "Vermelho", class: 'bg-red-900', selectedClass: 'ring-gray-900' },
    { name: "Bordô", class: 'bg-red-200', selectedClass: 'ring-gray-900' },
    { name: "Azul", class: 'bg-blue-900', selectedClass: 'ring-gray-900' },
    { name: "Amarelo", class: 'bg-yellow-900', selectedClass: 'ring-gray-900' },
    { name: "Verde", class: 'bg-green-900', selectedClass: 'ring-gray-900' },
];

const getCamiseta = async ({ id }: { id: string }) => {
    try {
        // Fazer a solicitação à API do Mercado Livre para buscar camisetas
        const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
        const data = await response.json();
        // Extrair os dados relevantes das camisetas da resposta

        const variacoes: any = [];
        data.variations?.forEach((variante: any) => {
            if (!variacoes.some((e: any) => e.atributos?.name === variacoes.attribute_combinations?.[0].name)) {
                variacoes.push({
                    id: variante.id,
                    preco: "R$ " + Number(variante.price).toFixed(2),
                    atributos: {
                        nome: variante.attribute_combinations[0].name,
                        valor_nome: variante.attribute_combinations[0].value_name
                    }
                })
            }
        });

        const camiseta = {
            id: data.id,
            nome: data.title,
            preco: "R$ " + Number(data.price).toFixed(2),
            imagem: data.thumbnail,
            imagens: data.pictures.map(((img: ImagensType) => ({
                id: img.id,
                url: img.url,
                alt: data.title
            }))),
            quant_disponivel: data.available_quantity,
            variacoes: variacoes
        };
        return camiseta
    } catch (error) {
        console.error('Erro ao buscar camiseta:', error);
    }
}

export default getCamiseta;