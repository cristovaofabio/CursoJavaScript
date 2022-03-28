module.exports = (req, res, next) => {
    res.locals.oneVariable = 'This is a variable';
    
    if (req.body.my_name) {
        console.log(`I saw that you posted: ${req.body.my_name}`);
    }
    next();
}