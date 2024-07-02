import {NextApiRequest, NextApiResponse} from "next"
import puppeteer from "puppeteer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.query;

  if (typeof url !== 'string') {
    res.status(400).send("Invalid URL");
    return;
  }

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const content = await page.content();
    await browser.close();

    res.status(200).send(content);
  } catch (error) {
    res.status(500).send("Erro ao buscar conteúdo.");
  }
}