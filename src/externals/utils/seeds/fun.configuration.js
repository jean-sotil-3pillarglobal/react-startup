/* eslint-disable */
if (!window.fun) window.fun = {
    account: {},
    utils: {},
    views: {},
    instances: {},
    containers: {},
    models: {},
    strings: {},
    conf: {}
};

/*
 Configuration seed
*/
fun.conf = {
    // username account
    account: 'account',
    // dashboard context "organization"
    context: 'context',
    // html templates
    html: '/static/html',
    // internet domain
    domain: 'codemachine.io',
    // seed url root
    urlRoot: '/api/',

    // system uuid's
    uuidRecord: 'record_uuid',

    lapse: 'lapse',

    startTime: 'start_time',
    endTime: 'end_time',

    first: 'first',
    last: 'last',

    next: 'next',
    previous: 'previous',

    pageNumber: 'page_number',
    pageSize: 'page_size',
    pageSmall: 8,
    pageMedium: 13,
    pageBig: 21
};


/*
 System urls
*/
fun.conf.urls = {
    login: 'https://ws.spqr.ws/login/',
    logout: 'https://lb.codemachine.io/logout',
    users: 'https://lb.codemachine.io/users/',
    emails: 'https://lb.codemachine.io/emails/'
};

export default fun;