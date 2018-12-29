const pizzapi = require('dominos');
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

var storeInfo = {};
myStore.getInfo((result) => {
    if(result['success']) {
        storeInfo = result['result'];
    }
})

export async function getStoreAddress() {
    return await getAddress(storeInfo);
}

export async function getStoreHours() {
    return await getHours(storeInfo);
}

export async function orderPizzaForRia () {
    const order = new pizzapi.Order(
        {
            customer: customer,
            storeID: myStore.ID,
            deliveryMethod: 'Delivery' // (or 'Carryout')
        }
    );

    // pepperoni.
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

const getAddress = async (storeInfo) => {
    return new Promise((resolve, reject) => {
        resolve({streetName: storeInfo['StreetName'], city: storeInfo['City'], state: storeInfo['Region'], zip: storeInfo['PostalCode']});
    });
};

const getHours = async (storeInfo) => {
    return new Promise((resolve, reject) => {
        resolve({hours: storeInfo['HoursDescription']});
    });
};

const validateOrder = async (order) => {
    return new Promise((resolve, reject) => {
        order.validate((result) => {
            console.log("validate success?");
            resolve(result);
        });
    });
};
