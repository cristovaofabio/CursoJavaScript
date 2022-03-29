exports.middlewareGlobal = (req, res, next) => {
    res.locals.oneVariable = 'This is a variable';

    if (req.body.my_name) {
        console.log(`I saw that you posted: ${req.body.my_name}`);
    }
    next();
}

exports.checkCsrfError = (err, req, res, next) => {
    if (err && 'EBADCSRFTOKEN' === err.code) {
        return res.render('404');
    }
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  };

