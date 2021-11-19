const {Router} = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const SessionController = require('./controllers/SessionController')
const HouseController = require('./controllers/HouseController')


const routes = new Router()

const upload = multer(uploadConfig)

routes.get('/', (req,res) =>{
    return res.json({ok: true})
})


routes.post('/session', SessionController.store)

routes.post('/houses', upload.single('thumbnail') ,HouseController.store)


module.exports = routes