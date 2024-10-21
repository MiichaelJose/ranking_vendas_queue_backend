const class1xx = {
    /**
     * This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100)
     */
    '100 Continue': 100,
    /**
     * This code is sent in response to an [Upgrade](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) request header from the client, and indicates the protocol the server is switching to.
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101)
     */
    '101 Switching Protocols': 101,
    /** This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished. */
    '102 Processing': 102,
    /**
     * This status code is primarily intended to be used with the [Link](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) header, letting the user agent start [preloading](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload) resources while the server prepares a response.
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103)
     */
    '103 Early Hints': 103,
}

const class2xx = {
    /**
   * The request has succeeded. The meaning of the success depends on the HTTP method:
   *
   * - `GET`: The resource has been fetched and is transmitted in the message body.
   * - `HEAD`: The representation headers are included in the response without any message body.
   * - `PUT` or `POST`: The resource describing the result of the action is transmitted in the message body.
   * - `TRACE`: The message body contains the request message as received by the server.

   *
   * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200)
   */
    '200 OK': 200,
    /** The request has succeeded and a new resource has been created as a result. This is typically the response sent after `POST` requests, or some `PUT` requests.
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201)
     */
    '201 Created': 201,
    /** The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202)
     */
    '202 Accepted': 202,
    /** This response code means the returned meta-information is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy. This is mostly used for mirrors or backups of another resource. Except for that specific case, the "200 OK" response is preferred to this status.
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203)
     */
    '203 Non-Authoritative Information': 203,
    /** There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204)
     */
    '204 No Content': 204,
    /** Tells the user-agent to reset the document which sent this request.
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205)
     */
    '205 Reset Content': 205,
    /** This response code is used when the Range header is sent from the client to request only part of a resource.
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206)
     */
    '206 Partial Content': 206,
    /** Conveys information about multiple resources, for situations where multiple status codes might be appropriate. */
    '207 Multi-Status': 207,
    /** Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection. */
    '208 Already Reported': 208,
    /** The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance. */
    '226 IM Used': 226,
}

const class3xx = {
    /** The request has more than one possible response. The user-agent or user should choose one of them. (There is no standardized way of choosing one of the responses, but HTML links to the possibilities are recommended so the user can pick.)
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300)
     */
    '300 Multiple Choices': 300,
    /** The URL of the requested resource has been changed permanently. The new URL is given in the response.
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301)
     */
    '301 Moved Permanently': 301,
    /** This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302)
     */
    '302 Found': 302,
    /** The server sent this response to direct the client to get the requested resource at another URI with a GET request.
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303)
     */
    '303 See Other': 303,
    /** This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304)
     */
    '304 Not Modified': 304,
    /** Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy. */
    '305 Use Proxy': 305,
    /** The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request.
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307)
     */
    '307 Temporary Redirect': 307,
    /** This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request.
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308)
     */
    '308 Permanent Redirect': 308,
}

const class4xx = {
    '400 Bad Request': 400,
    '401 Unauthorized': 401,
    '402 Payment Required': 402,
    '403 Forbidden': 403,
    '404 Not Found': 404,
    '405 Method Not Allowed': 405,
    '406 Not Acceptable': 406,
    '407 Proxy Authentication Required': 407,
    '408 Request Timeout': 408,
    '409 Conflict': 409,
    '410 Gone': 410,
    '411 Length Required': 411,
    '412 Precondition Failed': 412,
    '413 Payload Too Large': 413,
    '414 URI Too Long': 414,
    '415 Unsupported Media Type': 415,
    '416 Range Not Satisfiable': 416,
    '417 Expectation Failed': 417,
    "418 I'm a Teapot": 418,
    '421 Misdirected Request': 421,
    '422 Unprocessable Entity': 422,
    '423 Locked': 423,
    '424 Failed Dependency': 424,
    '425 Too Early': 425,
    '426 Upgrade Required': 426,
    '428 Precondition Required': 428,
    '429 Too Many Requests': 429,
    '431 Request Header Fields Too Large': 431,
    '451 Unavailable For Legal Reasons': 451,
}
const class5xx = {
    '500 Internal Server Error': 500,
    '501 Not Implemented': 501,
    '502 Bad Gateway': 502,
    '503 Service Unavailable': 503,
    '504 Gateway Timeout': 504,
    '505 HTTP Version Not Supported': 505,
    '506 Variant Also Negotiates': 506,
    '507 Insufficient Storage': 507,
    '508 Loop Detected': 508,
    '509 Bandwidth Limit Exceeded': 509,
    '510 Not Extended': 510,
    '511 Network Authentication Required': 511,
}

export type Status1XXNames =
    /**
     * This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100)
     */
    | '100 Continue'
    | '101 Switching Protocols'
    | '102 Processing'
    | '103 Early Hints'

export type Status2XXNames =
    | '200 OK'
    | '201 Created'
    | '202 Accepted'
    | '203 Non-Authoritative Information'
    | '204 No Content'
    | '205 Reset Content'
    | '206 Partial Content'
    | '207 Multi-Status'
    | '208 Already Reported'
    | '226 IM Used'

export type Status3XXNames =
    | '300 Multiple Choices'
    | '301 Moved Permanently'
    | '302 Found'
    | '303 See Other'
    | '304 Not Modified'
    | '305 Use Proxy'
    | '307 Temporary Redirect'
    | '308 Permanent Redirect'

export type Status4XXNames =
    | '400 Bad Request'
    | '401 Unauthorized'
    | '402 Payment Required'
    | '403 Forbidden'
    | '404 Not Found'
    | '405 Method Not Allowed'
    | '406 Not Acceptable'
    | '407 Proxy Authentication Required'
    | '408 Request Timeout'
    | '409 Conflict'
    | '410 Gone'
    | '411 Length Required'
    | '412 Precondition Failed'
    | '413 Payload Too Large'
    /** Server error responses */
    | '414 URI Too Long'
    | '415 Unsupported Media Type'
    | '416 Range Not Satisfiable'
    | '417 Expectation Failed'
    | "418 I'm a Teapot"
    | '421 Misdirected Request'
    | '422 Unprocessable Entity'
    | '423 Locked'
    | '424 Failed Dependency'
    | '425 Too Early'
    | '426 Upgrade Required'
    | '428 Precondition Required'
    | '429 Too Many Requests'
    | '431 Request Header Fields Too Large'
    | '451 Unavailable For Legal Reasons'

export type Status5XXNames =
    | '500 Internal Server Error'
    | '501 Not Implemented'
    | '502 Bad Gateway'
    | '503 Service Unavailable'
    | '504 Gateway Timeout'
    | '505 HTTP Version Not Supported'
    | '506 Variant Also Negotiates'
    | '507 Insufficient Storage'
    | '508 Loop Detected'
    | '509 Bandwidth Limit Exceeded'
    | '510 Not Extended'
    | '511 Network Authentication Required'

export const SchemaCascade = {
    /** Information responses */
    '1XX': class1xx,
    /** Successful responses */
    '2XX': class2xx,
    /** Redirection messages */
    '3XX': class3xx,
    /** Client error responses */
    '4XX': class4xx,
    /** Server error responses */
    '5XX': class5xx,
}

export type StatusName =
    /**
     * This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.
     *
     * [Reference on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100)
     */
    | Status1XXNames
    | Status2XXNames
    | Status3XXNames
    | Status4XXNames
    | Status5XXNames

export default {
    ...class5xx,
    ...class4xx,
    ...class3xx,
    ...class2xx,
    ...class1xx,
}
