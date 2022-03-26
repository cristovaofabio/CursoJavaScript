module.exports = (req, res, next) => {
    if (req.body.my_name) {
        console.log(`I saw that you posted: ${req.body.my_name}`);
    }
    next();
}