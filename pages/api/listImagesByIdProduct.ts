import { storage } from "@/lib/firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { NextApiRequest, NextApiResponse } from "next";

type ListResponse = {
  urls: string[];
};

export default async function list(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Invalid ID parameter" });
  }

  try {
    const listRef = ref(storage, id.trim());
    const list = await listAll(listRef);
    const urls = await Promise.all(
      list.items.map((item) => getDownloadURL(item))
    );
    const response: ListResponse = { urls };
    return res.status(200).json(response);
  } catch (error) {
    // Verifica se o error é uma instância de Error
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
    // Caso contrário, retorna uma mensagem genérica
    return res.status(500).json({ error: "An unexpected error occurred" });
  }
}
