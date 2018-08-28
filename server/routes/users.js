import express from 'express';
import bodyParser from 'body-parser';

import validateInput from '../shared/validation/signup';

let jsonParser = bodyParser.json();

let router = express.Router();




router.post('/',jsonParser, (req, res) => {
  setTimeout(()=>{
    const {errors, isValid} = validateInput(req.body);
    if(isValid){
      res.send({ success: true });
    }
    else {
      res.status(400).json(errors);
    }
  },3000);



});
export default router;
