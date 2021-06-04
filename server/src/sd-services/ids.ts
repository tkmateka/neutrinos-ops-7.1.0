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
import * as sd_LYgtWlje40y5PE4W from './idsutil'; //_splitter_
//append_imports_end

export class ids {
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
    this.serviceName = 'ids';
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
      instance = new ids(
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
      //appendnew_flow_ids_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');

    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_TdusKAW5eaHtHJzn(bh);
          //appendnew_next_sd_MHoyGz1AiMXaE9vJ
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_MHoyGz1AiMXaE9vJ');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_pnf7MidUymMQ6mCU(bh);
          //appendnew_next_sd_V1aoHZLOcjX6yqLp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_V1aoHZLOcjX6yqLp');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    if (!this.swaggerDocument['paths']['/login']) {
      this.swaggerDocument['paths']['/login'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/login']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login`,
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
          bh = await this.sd_LtXhm9D5fL83WKZj(bh);
          //appendnew_next_sd_cSOVj3ZNqCBxL1mu
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_cSOVj3ZNqCBxL1mu');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/login/cb']) {
      this.swaggerDocument['paths']['/login/cb'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/login/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
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
          bh = await this.sd_U2kMIKq4kCoMhwJA(bh);
          //appendnew_next_sd_zkx1L9jubsHugBn8
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_zkx1L9jubsHugBn8');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/user/info']) {
      this.swaggerDocument['paths']['/user/info'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/user/info']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
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
          bh = await this.sd_d6Mb8d1yaxUvy6oV(bh);
          //appendnew_next_sd_7qTh219bjnzSJwL9
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_7qTh219bjnzSJwL9');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout']) {
      this.swaggerDocument['paths']['/logout'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/logout']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout`,
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
          bh = await this.sd_SWSj4Fi33zQZfHO2(bh);
          //appendnew_next_sd_lEczGZdJKusVkvpf
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_lEczGZdJKusVkvpf');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout/cb']) {
      this.swaggerDocument['paths']['/logout/cb'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {}
        }
      };
    } else {
      this.swaggerDocument['paths']['/logout/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {}
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
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
          bh = await this.sd_vNsKdqaR9w6Cv3FN(bh);
          //appendnew_next_sd_30hCanEYpDp3THbp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_30hCanEYpDp3THbp');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_listen

  //appendnew_flow_ids_Start

  async sd_LtXhm9D5fL83WKZj(bh) {
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      bh = await this.sd_ySC6hBoCNyAqb6b8(bh);
      //appendnew_next_sd_LtXhm9D5fL83WKZj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LtXhm9D5fL83WKZj');
    }
  }

  async sd_ySC6hBoCNyAqb6b8(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_5QPlsNAYiothJHNm(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_r4R4pUk1mW9yhyjy(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ySC6hBoCNyAqb6b8');
    }
  }

  async sd_5QPlsNAYiothJHNm(bh) {
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo
      };
      bh = await this.sd_q69QAfDxCmYTax7l(bh);
      //appendnew_next_sd_5QPlsNAYiothJHNm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5QPlsNAYiothJHNm');
    }
  }

  async sd_q69QAfDxCmYTax7l(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      bh = await this.sd_zQ8Dtu20npUUpuau(bh);
      //appendnew_next_sd_q69QAfDxCmYTax7l
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_q69QAfDxCmYTax7l');
    }
  }

  async sd_zQ8Dtu20npUUpuau(bh) {
    try {
      const sd_LYgtWlje40y5PE4WInstance: sd_LYgtWlje40y5PE4W.idsutil = sd_LYgtWlje40y5PE4W.idsutil.getInstance();
      let outputVariables = await sd_LYgtWlje40y5PE4WInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_3gsqsWGXj2GhtqUH(bh);
      //appendnew_next_sd_zQ8Dtu20npUUpuau
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zQ8Dtu20npUUpuau');
    }
  }

  async sd_3gsqsWGXj2GhtqUH(bh) {
    try {
      const sd_LYgtWlje40y5PE4WInstance: sd_LYgtWlje40y5PE4W.idsutil = sd_LYgtWlje40y5PE4W.idsutil.getInstance();
      let outputVariables = await sd_LYgtWlje40y5PE4WInstance.getAuthorizationParams(
        null
      );
      bh.input.authParams = outputVariables.input.authParams;

      bh = await this.sd_hC2GslHjFKmWdTi0(bh);
      //appendnew_next_sd_3gsqsWGXj2GhtqUH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3gsqsWGXj2GhtqUH');
    }
  }

  async sd_hC2GslHjFKmWdTi0(bh) {
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0]
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest)
      };

      await this.sd_iMSqxDO4EvTELR9O(bh);
      //appendnew_next_sd_hC2GslHjFKmWdTi0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hC2GslHjFKmWdTi0');
    }
  }

  async sd_iMSqxDO4EvTELR9O(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iMSqxDO4EvTELR9O');
    }
  }

  async sd_r4R4pUk1mW9yhyjy(bh) {
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again'
      };
      await this.sd_AeoJudIQGnBzD5bQ(bh);
      //appendnew_next_sd_r4R4pUk1mW9yhyjy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_r4R4pUk1mW9yhyjy');
    }
  }

  async sd_AeoJudIQGnBzD5bQ(bh) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AeoJudIQGnBzD5bQ');
    }
  }

  async sd_TdusKAW5eaHtHJzn(bh) {
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      await this.sd_UTCCTNWVlpklXv4x(bh);
      //appendnew_next_sd_TdusKAW5eaHtHJzn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TdusKAW5eaHtHJzn');
    }
  }

  async sd_UTCCTNWVlpklXv4x(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UTCCTNWVlpklXv4x');
    }
  }

  async sd_U2kMIKq4kCoMhwJA(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_js574RtqA5PcnyT7(bh);
      //appendnew_next_sd_U2kMIKq4kCoMhwJA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U2kMIKq4kCoMhwJA');
    }
  }

  async sd_js574RtqA5PcnyT7(bh) {
    try {
      const sd_LYgtWlje40y5PE4WInstance: sd_LYgtWlje40y5PE4W.idsutil = sd_LYgtWlje40y5PE4W.idsutil.getInstance();
      let outputVariables = await sd_LYgtWlje40y5PE4WInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_JOmwCD0zud34mgUa(bh);
      //appendnew_next_sd_js574RtqA5PcnyT7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_js574RtqA5PcnyT7');
    }
  }

  async sd_JOmwCD0zud34mgUa(bh) {
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token'])
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      bh = await this.sd_MBSKiANUA1uEgtaA(bh);
      //appendnew_next_sd_JOmwCD0zud34mgUa
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JOmwCD0zud34mgUa');
    }
  }

  async sd_MBSKiANUA1uEgtaA(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      bh = await this.sd_VrWJNKT9Q4fYTaLQ(bh);
      //appendnew_next_sd_MBSKiANUA1uEgtaA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MBSKiANUA1uEgtaA');
    }
  }

  async sd_VrWJNKT9Q4fYTaLQ(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Cs2Z4d3BzOi0g5w2(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_7wXkj0ZSsCpg0fQd(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VrWJNKT9Q4fYTaLQ');
    }
  }

  async sd_Cs2Z4d3BzOi0g5w2(bh) {
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_NWeHZ3rQQp89hTTl(bh);
      //appendnew_next_sd_Cs2Z4d3BzOi0g5w2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Cs2Z4d3BzOi0g5w2');
    }
  }

  async sd_NWeHZ3rQQp89hTTl(bh) {
    try {
      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NWeHZ3rQQp89hTTl');
    }
  }

  async sd_7wXkj0ZSsCpg0fQd(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo
      };
      await this.sd_bBswx17pa0Pq9a28(bh);
      //appendnew_next_sd_7wXkj0ZSsCpg0fQd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7wXkj0ZSsCpg0fQd');
    }
  }

  async sd_bBswx17pa0Pq9a28(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bBswx17pa0Pq9a28');
    }
  }

  async sd_d6Mb8d1yaxUvy6oV(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      await this.sd_LhbPCG2HJOLJYE89(bh);
      //appendnew_next_sd_d6Mb8d1yaxUvy6oV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_d6Mb8d1yaxUvy6oV');
    }
  }

  async sd_LhbPCG2HJOLJYE89(bh) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LhbPCG2HJOLJYE89');
    }
  }

  async sd_qr9HfvOvGRiIsWJg(bh) {
    try {
      bh.web.res.redirect('/api/login');
      //appendnew_next_sd_qr9HfvOvGRiIsWJg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qr9HfvOvGRiIsWJg');
    }
  }

  async sd_SWSj4Fi33zQZfHO2(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_EwGrASMdnoyRbapm(bh);
      //appendnew_next_sd_SWSj4Fi33zQZfHO2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SWSj4Fi33zQZfHO2');
    }
  }

  async sd_EwGrASMdnoyRbapm(bh) {
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      bh = await this.sd_bkTVO569WydrEIfi(bh);
      //appendnew_next_sd_EwGrASMdnoyRbapm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EwGrASMdnoyRbapm');
    }
  }

  async sd_bkTVO569WydrEIfi(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      bh = await this.sd_HLCvfD8WPlEhMjua(bh);
      //appendnew_next_sd_bkTVO569WydrEIfi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bkTVO569WydrEIfi');
    }
  }

  async sd_HLCvfD8WPlEhMjua(bh) {
    try {
      const sd_LYgtWlje40y5PE4WInstance: sd_LYgtWlje40y5PE4W.idsutil = sd_LYgtWlje40y5PE4W.idsutil.getInstance();
      let outputVariables = await sd_LYgtWlje40y5PE4WInstance.getIDSClientInstance(
        null
      );
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_1EDYmCrCYz58N8GQ(bh);
      //appendnew_next_sd_HLCvfD8WPlEhMjua
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HLCvfD8WPlEhMjua');
    }
  }

  async sd_1EDYmCrCYz58N8GQ(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_XCYUJA72dKvbu9nH(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Id1i6B4xLZIwz0Bx(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1EDYmCrCYz58N8GQ');
    }
  }

  async sd_XCYUJA72dKvbu9nH(bh) {
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id']
              }
            }
          )
        ),
        sessionExists: true
      };
      await this.sd_HvJrYVncH4Phjh6w(bh);
      //appendnew_next_sd_XCYUJA72dKvbu9nH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XCYUJA72dKvbu9nH');
    }
  }

  async sd_HvJrYVncH4Phjh6w(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HvJrYVncH4Phjh6w');
    }
  }

  async sd_Id1i6B4xLZIwz0Bx(bh) {
    try {
      bh.local.res = {
        sessionExists: false
      };
      await this.sd_HvJrYVncH4Phjh6w(bh);
      //appendnew_next_sd_Id1i6B4xLZIwz0Bx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Id1i6B4xLZIwz0Bx');
    }
  }

  async sd_vNsKdqaR9w6Cv3FN(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_yhmkE5njsXW9iRZq(bh);
      //appendnew_next_sd_vNsKdqaR9w6Cv3FN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vNsKdqaR9w6Cv3FN');
    }
  }

  async sd_yhmkE5njsXW9iRZq(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function() {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function(error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_ZDpHlE8Ti33nYG1e(bh);
      //appendnew_next_sd_yhmkE5njsXW9iRZq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yhmkE5njsXW9iRZq');
    }
  }

  async sd_ZDpHlE8Ti33nYG1e(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_tP3Y6lEeO1vs9z4h(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_aAP51SMy8k5m2bw0(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZDpHlE8Ti33nYG1e');
    }
  }

  async sd_tP3Y6lEeO1vs9z4h(bh) {
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_a3ObSqP1mcjlMB9n(bh);
      //appendnew_next_sd_tP3Y6lEeO1vs9z4h
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tP3Y6lEeO1vs9z4h');
    }
  }

  async sd_a3ObSqP1mcjlMB9n(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_a3ObSqP1mcjlMB9n');
    }
  }

  async sd_aAP51SMy8k5m2bw0(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo
      };
      await this.sd_JkGCiRJ8MZ5kzpWr(bh);
      //appendnew_next_sd_aAP51SMy8k5m2bw0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_aAP51SMy8k5m2bw0');
    }
  }

  async sd_JkGCiRJ8MZ5kzpWr(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JkGCiRJ8MZ5kzpWr');
    }
  }

  async sd_pnf7MidUymMQ6mCU(bh) {
    try {
      bh.local = {};
      bh = await this.sd_2VHwjWXVOXrHa7mg(bh);
      //appendnew_next_sd_pnf7MidUymMQ6mCU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pnf7MidUymMQ6mCU');
    }
  }

  async sd_2VHwjWXVOXrHa7mg(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_reoYLaRk0g3GP07r(bh);
      //appendnew_next_sd_2VHwjWXVOXrHa7mg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2VHwjWXVOXrHa7mg');
    }
  }

  async sd_reoYLaRk0g3GP07r(bh) {
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      bh = await this.sd_8qcuEL3HwEn1pEQg(bh);
      //appendnew_next_sd_reoYLaRk0g3GP07r
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_reoYLaRk0g3GP07r');
    }
  }

  async sd_8qcuEL3HwEn1pEQg(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_uhosxP0fWlQR2FXo(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_rdF6fl2mr58xJAqz(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8qcuEL3HwEn1pEQg');
    }
  }

  async sd_uhosxP0fWlQR2FXo(bh) {
    try {
      const sd_LYgtWlje40y5PE4WInstance: sd_LYgtWlje40y5PE4W.idsutil = sd_LYgtWlje40y5PE4W.idsutil.getInstance();
      let outputVariables = await sd_LYgtWlje40y5PE4WInstance.handleTokenExpiry(
        bh.local.sessionData,
        null
      );
      bh.local.newSession = outputVariables.input.newSession;

      bh = await this.sd_uY7IJ1pabiyFgnQQ(bh);
      //appendnew_next_sd_uhosxP0fWlQR2FXo
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uhosxP0fWlQR2FXo');
    }
  }

  async sd_uY7IJ1pabiyFgnQQ(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_v1oLKpGEZMCoTkF5(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_W411H6RqzJCPKke8(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uY7IJ1pabiyFgnQQ');
    }
  }

  async sd_v1oLKpGEZMCoTkF5(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function() {
          return new Promise((resolve, reject) => {
            requestObject.session.destroy(function(error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_4EOqxbfkQF5AISPS(bh);
      //appendnew_next_sd_v1oLKpGEZMCoTkF5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_v1oLKpGEZMCoTkF5');
    }
  }

  async sd_4EOqxbfkQF5AISPS(bh) {
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked'
      };
      await this.sd_JlkeesWEWqxF1e32(bh);
      //appendnew_next_sd_4EOqxbfkQF5AISPS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4EOqxbfkQF5AISPS');
    }
  }

  async sd_JlkeesWEWqxF1e32(bh) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JlkeesWEWqxF1e32');
    }
  }

  async sd_W411H6RqzJCPKke8(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_J8Pm9WRy5cwkx2Bt(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_4uF8I9kr6jfXbbwG(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_W411H6RqzJCPKke8');
    }
  }

  async sd_J8Pm9WRy5cwkx2Bt(bh) {
    try {
      delete bh.local.newSession.rotated;
      bh = await this.sd_5Q55UuVUfJVpdHiD(bh);
      //appendnew_next_sd_J8Pm9WRy5cwkx2Bt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_J8Pm9WRy5cwkx2Bt');
    }
  }

  async sd_5Q55UuVUfJVpdHiD(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      await this.sd_4uF8I9kr6jfXbbwG(bh);
      //appendnew_next_sd_5Q55UuVUfJVpdHiD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5Q55UuVUfJVpdHiD');
    }
  }

  async sd_4uF8I9kr6jfXbbwG(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4uF8I9kr6jfXbbwG');
    }
  }

  async sd_rdF6fl2mr58xJAqz(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_qmph0z3kZr2gtOj9(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_wXihf2uQYbUxakN4(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rdF6fl2mr58xJAqz');
    }
  }

  async sd_qmph0z3kZr2gtOj9(bh) {
    try {
      bh.local.res = { message: 'Session expired' };
      await this.sd_JlkeesWEWqxF1e32(bh);
      //appendnew_next_sd_qmph0z3kZr2gtOj9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qmph0z3kZr2gtOj9');
    }
  }

  async sd_wXihf2uQYbUxakN4(bh) {
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      await this.sd_JlkeesWEWqxF1e32(bh);
      //appendnew_next_sd_wXihf2uQYbUxakN4
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wXihf2uQYbUxakN4');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_K0xcL58QRoiE3nH8(bh)) ||
      (await this.sd_G86gDGinhKGGOBYD(bh))
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
  async sd_K0xcL58QRoiE3nH8(bh) {
    const nodes = [
      'sd_3gsqsWGXj2GhtqUH',
      'sd_zkx1L9jubsHugBn8',
      'sd_js574RtqA5PcnyT7',
      'sd_JOmwCD0zud34mgUa',
      'sd_U2kMIKq4kCoMhwJA',
      'sd_VrWJNKT9Q4fYTaLQ',
      'sd_Cs2Z4d3BzOi0g5w2',
      'sd_7wXkj0ZSsCpg0fQd',
      'sd_NWeHZ3rQQp89hTTl',
      'sd_bBswx17pa0Pq9a28'
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_qr9HfvOvGRiIsWJg(bh);
      //appendnew_next_sd_K0xcL58QRoiE3nH8
      return true;
    }
    return false;
  }
  async sd_G86gDGinhKGGOBYD(bh) {
    const nodes = ['sd_uhosxP0fWlQR2FXo'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_4EOqxbfkQF5AISPS(bh);
      //appendnew_next_sd_G86gDGinhKGGOBYD
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
