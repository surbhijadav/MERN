const validate = (schema) => async (req, res, next) => {
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      next();
    } catch (err) {
      const status = 422;
      const message = "fill the data properly";
      const extraDetails = err.issues?.[0]?.message || "Validation error";
  
      const error = {
        status,
        message,
        extraDetails,
      };
  
      console.log(error);
      return res.status(400).json(error);
    }
  };
  
  module.exports = validate;
  