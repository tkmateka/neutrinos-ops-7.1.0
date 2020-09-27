import { SDBaseService } from '../services/SDBaseService';
import * as httpStatusCodes from 'http-status-codes';
import { Middleware } from '../middleware/Middleware';
import log from '../utils/Logger';
import * as cookieParser from 'cookie-parser';
import { Readable } from 'stream';
import { setInterval } from 'timers';
import * as settings from '../config/config';
import { Issuer, custom } from 'openid-client';
import * as crypto from 'crypto';
import * as url from 'url';

let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end

export class crudoperations {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'crudoperations';
    this.app = app;
    this.serviceBasePath = `${this.app.settings.base}`;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new crudoperations(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_crudoperations_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: crudoperations');

    //appendnew_flow_crudoperations_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: crudoperations');

    this.swaggerDocument['paths']['/sendRequest'] = {
      post: {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      }
    };
    this.app['post'](
      `${this.serviceBasePath}/sendRequest`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_NKwElQmIiv7yWqLF(bh);
          //appendnew_next_sd_9n8UaiIhRUUhMMjV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_9n8UaiIhRUUhMMjV');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.swaggerDocument['paths']['/updateRequest'] = {
      post: {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      }
    };
    this.app['post'](
      `${this.serviceBasePath}/updateRequest`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_vLyxQdqVpPN2SiN5(bh);
          //appendnew_next_sd_Ol4SqevB9uIyL7jf
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Ol4SqevB9uIyL7jf');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.swaggerDocument['paths']['/getData'] = {
      post: {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      }
    };
    this.app['post'](
      `${this.serviceBasePath}/getData`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_gQiLh3FQsbtLGWoL(bh);
          //appendnew_next_sd_k13QqVbpmmZ3IVBL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_k13QqVbpmmZ3IVBL');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_crudoperations_HttpIn
  }
  //   service flows_crudoperations

  //appendnew_flow_crudoperations_Start

  async sd_NKwElQmIiv7yWqLF(bh) {
    try {
      console.log('before ', bh);

      bh.collection = bh.input.body.collection;
      delete bh.input.body.collection;
      bh.input.body = bh.input.body.data;
      console.log(bh);
      bh = await this.sd_Kx8hQYyDyHPotS5z(bh);
      //appendnew_next_sd_NKwElQmIiv7yWqLF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NKwElQmIiv7yWqLF');
    }
  }

  async sd_Kx8hQYyDyHPotS5z(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_MiIIcvLvPF3Wgg3L',
        bh.collection,
        bh.input.body,
        {}
      );
      await this.sd_FXCn9valFWflpHZ3(bh);
      //appendnew_next_sd_Kx8hQYyDyHPotS5z
    } catch (e) {
      await this.errorHandler(bh, e, 'sd_Kx8hQYyDyHPotS5z');
    }

    return bh;
  }

  async sd_FXCn9valFWflpHZ3(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FXCn9valFWflpHZ3');
    }
  }
  async sd_vLyxQdqVpPN2SiN5(bh) {
    try {
      console.log('before ', bh);

      bh.collection = bh.input.body.collection;
      delete bh.input.body.collection;
      bh.input.body = bh.input.body.data;
      bh.updateDoc = { $set: bh.input.body };
      bh.filter = { requestId: bh.input.body.requestId };
      console.log(bh);
      bh = await this.sd_P9lzQ0A5wBOCCgt5(bh);
      //appendnew_next_sd_vLyxQdqVpPN2SiN5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vLyxQdqVpPN2SiN5');
    }
  }

  async sd_P9lzQ0A5wBOCCgt5(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().updateOne(
        'sd_MiIIcvLvPF3Wgg3L',
        bh.collection,
        bh.filter,
        bh.updateDoc,
        {}
      );
      await this.sd_v8a2kyLj4MnL0n48(bh);
      //appendnew_next_sd_P9lzQ0A5wBOCCgt5
    } catch (e) {
      await this.errorHandler(bh, e, 'sd_P9lzQ0A5wBOCCgt5');
    }

    return bh;
  }

  async sd_v8a2kyLj4MnL0n48(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_v8a2kyLj4MnL0n48');
    }
  }
  async sd_gQiLh3FQsbtLGWoL(bh) {
    try {
      console.log(bh);
      bh.collection = bh.input.body.collection;
      delete bh.input.body.collection;
      console.log(bh);
      bh = await this.sd_RVC9aeq2D2dloX7k(bh);
      //appendnew_next_sd_gQiLh3FQsbtLGWoL
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gQiLh3FQsbtLGWoL');
    }
  }

  async sd_RVC9aeq2D2dloX7k(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_MiIIcvLvPF3Wgg3L',
        bh.collection,
        bh.input.body,
        {}
      );
      await this.sd_bSW0jynsplxdLORq(bh);
      //appendnew_next_sd_RVC9aeq2D2dloX7k
    } catch (e) {
      await this.errorHandler(bh, e, 'sd_RVC9aeq2D2dloX7k');
    }

    return bh;
  }

  async sd_bSW0jynsplxdLORq(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bSW0jynsplxdLORq');
    }
  }
  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_crudoperations_Catch
}
