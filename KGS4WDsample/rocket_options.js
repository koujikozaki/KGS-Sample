let search_cond = 
[
  {
    "id": "cond1",
    "ctext": "分類=ロケット",
    "cond": "wdt:P31/wdt:P279*",
    "val": "wd:Q41291",
    "type": "ID",
    "const": true
  },
  {
    "id": "cond2",
    "ctext": "国",
    "cond": "wdt:P495/rdfs:label|wdt:P495/skos:altLabel",
    "val": "",
    "type": "STR-ja",
    "const": false
  },
  {
    "id": "cond3",
    "ctext": "運用開始年（XXXX以降　例：2000）",
    "cond": "?item wdt:P729 ?st . FILTER(?st >= \"####-01-01T00:00:00Z\"^^xsd:dateTime)",
    "val": "",
    "type": "REPLACE",
    "const": false
  },
  {
    "id": "cond4",
    "ctext": "",
    "cond": "",
    "val": "",
    "type": "ID",
    "const": false
  },
  {
    "id": "cond5",
    "ctext": "",
    "cond": "",
    "val": "",
    "type": "ID",
    "const": false
  },
  {
    "id": "cond6",
    "ctext": "",
    "cond": "",
    "val": "",
    "type": "ID",
    "const": false
  }
];

let search_prop = 
[
  {
    "id": "opt1",
    "prop": "wdt:P495",
    "pname": "国",
    "optional": true
  },
  {
    "id": "opt2",
    "prop": "wdt:P31",
    "pname": "分類",
    "optional": true
  },
  {
    "id": "opt3",
    "prop": "wdt:P18",
    "pname": "画像",
    "optional": true
  },
  {
    "id": "opt4",
    "prop": "wdt:P176",
    "pname": "製造元",
    "optional": true
  },
  {
    "id": "opt5",
    "prop": "wdt:P729",
    "pname": "運用開始",
    "optional": true
  }
];
