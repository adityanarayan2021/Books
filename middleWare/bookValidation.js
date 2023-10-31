import Joi from "joi";


//validation for book input fields
const bookDetailsSchema = Joi.object().keys({
  title: Joi.string().required(),
  author: Joi.string().required(),
  summary: Joi.string().required(),
});

const validate = (req, res, next) => {
    const { error } = bookDetailsSchema.validate(req.body);
  
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
  
    next();
};

export default validate;
