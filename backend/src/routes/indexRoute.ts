import { Router } from "express";
import { send } from "process";

const router = Router();
router.get('/',(req,res,send)=>{
    res.json('Site eventos');

})
export default router;