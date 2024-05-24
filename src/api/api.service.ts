import { Injectable } from '@nestjs/common';
import { Stats } from './dto/stats.dto'
import { EsdtToken } from './dto/esdtToken.dto';
import { createJsonObject } from './utils/readJsonFile';
import { NftCollection } from './dto/nftCollection.dto';

@Injectable()
export class ApiService {
  async getStats(): Promise<Stats> {
    const stats = new Stats();
    return new Stats({
        "shards": 3,
        "blocks": 78847887,
        "accounts": 3416132,
        "transactions": 407640342,
        "scResults": 307054932,
        "refreshRate": 6000,
        "epoch": 1369,
        "roundsPassed": 10384,
        "roundsPerEpoch": 14400
      });
}

async getShardBlockCountInEpoch(
    epoch: number,
    shardId: number,
): Promise<number> {
    return 19709768; 
}

async getAccountStats(address: string): Promise<any | undefined> {
    // valid address = erd1rf4hv70arudgzus0ymnnsnc4pml0jkywg2xjvzslg0mz4nn2tg7q7k0t6p
    if(address === "erd1rf4hv70arudgzus0ymnnsnc4pml0jkywg2xjvzslg0mz4nn2tg7q7k0t6p")
        return {
            "address": "erd1rf4hv70arudgzus0ymnnsnc4pml0jkywg2xjvzslg0mz4nn2tg7q7k0t6p",
            "balance": "2661751756278434900912045",
            "nonce": 164,
            "timestamp": 1713970002,
            "shard": 0,
            "assets": {
              "name": "Exchange: Binance Staking",
              "description": "Account containing all staked amounts on the Binance platform",
              "tags": [
                "exchange",
                "binance",
                "staking"
              ],
              "iconPng": "https://raw.githubusercontent.com/multiversx/mx-assets/master/accounts/icons/binance.png",
              "iconSvg": "https://raw.githubusercontent.com/multiversx/mx-assets/master/accounts/icons/binance.svg"
            },
            "rootHash": "Xryqow3bWnUzxzHi5p9qgQIgkRIYkmIeM1jdaO67VHc=",
            "developerReward": "0",
            "txCount": 323,
            "scrCount": 37
          };
    else
        return undefined;
}

async getToken(tokenID: string): Promise<EsdtToken> {
        try {
            const filePath: string = "./src/api/responses/esdtToken.response.json";
            const jsonObject = createJsonObject(filePath);
            //valid token identifier = MEX-455c57 
            if(jsonObject.identifier === tokenID)
                return new EsdtToken(jsonObject);
            else
                throw new Error("Invalid identifier !");
        } catch (error) {
            return undefined;
        }
}

async getNftCollection(collectionID: string): Promise<NftCollection> {
    try {
        const filePath: string = "./src/api/responses/nftCollection.response.json";
        const jsonObject = createJsonObject(filePath);  
        //valid collection identifier = ONXCRDS-ab712e 
        if(jsonObject.collection === collectionID)
            return new NftCollection(jsonObject);
        else
            throw new Error("Invalid identifier !");
    } catch (error) {
        return undefined;
    }
}

async getTokensCountForUser(address: string): Promise<number> {
    // valid address = erd1rf4hv70arudgzus0ymnnsnc4pml0jkywg2xjvzslg0mz4nn2tg7q7k0t6p
    if(address === "erd1rf4hv70arudgzus0ymnnsnc4pml0jkywg2xjvzslg0mz4nn2tg7q7k0t6p")
        return 21;
    else
        return undefined;
}

async getNftsCountForUser(address: string): Promise<number> {
    // valid address = erd1rf4hv70arudgzus0ymnnsnc4pml0jkywg2xjvzslg0mz4nn2tg7q7k0t6p
    if(address === "erd1rf4hv70arudgzus0ymnnsnc4pml0jkywg2xjvzslg0mz4nn2tg7q7k0t6p")
        return 9;
    else
        return undefined;
}

async getTokensForUser(
    address: string,
    from = 0,
    size = 100,
): Promise<EsdtToken[]> {
    const filePath: string = "./src/api/responses/esdtTokensForUser.response.json";
    const jsonObject  = createJsonObject(filePath);
    
    //valid address for user = erd1rf4hv70arudgzus0ymnnsnc4pml0jkywg2xjvzslg0mz4nn2tg7q7k0t6p 
    if(address === "erd1rf4hv70arudgzus0ymnnsnc4pml0jkywg2xjvzslg0mz4nn2tg7q7k0t6p") {
        const userTokens: EsdtToken[] = jsonObject.map(token => new EsdtToken(token));
        return userTokens;
    } else
        return undefined;
}

async getTokenForUser(
    address: string,
    tokenID: string,
): Promise<EsdtToken> {
    // valid address for user = erd1rf4hv70arudgzus0ymnnsnc4pml0jkywg2xjvzslg0mz4nn2tg7q7k0t6p
    // valid tokenId for user = AERO-458bbf
    if(address === "erd1rf4hv70arudgzus0ymnnsnc4pml0jkywg2xjvzslg0mz4nn2tg7q7k0t6p" && 
        tokenID === "AERO-458bbf") {
            const filePath: string = "./src/api/responses/esdtTokenForUser.response.json";
            const jsonObject  = createJsonObject(filePath);
            return new EsdtToken(jsonObject);
        }
    else 
        return undefined;
}

async getTokenBalanceForUser(
    address: string,
    tokenID: string,
): Promise<string> {
    // valid address for user = erd1rf4hv70arudgzus0ymnnsnc4pml0jkywg2xjvzslg0mz4nn2tg7q7k0t6p
    // valid tokenId for user = AERO-458bbf
    try {
        const token = await this.getTokenForUser(address, tokenID);
        return token.balance;
    } catch (error) {
        return '0';
    }
}

// async getNftsForUser(
//     address: string,
//     from = 0,
//     size = 100,
//     type = 'MetaESDT',
//     collections?: string[],
// ): Promise<NftToken[]> {
//     const nfts: NftToken[] = await this.genericGetExecutor.execute({
//         methodName: this.getNftsForUser.name,
//         resourceUrl: `accounts/${address}/nfts?type=${type}&size=${constantsConfig.MAX_USER_NFTS}&fields=identifier,collection,ticker,decimals,timestamp,attributes,nonce,type,name,creator,royalties,uris,url,tags,balance,assets`,
//     });

//     const userNfts = collections
//         ? nfts
//               .filter((nft) => collections.includes(nft.collection))
//               .slice(from, size)
//         : nfts.slice(from, size);

//     for (const nft of userNfts) {
//         if (!isNftCollectionValid(nft)) {
//             const gatewayCollection = await this.mxProxy
//                 .getService()
//                 .getDefinitionOfTokenCollection(nft.collection);
//             nft.decimals = gatewayCollection.decimals;
//         }
//     }

//     return userNfts;
// }

// async getNftByTokenIdentifier(
//     address: string,
//     nftIdentifier: string,
// ): Promise<NftToken> {
//     return await this.doGetGeneric<NftToken>(
//         this.getNftByTokenIdentifier.name,
//         `accounts/${address}/nfts/${nftIdentifier}?fields=identifier,collection,ticker,decimals,timestamp,attributes,nonce,type,name,creator,royalties,uris,url,tags,balance,assets`,
//     );
// }

// async getNftAttributesByTokenIdentifier(
//     address: string,
//     nftIdentifier: string,
// ): Promise<string> {
//     const response = await this.doGetGeneric<NftToken>(
//         this.getNftAttributesByTokenIdentifier.name,
//         `accounts/${address}/nfts/${nftIdentifier}?fields=attributes`,
//     );
//     return response.attributes;
// }

// async getCurrentNonce(shardId: number): Promise<any> {
//     return this.doGetGeneric(
//         this.getCurrentNonce.name,
//         `network/status/${shardId}`,
//     );
// }

// async getCurrentBlockNonce(shardId: number): Promise<number> {
//     const latestBlock = await this.doGetGeneric(
//         this.getCurrentNonce.name,
//         `blocks?size=1&shard=${shardId}`,
//     );
//     return latestBlock[0].nonce;
// }

// async getBlockByNonce(shardId: number, nonce: number): Promise<any> {
//     const blocks = await this.doGetGeneric(
//         this.getBlockByNonce.name,
//         `blocks?nonce=${nonce}&shard=${shardId}`,
//     );

//     return blocks[0] ?? undefined;
// }

// async getShardTimestamp(shardId: number): Promise<number> {
//     const latestShardBlock = await this.doGetGeneric(
//         this.getShardTimestamp.name,
//         `blocks?from=0&size=1&shard=${shardId}`,
//     );
//     return latestShardBlock[0].timestamp;
// }

// async getTransactions(
//     after: number,
//     before: number,
//     receiverShard: number,
// ): Promise<any> {
//     return await this.doGetGeneric(
//         this.getTransactions.name,
//         `transactions?receiverShard=${receiverShard}&after=${after}&before=${before}`,
//     );
// }

// async getTransactionsWithOptions(
//     {
//         sender,
//         receiver,
//         functionName,
//     },
// ): Promise<any> {
//     return await this.doGetGeneric(
//         this.getTransactions.name,
//         `transactions?sender=${sender}&receiver=${receiver}&function=${functionName}`,
//     );
// }
}
