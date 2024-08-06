import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should handle delay from Test API', async () => {
    const endpoint = '/accounts'
    const delay = 2000 // in miliSeconds
    await request(app.getHttpServer()).post('/set/delay')
      .send({
        endpoint: endpoint,
        value: delay 
      });
    
    const startTime = Date.now();
    const response = await request(app.getHttpServer()).get(endpoint)
    const endTime = Date.now();
    
    expect(response.status).toBe(200);
    expect(endTime - startTime).toBeGreaterThanOrEqual(delay);
  });

  it('should handle crash from Test API', async () => {
    const endpoint = '/accounts'
  
    await request(app.getHttpServer()).post('/set/crash')
      .send({
        endpoint: endpoint,
      });
    
    const mockExit = jest.spyOn(process, 'exit').mockImplementation((number) => { throw new Error('process.exit: ' + number)})

    const response = await request(app.getHttpServer()).get(endpoint)
    
    expect(mockExit).toHaveBeenCalledWith(0);
    mockExit.mockRestore();
  });

  it('should handle http exception from Test API', async () => {
    const endpoint = '/accounts'
    const error = {
      message: "The user has sent too many requests in a given amount of time",
      error: "Too Many Requests",
      statusCode: 429
    }
    await request(app.getHttpServer()).post('/set/error')
      .send({
        endpoint: endpoint,
        error: error 
      });
    
    try{
      await request(app.getHttpServer()).get(endpoint)
    } catch(error) {
      expect(error.status).toBe(error.statusCode);
      expect(error.message).toBe(error.message);
      expect(error.error).toBe(error.error);
    }
  });

  it('should handle custom data assignment from Test API', async () => {
    const endpoint = '/accounts'
    const data = {
        "hash": "9b442ede724802e312aa97174c6368a828325c1b93b45d23f231d5e7fee14d1f",
        "epoch": 1394,
        "nonce": 20069579,
        "prevHash": "47c66a9f12b535022dd8f5b13d90122df172362a1d24baa70f711c26f122f289",
        "proposer": "ba5ea21491364c45aa461a6aeaf0e63f5606b92552272891f0e950c6fd916f2f4e73c403d93243d49bbc50b4fd866601807e89199ba74703fadd9ce41aadf2ff4ecc74d6d75d311166ce800b8d7530237258b1c6a02acaa43ed7c6b1c151d888",
        "pubKeyBitmap": "ffffffffffffff7f",
        "round": 20085743,
        "shard": 1,
        "size": 527,
        "sizeTxs": 948,
        "stateRootHash": "936a6a7841434c8633437bb4c6937bf1b82e65787206003e342824ddb3762e12",
        "timestamp": 1716632058,
        "txCount": 1,
        "gasConsumed": 19500000,
        "gasRefunded": 8224762,
        "gasPenalized": 0,
        "maxGasLimit": 3000000000,
        "scheduledRootHash": "8690aab6ba5e196c9fab6d3c612d510cd35985e3e1eed025030a8e920588f955"
    }

    await request(app.getHttpServer()).post('/set/data')
      .send({
        endpoint: endpoint,
        data: data 
      });
    
    const response = await request(app.getHttpServer()).get(endpoint);
    
    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(data);
  });
});
