import { Router } from 'express';
import { celebrate } from 'celebrate';
import { creditCardService } from '../../services';

const router = Router();

router.post('/createToken', async (req, res, next) => {
    try {
        const payload = await creditCardService.createToken(req.headers, req.body);
        console.log(payload, '===== routes')
        res.json({ payload: payload });
    } catch (e) {
        next(e);
    }
});

router.post('/creditCardAuthorization', async (req, res, next) => {
    try {
        const payload = await creditCardService.creditCardAuthorization(req.body);
        console.log(payload, '===== creditCardAuthorization')
        res.json({ payload: payload });
    } catch (e) {
        next(e);
    }
});

export default router;
