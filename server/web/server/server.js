import Express from 'express'
import apiRoutes from './controllers/api'

const app = new Express();
const port = process.env.PORT || 3000;

app.use('/api',apiRoutes);

app.listen(port, (error) => {
    if (error){
        console.error(error)
    } else {
        console.info(`listening on ${port}`)
    }
})