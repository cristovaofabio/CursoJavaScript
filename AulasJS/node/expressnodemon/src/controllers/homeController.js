exports.homePage = (req, res) => {
    res.render('index');
};

exports.dataReceived = (req,res) =>{
    res.send('Hi, I am a new route POST');
};