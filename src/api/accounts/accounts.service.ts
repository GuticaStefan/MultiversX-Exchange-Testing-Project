import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';
import { RandomGenerator } from '../utils/seededRandomUtilities';

@Injectable()
export class AccountsService {
  async getAccounts(): Promise<any> {
    return db.accounts;
  }

  async getAccountsCount(): Promise<number> {
    return db.accounts.length;
  }

  async getAccountDetailsByAddress(address: string): Promise<any> {
    let account = db.accounts.filter(item => item.address === address);
    let rand = new RandomGenerator(address);

    if(account.length == 1)
      return {...account[0], ...{
        codeHash: rand.generateRandomBytes(44),
        rootHash: rand.generateRandomBytes(44),
        developerReward: rand.generateRandomInt(999999999),
        txCount: rand.generateRandomInt(999999999),
        scrCount: rand.generateRandomInt(999999999),
        isUpgradable: rand.generateRandomBool(),
        isReadable: rand.generateRandomBool(),
        isGuarded: rand.generateRandomBool(),
        isPayable: rand.generateRandomBool(),
      }
    };
      return undefined;
  }

  async getAccountDeferredPaymentDetails(address: string): Promise<any> {
      let rand = new RandomGenerator(address);
      let hasDeffered = rand.generateRandomBool();
      if(hasDeffered)
        return {
          defferedPayment: rand.generateRandomInt(999999999),
          secondLeft: rand.generateRandomInt(3600)
      }
      else 
      return undefined;
  }

  async getAccountVerificationDetails(address: string): Promise<any> {
    let rand = new RandomGenerator(address);
    let hasVerification = rand.generateRandomBool();
    if(hasVerification)
      return {
          codeHash: rand.generateRandomBytes(44),
          source: {
            abi: {},
            contract: {}
          },
          status: "success",
          ipfsFileHash: rand.generateRandomBytes(44) 
        }
    else 
    return undefined;
  }

  async getAccountTokens(address: string): Promise<any> {
    let rand = new RandomGenerator(address);
    let hasTokens = rand.generateRandomBool();
    
    if(hasTokens){
      let tokensCount = db.tokens.length;
      let from = rand.generateRandomInt(tokensCount - 1), to = rand.generateRandomInt(tokensCount - from) + from;
      return db.tokens.slice(from, to);
    }
      return [];
  }

  async getTokensCountForUser(address: string): Promise<number> {
    let tokens = await this.getAccountTokens(address);
    return tokens.length;
  }

  async getAccountTokenDetails(address: string, token: string): Promise<any> {
      let tokens = await this.getAccountTokens(address);
      if(tokens.length > 0) {
        return tokens.filter(item => item.identifier === token)
      }
      else
        return undefined;
  }

  async getAccountCollections(address: string): Promise<any> {
    let rand = new RandomGenerator(address);
    let hasCollection = rand.generateRandomBool();
    
    if(hasCollection){
      let collectionsCount = db.collections.length;
      let from = rand.generateRandomInt(collectionsCount - 1), to = rand.generateRandomInt(collectionsCount - from) + from;
      return db.collections.slice(from, to);
    }
      return [];
  }

  async getAccountCollectionCount(address: string): Promise<number> {
    let collections = await this.getAccountCollections(address);
    return collections.length;
  }

  async getAccountCollectionDetails(address: string, collection: string): Promise<any> {
    let collections = await this.getAccountCollections(address);
    if(collections.length > 0) {
      return collections.filter(item => item.collection = collection)
    }
    else
      return undefined;
  }

  async getAccountTokenRoles(address: string): Promise<any> {
    return await this.getAccountTokens(address);
  }

  async getAccountTokenRolesCount(address: string): Promise<number> {
    let tokens = await this.getAccountTokens(address);
    return tokens.length;
  }

  async getAccountTokenRolesDetails(address: string, identifier: string): Promise<any> {
    return this.getAccountTokenDetails(address, identifier);
  }

  async getAccountCollectionsByAddress(address: string): Promise<any> {
    return await this.getAccountCollections(address);
  }

  async getAccountCollectionCountByAddress(address: string): Promise<number> {
    return await this.getAccountCollectionCount(address);
  }

  async getAccountCollectionDetailsByAddress(address: string, collection: string): Promise<any> {
    return this.getAccountCollectionDetails(address, collection);
  }

  async getAccountNFTs(address: string): Promise<any> {
    let rand = new RandomGenerator(address);
    let hasNfts = rand.generateRandomBool();
    
    if(hasNfts){
      let nftsCount = db.nfts.length();
      let from = rand.generateRandomInt(nftsCount - 1), to = rand.generateRandomInt(nftsCount - from) + from;
      return db.nfts.slice(from, to);
    }
      return [];
  }

  async getAccountNFTCount(address: string): Promise<number> {
    let nfts = await this.getAccountNFTs(address);
    return nfts.length;
  }

  async getAccountNFTDetails(address: string, nft: string): Promise<any> {
    let nfts = await this.getAccountNFTs(address);
    return nfts.filter(item => item.identifier === nft);
  }

  async getAccountStakeDetails(address: string): Promise<any> {
    let rand = new RandomGenerator(address);
    let hasStaked = rand.generateRandomBool();
    if(hasStaked) {
      return {
        totalStaked: rand.generateRandomInt(999999999),
        unstakedTokens: [
          {
            amount: rand.generateRandomInt(999999999)
          },
          {
            amount: rand.generateRandomInt(999999999),
            expires: rand.generateRandomInt(99999)
          }
        ]
      }
    }
    else
      return {
        totalStaked: 0
      }
  }

  async getAccountDelegations(address: string): Promise<any> {
    let rand = new RandomGenerator(address);
    let hasDelegations = rand.generateRandomBool();
    if(hasDelegations)
      return [
        {
          address: address,
          contract: "erd1q" + rand.generateRandomString(address.length - 5),
          userUnBondable: rand.generateRandomInt(99999),
          userActiveStake: rand.generateRandomInt(999999999),
          claimableRewards: rand.generateRandomInt(999999999),
          userUndelegatedList: [
            {
              amount: rand.generateRandomInt(999999999),
              seconds: rand.generateRandomInt(3600)
            }
          ]
        }
      ]
      else
        return []
  }

  async getAccountLegacyDelegationDetails(address: string): Promise<any> {
    return {
      userWithdrawOnlyStake: 0,
      userWaitingStake: 0,
      userActiveStake: 0,
      userUnstakedStake: 0,
      userDeferredPaymentStake: 0,
      claimableRewards: 0
    }
  }

  async getAccountNodes(address: string): Promise<any> {
    let rand = new RandomGenerator(address);
    let hasNodes = rand.generateRandomBool();
    if(hasNodes) {
      let jsonArray = [];
      for(let i = 0; i < rand.generateRandomInt(10); i++) {
        jsonArray.push(
          {
            blsKey: rand.generateRandomBytes(128),
            stake: rand.generateRandomInt(999999999),
            topUp: rand.generateRandomInt(999999999),
            status: "online",
            rewardAddress: address,
            queueIndex: rand.generateRandomInt(10),
            queueSize: rand.generateRandomInt(90) + 10,
            remainingUnBondPeriod: rand.generateRandomInt(100)
        });
      }
      return jsonArray;
    } else
      return [];
  }

  async getAccountQueuedNodes(address: string): Promise<any> {
    let rand = new RandomGenerator(address);
    let hasQueuedNodes = rand.generateRandomBool();
    if(hasQueuedNodes){
      let jsonArray = []
      for(let i = 0; i < rand.generateRandomInt(10); i++){
        jsonArray.push({
          address: "erd1q" + rand.generateRandomBytes(address.length - 5),
          nonce: rand.generateRandomInt(100),
          rank: rand.generateRandomInt(10),
          value: rand.generateRandomInt(99999999)
        });
      }
      return jsonArray;
    }
    else
      return [];
  }

  async getAccountTransactionList(address: string): Promise<any> {
    let rand = new RandomGenerator(address);
    let hasTransactions = rand.generateRandomBool();
    if(hasTransactions){
      let transactionsCount = db.transactions.length
      let from = rand.generateRandomInt(transactionsCount - 1), to = rand.generateRandomInt(transactionsCount - from) + from;
      return db.transactions.slice(from, to).map(item => rand.generateRandomInt(2) == 1 ? {... item, sender: address} :  {... item, receiver: address});
    } else 
      return [];
  }

  async getAccountTransactionCount(address: string): Promise<number> {
    let accountTransactionsCount = await this.getAccountTransactionList(address);
    return accountTransactionsCount.length
  }

  async getAccountTransfers(address: string): Promise<any> {
    let rand = new RandomGenerator(address);
    let hasTransactions = rand.generateRandomBool();
    if(hasTransactions){
      let transfersCount = db.transfers.length
      let from = rand.generateRandomInt(transfersCount - 1), to = rand.generateRandomInt(transfersCount - from) + from;
      return db.transfers.slice(from, to).map(item => rand.generateRandomInt(2) == 1 ? {... item, sender: address} :  {... item, receiver: address});
    } else 
      return [];
  }

  async getAccountTransferCount(address: string): Promise<number> {
    let accountTransfersCount = await this.getAccountTransfers(address);
    return accountTransfersCount.length
  }

  async getAccountContracts(address: string): Promise<any> {
    let rand = new RandomGenerator(address);
    let hasContracts = rand.generateRandomBool();
    if(hasContracts){
      let contractsCount = db.contracts.length
      let from = rand.generateRandomInt(contractsCount - 1), to = rand.generateRandomInt(contractsCount - from) + from;
      return db.contracts.slice(from, to);
    } else 
      return [];
  }

  async getAccountContractsCount(address: string): Promise<number> {
    let contractsCount = await this.getAccountContracts(address);
    return contractsCount.length;
  }

  async getAccountUpgradesDetails(address: string): Promise<any> {
    let rand = new RandomGenerator(address);
    let hasUpgrades = rand.generateRandomBool();
    if(hasUpgrades) {
      return [
          {
            address: "erd1ss6u80ruas2phpmr82r42xnkd6rxy40g9jl69frppl4qez9w2jpsqj8x97",
            txHash: "76740cfdb7d1f452512dc9a58d810e97259c04cb534d14fb14742882af1842c8",
            timestamp: 1654626522
          },
          {
            address: "erd1ss6u80ruas2phpmr82r42xnkd6rxy40g9jl69frppl4qez9w2jpsqj8x97",
            txHash: "ee87bfb12c6bd22ac9dc6777522c54b0886ffb06567cc3586f90c7da49bb54e2",
            timestamp: 1654478058
          },
          {
            address: "erd1ss6u80ruas2phpmr82r42xnkd6rxy40g9jl69frppl4qez9w2jpsqj8x97",
            txHash: "622b29de227f456932d4d6f2e2b897a3f371b0dd89002199b0f47fd8e60dec96",
            timestamp: 1637854206
          }
        ]
    } else
      return [];
  }

  async getAccountSmartContractResults(address: string): Promise<any> {
    let rand = new RandomGenerator(address);
    let hasResults = rand.generateRandomBool();
    if(hasResults){
      let resultsCount = db.results.length
      let from = rand.generateRandomInt(resultsCount - 1), to = rand.generateRandomInt(resultsCount - from) + from;
      return db.results.slice(from, to);
    } else 
      return [];
  }

  async getAccountSmartContractResultsCount(address: string): Promise<number> {
    let results = await this.getAccountSmartContractResults(address);
    return results.length;
  }

  async getAccountSmartContractResult(address: string, scHash: string): Promise<any> {
    let results = await this.getAccountSmartContractResults(address);
    let rand = new RandomGenerator(address);
    let hasResults = rand.generateRandomBool
    if(hasResults) {
      return results.filter(item => item.hash === scHash)[0];
    }
    return undefined;
  }

  async getAccountHistory(address: string): Promise<any> {
    let rand = new RandomGenerator(address);
    let hasHistory = rand.generateRandomBool();
    if(hasHistory) {
      let balanceCount = db.balance_history.length
      let from = rand.generateRandomInt(balanceCount - 1), to = rand.generateRandomInt(balanceCount - from) + from;
      return db.results.slice(from, to);
    } else
      return [];
  }

  async getAccountHistoryCount(address: string): Promise<number> {
    let balanceHistory = await this.getAccountHistory(address);
    return balanceHistory.length;
  }

  async getAccountTokenHistoryCount(address: string, tokenIdentifier: string): Promise<number> {
    let tokenHistory = await this.getAccountTokenHistory(address, tokenIdentifier);
    return tokenHistory.length;
  }

  async getAccountTokenHistory(address: string, tokenIdentifier: string): Promise<any> {
    let tokens = await this.getAccountTokenDetails(address, tokenIdentifier);
    if(tokens != undefined && tokens.length > 0) {
      return [
        {
          address: address,
          balance: "1000000000000000000000000",
          timestamp: 1711846836,
          token: tokenIdentifier
        }
      ]
    }
    return [];
  }
}
