import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function (req: VercelRequest, res: VercelResponse) {
  console.log(process.env.KIBANA_URL);
  var elasticsearch = require("elasticsearch");
  var client = new elasticsearch.Client({
    host: process.env.KIBANA_URL,
    log: "trace",
  });

  client
    .search({
      index: "hello_world",
      body: {
        query: {
          match_all: {},
        },
      },
    })
    .then((response) => {
      return res.json(response);
    })
    .catch((err) => {
      return res.status(500).json({ message: err });
    });
}
