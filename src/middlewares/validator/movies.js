import { check, validationResult } from "express-validator";

const validatePostMovie = [
    check("title").exists().not().isEmpty(),
    check("image").exists(),
    check("date").exists(),
    check("rating").exists(),
    check("charactersid").exists(),
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

export default validatePostMovie;