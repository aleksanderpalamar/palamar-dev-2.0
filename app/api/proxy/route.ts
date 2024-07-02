import axios from "axios";

export default async function handler(req: any, res: any) {
  const { url } = req.query;

  try {
    const response = await axios.get(url);
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send("Erro ao buscar conteúdo.");
  }
}