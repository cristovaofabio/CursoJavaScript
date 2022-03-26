exports.homePage = (req, res) => {
    res.render('index');
    return;
};

exports.dataReceived = (req, res) => {
    res.send(req.body);
    return;
};