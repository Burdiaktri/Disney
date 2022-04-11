import { check, validationResult } from "express-validator";

const validateUser = [
    check("username").exists().not().isEmpty(),
    check("email").exists().isEmail().not().isEmpty(),
    check("password").exists().not().isEmpty().isLength({ min: 5 }),
    (req, res, next) => {
        validateResult(req, res, next);
      }
]

const validateResult = (req, res, next) => {
    try {
      validationResult(req).throw();
      return next();
    } catch (err) {
      res.status(403).send({ errors: err.array() });
    }
  };

export default validateUser;