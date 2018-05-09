import Express from 'express'

const app = new Express();
const apiRoutes = Express.Router();

import area from '../data/area.json'
import route1 from '../data/route_1.json'
import route2 from '../data/route_2.json'


apiRoutes.get('/area',(req,res) => {
    res.status(200).json(area)
})

apiRoutes.get('/route/:id',(req,res) => {
    if (req.params.id=='1') res.status(200).json(route1)
    else res.status(200).json(route2)
})

export default apiRoutes;