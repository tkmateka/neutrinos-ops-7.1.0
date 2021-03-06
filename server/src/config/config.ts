export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    logFile: 'logs/console.log',
    exceptionFile: 'logs/exception.log'
  },
  ids: {
    client_id: 'MnGsXjELI6AJJd2LXV8wp',
    client_secret:
      'Lxtll7iaatYj99euCZNVlAUPEP8ZiZMitx-Nq70d-AM9nPyhbnk3L8Y4AX4frc6KdMtiVs1TDOD_20jPVhLFIA',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'sd_Tp9jNbUvUZ1kJnAn' }
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } }
  }
};
