import mongoose from 'mongoose'

export default () => {
    const uri = process.env.MONGO_URI || 'mongodb://0.0.0.0:27017/test'

    mongoose.set('strictQuery', false)

    mongoose
        .connect(uri)
        .then(() => {
            console.log('Database connected')
        })
        .catch((err) => {
            console.log(`Database connection failed : ${err}`)
        })
}
