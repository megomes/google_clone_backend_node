import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function (req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    return res.status(200).json({ body: "OK" });
  }

  var elasticsearch = require("elasticsearch");
  var client = new elasticsearch.Client({
    host: process.env.KIBANA_URL,
    log: "trace",
  });

  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, X-Auth-Token"
  );

  client
    .search({
      index: "wiki",
      body: {
        query: {
          wildcard: { title: "*" + req.body.text + "*" },
        },
      },
    })
    .then((response) => {
      return res.status(200).json(response.hits.hits).end();
    })
    .catch((err) => {
      return res.status(200).json({ message: err }).end();
    });
}
