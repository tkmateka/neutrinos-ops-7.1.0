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

    this.swaggerDocument['paths']['/employee'] = {
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
      `${this.serviceBasePath}/employee`,
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
          bh = await this.sd_3PpQ5CyDuIvxzNwv(bh);
          //appendnew_next_sd_aQuIKbwWtrSXmaJY
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_aQuIKbwWtrSXmaJY');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.swaggerDocument['paths']['/visa'] = {
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
      `${this.serviceBasePath}/visa`,
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
          bh = await this.sd_h2cZ4sqFLgvogBNg(bh);
          //appendnew_next_sd_eNq7M6PYOfRnDGkB
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_eNq7M6PYOfRnDGkB');
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

  async sd_3PpQ5CyDuIvxzNwv(bh) {
    try {
      bh.collection = 'employees';
      console.log(bh);
      bh = await this.sd_RVC9aeq2D2dloX7k(bh);
      //appendnew_next_sd_3PpQ5CyDuIvxzNwv
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3PpQ5CyDuIvxzNwv');
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
  async sd_h2cZ4sqFLgvogBNg(bh) {
    try {
      bh.collection = 'visa';
      console.log(bh);
      bh = await this.sd_RVC9aeq2D2dloX7k(bh);
      //appendnew_next_sd_h2cZ4sqFLgvogBNg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_h2cZ4sqFLgvogBNg');
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
