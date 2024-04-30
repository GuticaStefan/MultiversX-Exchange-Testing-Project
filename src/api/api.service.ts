import { Injectable } from '@nestjs/common';
import { Stats } from './dto/stats.dto'
import { EsdtToken } from './dto/esdtToken.dto';
import { createJsonObject } from './utils/readJsonFile';

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
    // return await this.doGetGeneric<Stats>(
    //     this.getStats.name,
    //     `blocks/count?epoch=${epoch}&shard=${shardId}`,
    // );
    return 19709768; 
}

async getAccountStats(address: string): Promise<any | undefined> {
    // return await this.doGetGeneric(
    //     this.getAccountStats.name,
    //     `accounts/${address}`,
    // );
    return {
        "address": address,
        "balance": "162486906126924046",
        "nonce": 45,
        "timestamp": 1694012940,
        "shard": 0,
        "rootHash": "9B2w5VHA7jm3cgAsZEmBVfz7XSGDwVzwFIWau6yRFgw=",
        "username": "alice.elrond",
        "developerReward": "0",
        "txCount": 55,
        "scrCount": 52
      };
}

async getToken(tokenID: string): Promise<EsdtToken> {
    //try {
        // const rawToken = await this.doGetGeneric<EsdtToken>(
        //     this.getToken.name,
        //     `tokens/${tokenID}`,
        // );
        //const rawToken = 
        //const esdtToken = new EsdtToken(rawToken);
        // if (!isEsdtToken(esdtToken)) {
        //     return undefined;
        // }

        // if (!isEsdtTokenValid(esdtToken)) {
        //     const gatewayToken = await this.mxProxy
        //         .getService()
        //         .getDefinitionOfFungibleToken(tokenID);
        //     esdtToken.identifier = gatewayToken.identifier;
        //     esdtToken.decimals = gatewayToken.decimals;
        // }
        try {
            const filePath: string = "./src/api/responses/esdtToken.response.json";
            const jsonObject = createJsonObject(filePath);
            if(jsonObject.identifier === tokenID)
                return new EsdtToken(jsonObject);
            else
                throw new Error("Invalid identifier !");
        } catch (error) {
            return undefined;
        }
}

// async getNftCollection(tokenID: string): Promise<NftCollection> {
//     try {
//         const rawCollection = await this.doGetGeneric(
//             this.getNftCollection.name,
//             `collections/${tokenID}`,
//         );
//         const collection = new NftCollection(rawCollection);
//         if (!isNftCollection(collection)) {
//             return undefined;
//         }
//         if (!isNftCollectionValid(collection)) {
//             const gatewayCollection = await this.mxProxy
//                 .getService()
//                 .getDefinitionOfTokenCollection(tokenID);
//             collection.decimals = gatewayCollection.decimals;
//         }
//         return collection;
//     } catch (error) {
//         return undefined;
//     }
// }

// async getTokensCountForUser(address: string): Promise<number> {
//     return this.doGetGeneric<number>(
//         this.getTokensCountForUser.name,
//         `accounts/${address}/tokens/count`,
//     );
// }

// async getNftsCountForUser(address: string): Promise<number> {
//     return this.doGetGeneric<number>(
//         this.getNftsCountForUser.name,
//         `accounts/${address}/nfts/count`,
//     );
// }

// async getTokensForUser(
//     address: string,
//     from = 0,
//     size = 100,
// ): Promise<EsdtToken[]> {
//     const userTokens = await this.doGetGeneric<EsdtToken[]>(
//         this.getTokensForUser.name,
//         `accounts/${address}/tokens?from=${from}&size=${size}`,
//     );

//     for (const token of userTokens) {
//         if (!isEsdtTokenValid(token)) {
//             const gatewayToken = await this.mxProxy
//                 .getService()
//                 .getDefinitionOfFungibleToken(token.identifier);
//             token.decimals = gatewayToken.decimals;
//         }
//     }

//     return userTokens;
// }

// async getTokenForUser(
//     address: string,
//     tokenID: string,
// ): Promise<EsdtToken> {
//     return this.doGetGeneric<EsdtToken>(
//         this.getTokenForUser.name,
//         `accounts/${address}/tokens/${tokenID}`,
//     );
// }

// async getTokenBalanceForUser(
//     address: string,
//     tokenID: string,
// ): Promise<string> {
//     try {
//         const token = await this.getTokenForUser(address, tokenID);
//         return token.balance;
//     } catch (error) {
//         return '0';
//     }
// }

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
