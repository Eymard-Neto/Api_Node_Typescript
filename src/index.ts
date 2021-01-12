import express from 'express';
import { createUser } from './service/createUser';

const app = express();

app.get('/', (req,res) => {
    const user = createUser({
        email: "eymardneto115@gmail.com",
        password: "123456",
        techs: ["Show"]
    });
    return res.json({message: "Hello world!"});
});

app.listen(3333,() => {
    console.log('Servidor no Ar!');
    
})