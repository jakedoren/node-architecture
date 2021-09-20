exports.validateCreateItemFields = (req, res, next) => {
    const { name, price } = req.body;
    if(!name || !price ) return res.status(400).json({ errorMessage: "Please enter in a name and price"})
    next()
}