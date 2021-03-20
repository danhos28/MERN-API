exports.register = (req, res, next) => {
    // const name = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;

    const{name,email,password} = req.body; //sama seperti diatas, hanya di destructure pakai es6 
    
    const result = {
        message: 'Register Success',
        data: {
            uid: 1,
            name: name,
            email: email,
        }
    }
    res.status(201).json(result);
}