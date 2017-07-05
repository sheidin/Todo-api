const env = process.env.NODE_ENV || 'development';
if(env === 'development'){
    process.env.PORT = 3000;
    process.env.MONGO_DB = 'mongodb://localhost:27017/TodoApp';
}
const port = process.env.PORT;