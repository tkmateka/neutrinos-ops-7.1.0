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

//append_imports_end

export class idsutil {
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
    this.serviceName = 'idsutil';
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
      instance = new idsutil(
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
      //appendnew_flow_idsutil_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: idsutil');

    //appendnew_flow_idsutil_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: idsutil');
    //appendnew_flow_idsutil_HttpIn
  }
  //   service flows_idsutil

  public async getIDSClientInstance(clientInstance = null, ...others) {
    let bh = { input: { clientInstance: clientInstance }, local: {} };
    try {
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_Fx2ITotCU30Uj9UH(bh);
      //appendnew_next_getIDSClientInstance
      //Start formatting output variables
      let outputVariables = {
        input: {
          clientInstance: bh.input.clientInstance
        },
        local: {}
      };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qMYpv1hu5S6zfFW1');
    }
  }

  public async getAuthorizationParams(authParams = null, ...others) {
    let bh = { input: { authParams: authParams }, local: {} };
    try {
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_oNjruAQlUTvASc5k(bh);
      //appendnew_next_getAuthorizationParams
      //Start formatting output variables
      let outputVariables = {
        input: {
          authParams: bh.input.authParams
        },
        local: {}
      };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QD4cWUAfL4J68wwC');
    }
  }

  public async handleTokenExpiry(
    existingSession = '',
    newSession = '',
    ...others
  ) {
    let bh = {
      input: { existingSession: existingSession, newSession: newSession },
      local: {}
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_AeFrSnAEVns0yHG5(bh);
      //appendnew_next_handleTokenExpiry
      //Start formatting output variables
      let outputVariables = {
        input: {
          newSession: bh.input.newSession
        },
        local: {}
      };
      //End formatting output variables
      return outputVariables;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_18vo65LdHRkdp4ed');
    }
  }
  //appendnew_flow_idsutil_Start

  //new_service_variable_client
  client: any;
  async sd_Fx2ITotCU30Uj9UH(bh) {
    try {
      bh.local.client = this['client'];
      bh = await this.sd_cW8Va26l8ssjLlqT(bh);
      //appendnew_next_sd_Fx2ITotCU30Uj9UH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Fx2ITotCU30Uj9UH');
    }
  }

  async sd_cW8Va26l8ssjLlqT(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['istype'](
          bh.local.client,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_zGccbpDEtQ5IoDbD(bh);
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
        bh = await this.sd_kvbAHl2ev85N8oWY(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cW8Va26l8ssjLlqT');
    }
  }

  async sd_zGccbpDEtQ5IoDbD(bh) {
    try {
      const DEFAULT_HTTP_OPTIONS = {
        timeout: 60000
      };

      custom.setHttpOptionsDefaults({
        timeout: DEFAULT_HTTP_OPTIONS.timeout
      });
      log.info(
        `Identity server default HTTP options : ${DEFAULT_HTTP_OPTIONS}`
      );
      const issuer = await Issuer.discover(
        settings.default['ids']['issuerURL']
      );
      log.info(`Identity server discovered at : ${issuer.issuer}`);
      const client = await new issuer.Client({
        client_id: settings.default['ids']['client_id'],
        client_secret: settings.default['ids']['client_secret']
      });
      client[custom.clock_tolerance] = process.env.CLOCK_TOLERANCE;
      log.info('Client connected...');
      bh.input.clientInstance = client;
      bh = await this.sd_dL9L4EvMIZdWT2cX(bh);
      //appendnew_next_sd_zGccbpDEtQ5IoDbD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zGccbpDEtQ5IoDbD');
    }
  }

  async sd_dL9L4EvMIZdWT2cX(bh) {
    try {
      this['client'] = bh.input.clientInstance;
      //appendnew_next_sd_dL9L4EvMIZdWT2cX
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dL9L4EvMIZdWT2cX');
    }
  }

  async sd_kvbAHl2ev85N8oWY(bh) {
    try {
      bh.input.clientInstance = this['client'];
      //appendnew_next_sd_kvbAHl2ev85N8oWY
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kvbAHl2ev85N8oWY');
    }
  }
  async sd_oNjruAQlUTvASc5k(bh) {
    try {
      bh.input.authParams = {
        scope: 'openid profile email address phone offline_access user',
        prompt: 'consent'
      };
      //appendnew_next_sd_oNjruAQlUTvASc5k
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oNjruAQlUTvASc5k');
    }
  }
  async sd_AeFrSnAEVns0yHG5(bh) {
    try {
      const tokenset = bh.input.existingSession.data.tokenset;
      bh.local.expires_at = tokenset['expires_at'] * 1000;
      bh.local.refreshTime = new Date().valueOf() + 300000; // 5min before
      bh = await this.sd_H94kzBS6oI33g1rm(bh);
      //appendnew_next_sd_AeFrSnAEVns0yHG5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AeFrSnAEVns0yHG5');
    }
  }

  async sd_H94kzBS6oI33g1rm(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          bh.local.expires_at,
          bh.local.refreshTime,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_zLDisDX82oxs2tks(bh);
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
        bh = await this.sd_iu6XkD5MetiBA6NN(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_H94kzBS6oI33g1rm');
    }
  }

  async sd_zLDisDX82oxs2tks(bh) {
    try {
      bh.input.newSession = bh.input.existingSession.data;
      //appendnew_next_sd_zLDisDX82oxs2tks
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zLDisDX82oxs2tks');
    }
  }
  async sd_iu6XkD5MetiBA6NN(bh) {
    try {
      const idsutilInstance = idsutil.getInstance();
      let outputVariables = await idsutilInstance.getIDSClientInstance(null);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_xXNxINztiDtdyZvd(bh);
      //appendnew_next_sd_iu6XkD5MetiBA6NN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iu6XkD5MetiBA6NN');
    }
  }
  async sd_xXNxINztiDtdyZvd(bh) {
    try {
      bh.local.refresh_token = await bh.input.client.introspect(
        bh.input.existingSession.data.tokenset.refresh_token,
        'refresh_token'
      );
      bh = await this.sd_oX7JosgOn2i8iReR(bh);
      //appendnew_next_sd_xXNxINztiDtdyZvd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xXNxINztiDtdyZvd');
    }
  }

  async sd_oX7JosgOn2i8iReR(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.refresh_token.active,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_bCXiqnIMyiE4obyF(bh);
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
        bh = await this.sd_7agIZ8XtStYZFJ9k(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oX7JosgOn2i8iReR');
    }
  }

  async sd_bCXiqnIMyiE4obyF(bh) {
    try {
      bh.input.newSession = { rotated: true };
      bh.input.newSession['tokenset'] = await bh.input.client.refresh(
        bh.input.existingSession.data.tokenset.refresh_token
      );
      bh.input.newSession['userInfo'] = await bh.input.client.userinfo(
        bh.input.newSession['tokenset']['access_token']
      );
      bh.input.newSession['tokenset']['claims'] = Object.assign(
        {},
        bh.input.newSession['tokenset'].claims()
      );
      //appendnew_next_sd_bCXiqnIMyiE4obyF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bCXiqnIMyiE4obyF');
    }
  }
  async sd_7agIZ8XtStYZFJ9k(bh) {
    try {
      bh.input.newSession = false;
      //appendnew_next_sd_7agIZ8XtStYZFJ9k
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7agIZ8XtStYZFJ9k');
    }
  }
  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_Q5l20exyOolFsxl1(bh))
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

  async sd_Q5l20exyOolFsxl1(bh) {
    const nodes = ['handleTokenExpiry'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_7agIZ8XtStYZFJ9k(bh);
      //appendnew_next_sd_Q5l20exyOolFsxl1
      return true;
    }
    return false;
  }

  //appendnew_flow_idsutil_Catch
}
