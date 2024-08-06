import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';
import { AccountsModule } from './accounts/accounts.module';
import { BlocksModule } from './blocks/blocks.module';
import { CollectionsModule } from './collections/collections.module';
import { TpsModule } from './tps/tps.module';
import { PoolModule } from './pool/pool.module';
import { MexModule } from './mex/mex.module';
import { MarketplaceModule } from './marketplace/marketplace.module';
import { TransfersModule } from './transfers/transfers.module';
import { WebsocketModule } from './websocket/websocket.module';
import { DappConfigModule } from './dapp-config/dapp-config.module';
import { WaitingListModule } from './waiting-list/waiting-list.module';
import { UsernamesModule } from './usernames/usernames.module';
import { TransactionsModule } from './transactions/transactions.module';
import { TokensModule } from './tokens/tokens.module';
import { StakeModule } from './stake/stake.module';
import { ShardsModule } from './shards/shards.module';
import { ResultsModule } from './results/results.module';
import { RoundsModule } from './rounds/rounds.module';
import { ProvidersModule } from './providers/providers.module';
import { NodesModule } from './nodes/nodes.module';
import { TagsModule } from './tags/tags.module';
import { NftsModule } from './nfts/nfts.module';
import { NetworkModule } from './network/network.module';
import { MiniblocksModule } from './miniblocks/miniblocks.module';
import { KeysModule } from './keys/keys.module';
import { DelegationModule } from './delegation/delegation.module';
import { IdentitiesModule } from './identities/identities.module';

@Module({
  controllers: [ApiController],
  providers: [ApiService],
  imports: [AccountsModule, BlocksModule, CollectionsModule, IdentitiesModule, DelegationModule, KeysModule, MiniblocksModule, NetworkModule, NftsModule, TagsModule, NodesModule, ProvidersModule, RoundsModule, ResultsModule, ShardsModule, StakeModule, TokensModule, TransactionsModule, UsernamesModule, WaitingListModule, DappConfigModule, WebsocketModule, TransfersModule, MarketplaceModule, MexModule, PoolModule, TpsModule],
})
export class ApiModule {}
