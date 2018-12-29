const pizzapi = require('dominos');

/* const customer = new pizzapi.Customer(
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
); */

class Store {
    private storeInfo;
    private storeId;
    private _storeObject;

    constructor(storeId: number) {
        this.storeInfo = {};
        this.storeId = storeId;
        this._storeObject = new pizzapi.Store({
            // 7172 for somewhere in seattle
            ID: this.storeId
        });

        this.initProperties();
    };

    initProperties = async () => {
        this.storeInfo = await this.getStoreInfo();
    };

    getStoreInfo = async () => {
        return new Promise((resolve, reject) => {
            this._storeObject.getInfo((result) => {
                if (result['success']) {
                    console.log(result);
                    resolve(result['result']);
                }
            });
        });
    };

    getAddress = () => {
        const storeInfo = this.storeInfo;
        return { streetName: storeInfo['StreetName'], city: storeInfo['City'], state: storeInfo['Region'], zip: storeInfo['PostalCode'] }
    }

    getHours = () => {
        const storeInfo = this.storeInfo;
        return { hours: storeInfo['HoursDescription'] };
    }
}

let myStore = new Store(7172);
debugger;

/* export async function orderPizzaForRia() {
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

const validateOrder = async (order) => {
    return new Promise((resolve, reject) => {
        order.validate((result) => {
            console.log("validate success?");
            resolve(result);
        });
    });
}; */
