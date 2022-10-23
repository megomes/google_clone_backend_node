import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function (req: VercelRequest, res: VercelResponse) {
  console.log(process.env.KIBANA_URL);

  res.json({ matheus5: process.env.KIBANA_URL });
}
