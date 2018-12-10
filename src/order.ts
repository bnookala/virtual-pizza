var pizzapi = require('dominos');


export async function orderPizzaForRia () {
    const myStore = new pizzapi.Store({
        ID: "7172"
    });

    const customer = new pizzapi.Customer(
        {
            firstName: 'Ria',
            lastName: 'Bhatia',
            address: {
                Street: "320 Westlake Avenue",
                City: "Seattle",
                Region: "WA",
                PostalCode: "98109"
            },
            email: 'mycoolemail@gmail.com',
            phone: '4258828080'
        }
    );

    const order = new pizzapi.Order(
        {
            customer: customer,
            storeID: myStore.ID,
            deliveryMethod: 'Delivery' //(or 'Carryout')
        }
    );

    //pepperoni.
    order.addItem(
        new pizzapi.Item(
            {
                code: '14SCPFEAST',
                options: [],
                quantity: 1
            }
        )
    );

    return await validateOrder(order);
}

const validateOrder = async function (order) {
    return new Promise((resolve, reject) => {
        order.validate((result) => {
            console.log("validate success?");
            resolve(result);
        });
    });
};