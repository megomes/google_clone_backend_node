import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function (req: VercelRequest, res: VercelResponse) {
  var elasticsearch = require("elasticsearch");
  var client = new elasticsearch.Client({
    host: process.env.KIBANA_URL,
    log: "trace",
  });

  console.log(req.body);

  client
    .index({
      index: "hello_world",
      body: req.body,
    })
    .then(() => {
      return res.json({ message: "Pessoa criada com sucesso!" });
    })
    .catch((err) => {
      return res.status(500).json({ message: err });
    });
}
