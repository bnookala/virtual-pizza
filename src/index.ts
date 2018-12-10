import * as express from 'express';
import * as dominos from 'dominos';
import { orderPizzaForRia } from './order';

const app = express()

app.get('/capacity', function (req, res) {
    res.send('capacity')
});

app.get('/nodeAddresses', function (req, res) {
    res.send('node addresses')
});

app.get('/nodeConditions', function (req, res) {
    res.send('node conditions')
});

app.get('/getPods', function (req, res) {
    res.send('get pods')
});

app.get('/getPodStatus', function (req, res) {
    res.send('pod status');
});

app.get('/getContainerLogs', function (req, res) {
    res.send('get logs');
});

app.get('/getPod', function (req, res) {
    res.send('get pod');
});

app.delete('/deletePod', function (req, res) {
    res.send('delete pod');
});

app.put('/updatePod', function (req, res) {
    res.send('update pod');
});

app.post('/createPod', async function (req, res) {
    const validatedOrder = await orderPizzaForRia();
    res.send(validatedOrder);
});

app.listen(3000, () => { console.log("im aliveeeeee!"); });