import * as express from 'express';
import { orderPizzaForRia, Store } from './order';

const app = express();
const store = new Store(7172);
app.get('/capacity', (req, res) => {
    res.send('capacity');
});

app.get('/nodeAddresses', async (req, res) => {
    const storeAddress = store.getAddress();
    res.send(storeAddress);
});

app.get('/nodeConditions', async (req, res) => {
    const storeHours = store.getHours();
    res.send(storeHours);
});

app.get('/getPods', (req, res) => {
    res.send('get pods');
});

app.get('/getPodStatus', (req, res) => {
    res.send('pod status');
});

app.get('/getContainerLogs', (req, res) => {
    res.send('get logs');
});

app.get('/getPod', (req, res) => {
    res.send('get pod');
});

app.delete('/deletePod', (req, res) => {
    res.send('delete pod');
});

app.put('/updatePod', (req, res) => {
    res.send('update pod');
});

app.post('/createPod', async (req, res) => {
    const validatedOrder = await orderPizzaForRia(store.getStoreId());
    res.send(validatedOrder);
});

app.listen(3000, () => { console.log("im aliveeeeee!"); });
