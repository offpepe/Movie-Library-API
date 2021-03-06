const ERROR = {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_ALLOWED: 405,
    NOT_ACCEPTABLE: 406,
    REQUEST_TIMEOUT: 408,
    CONFLICT: 409,
    IM_NOT_A_TEAPOT: 418,
    UNPROCESSABLE_ENTITY: 422,
    INTERNAL_ERROR: 505,
};

const SUCCESS = {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    NO_CONTENT: 204,
};

module.exports = {
    ERROR,
    SUCCESS,
};