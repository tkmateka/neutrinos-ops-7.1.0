let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as httpStatusCodes from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
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
    this.serviceBasePath = this.app.settings.base;
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
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
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

    if (!this.swaggerDocument['paths']['/sendRequest']) {
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
    } else {
      this.swaggerDocument['paths']['/sendRequest']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
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

    if (!this.swaggerDocument['paths']['/updateRequest']) {
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
    } else {
      this.swaggerDocument['paths']['/updateRequest']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
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

    if (!this.swaggerDocument['paths']['/getData']) {
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
    } else {
      this.swaggerDocument['paths']['/getData']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
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

    if (!this.swaggerDocument['paths']['/search']) {
      this.swaggerDocument['paths']['/search'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/search']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/search`,
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
          bh = await this.sd_PWzpIka0bRT07zmV(bh);
          //appendnew_next_sd_uP2Fae5IQ6oZIKGr
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uP2Fae5IQ6oZIKGr');
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

  //appendnew_flow_crudoperations_listen

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
        'sd_ExcCPqDxVaxNWPUz',
        bh.collection,
        bh.input.body,
        {}
      );
      await this.sd_FXCn9valFWflpHZ3(bh);
      //appendnew_next_sd_Kx8hQYyDyHPotS5z
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Kx8hQYyDyHPotS5z');
    }
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
        'sd_ExcCPqDxVaxNWPUz',
        bh.collection,
        bh.filter,
        bh.updateDoc,
        {}
      );
      await this.sd_v8a2kyLj4MnL0n48(bh);
      //appendnew_next_sd_P9lzQ0A5wBOCCgt5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_P9lzQ0A5wBOCCgt5');
    }
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
        'sd_ExcCPqDxVaxNWPUz',
        bh.collection,
        bh.input.body,
        {}
      );
      await this.sd_bSW0jynsplxdLORq(bh);
      //appendnew_next_sd_RVC9aeq2D2dloX7k
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RVC9aeq2D2dloX7k');
    }
  }

  async sd_bSW0jynsplxdLORq(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bSW0jynsplxdLORq');
    }
  }

  async sd_PWzpIka0bRT07zmV(bh) {
    try {
      bh.collection = bh.input.body.collection;
      bh.filter = {
        city: {
          $regex: new RegExp(bh.input.body.searchString, 'i')
        }
      };
      delete bh.input.body;

      bh = await this.sd_w0YNWQPoyjRzHKwf(bh);
      //appendnew_next_sd_PWzpIka0bRT07zmV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PWzpIka0bRT07zmV');
    }
  }

  async sd_w0YNWQPoyjRzHKwf(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_ExcCPqDxVaxNWPUz',
        bh.collection,
        bh.filter,
        {}
      );
      await this.sd_v3ZDLCBfJWvAg57q(bh);
      //appendnew_next_sd_w0YNWQPoyjRzHKwf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_w0YNWQPoyjRzHKwf');
    }
  }

  async sd_v3ZDLCBfJWvAg57q(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_v3ZDLCBfJWvAg57q');
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
