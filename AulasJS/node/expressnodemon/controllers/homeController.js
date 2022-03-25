exports.homePage = (req, res) => {
    res.send('Hello world!');
};

exports.dataReceived = (req,res) =>{
    res.send('Hi, I am a new route POST');
};