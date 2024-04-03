function notfound(status, message) {
  var response = {
    statusCode: 404,
    status: status,
    message: message
  };
  return response;
}

function clienterror(status, message) {
  var response = {
    statusCode: 400,
    status: status,
    message: message
  };
  return response;
}

function servererror(message) {
  var response = {
    statusCode: 500,
    status: 'error',
    message: message
  };
  return response;
}

function successwithdata (status, message, data) {
  var response = {
    statusCode: 200,
    status: status,
    message: message,
    data: data
  };
  return response;
}

function success (status, message) {
  var response = {
    statusCode: 200,
    status: status,
    message: message
  };
  return response;
}

function successcreated (status, message) {
  var response = {
    statusCode: 201,
    status: status,
    message: message
  };
  return response;
}

function successcreatedwithdata (status, message, data) {
  var response = {
    statusCode: 201,
    status: status,
    message: message,
    data: data
  };
  return response;
}

function successwithdataANDcount (count, status, message, data) {
  var response = {
    statusCode: 200,
    status: status,
    count: count,
    message: message,
    data: data
  };
  return response;
}

module.exports = {
  clienterror,
  notfound,
  servererror,
  successwithdata,
  success,
  successcreated,
  successcreatedwithdata,
  successwithdataANDcount
};
