import { createJsonObject } from "../utils/readJsonFile";

export let db = {
    accounts: createJsonObject("accounts.json"),
    auctions: createJsonObject("auctions.json"),
    blocks: createJsonObject("blocks.json"),
    collections: createJsonObject("collections.json"),
    dapp_config: createJsonObject("dapp-config.json"),
    identities: createJsonObject("./identities.json"),
    nfts: createJsonObject("nfts.json"),
    nodes: createJsonObject("nodes.json"),
    providers: createJsonObject("providers.json"),
    results: createJsonObject("results.json"),
    rounds: createJsonObject("rounds.json"),
    shards: createJsonObject("shards.json"),
    stake: createJsonObject("stake.json"),
    tags: createJsonObject("tags.json"),
    tokens: createJsonObject("tokens.json"),
    transactions: createJsonObject("transactions.json"),
    transfers: createJsonObject("transfers.json"),
    websocket_config: createJsonObject("websocket-config.json"),
    miniblocks: createJsonObject("miniblocks.json"),
    waiting_list: createJsonObject("waiting-list.json"),
    contracts: createJsonObject("contracts.json"),
    balance_history: createJsonObject("balance-history.json")
};

