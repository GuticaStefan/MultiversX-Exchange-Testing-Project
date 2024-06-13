import { Injectable } from '@nestjs/common';
import { db } from '../database/init-db';

@Injectable()
export class NodesService {
    async getNodes(): Promise<any> {
        return db.nodes;
    }

    async getNodeVersions(): Promise<any> {}

    async getNodesCount(): Promise<number> {
        return db.nodes.length;
    }

    async getNodeAuctions(): Promise<any> {}

    async getNode(bls: string): Promise<any> {}
}
