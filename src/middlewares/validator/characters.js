import { check, validationResult } from "express-validator";

const validatePostCharacter = [
    check("name").exists().not().isEmpty(),
    check("image").exists(),
    check("age").exists(),
    check("story").exists(),
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

  export default validatePostCharacter;