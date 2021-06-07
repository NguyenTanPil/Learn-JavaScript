/*
    resourse: https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/

    steps to make ice cream
    #1 Place order
    #2 Cut the fruit
    #3 Add water and ice
    #4 Start a machine
    #5 Select container
    #6 Select toppings
    #7 Serve ice cream
 */

// store ingredients
let stock = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
};

// order from customer -> fetch ingredients -> start production -> serve ice cream

// order function
let orderCallback = (fruit_name, call_production) => {

    setTimeout(() => {
        console.log(`${stock.Fruits[fruit_name]} was selected`);

        call_production();
    }, 2000);

};
// production function
let production = () => {
    setTimeout(() => {
        console.log('Production has started');
        setTimeout(() => {
            console.log('The fruit has been chopped');
            setTimeout(() => {
                console.log(`${stock.liquid[0]} and ${stock.liquid[1]} added`);
                setTimeout(() => {
                    console.log('Starting machine');
                    setTimeout(() => {
                        console.log(`Ice cream placed on ${stock.holder[1]}`);
                        setTimeout(() => {
                            console.log(`${stock.toppings[0]} as toppings`);
                            setTimeout(() => {
                                console.log('Sever ice cream');
                            }, 2000);
                        }, 3000);
                    }, 2000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0000);
};

let is_shop_open = true;

let workPromises = (time, work) => {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(() => {
                resolve(work());
            }, time);
        } else {
            reject(console.log('Our shop is close'));
        }
    })
}

function orderPromise() {
    workPromises(2000, () => console.log(`${stock.Fruits[0]} was selected`))
        .then(() => {
            return workPromises(2000, () => console.log(`Production has started`));
        })
        .then(() => {
            return workPromises(0000, () => console.log(`Fruit has been chopped`));
        })
        .then(() => {
            return workPromises(1000, () => console.log(`${stock.liquid[0]} and ${stock.liquid[1]} added`));
        })
        .then(() => {
            return workPromises(1000, () => console.log(`start the machine`));
        })
        .then(() => {
            return workPromises(2000, () => console.log(`ice cream placed on ${stock.holder[1]}`));
        })
        .then(() => {
            return workPromises(2000, () => console.log(`${stock.toppings[0]} as toppings`));
        })
        .then(() => {
            return workPromises(2000, () => console.log(`Serve Ice Cream`));
        })
        .catch(() => {
            console.log('Custome left');
        })
        .finally(() => {
            console.log('End of day');
        });

}

function time(ms) {
    return new Promise((resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log('Shop is close'));
        }
    });
}

async function kitchen() {
    try {
        // time taken perform this 1 task
        await time(2000)
        console.log(`${stock.Fruits[0]} was selected`)

        await time(0000)
        console.log("production has started")

        await time(2000)
        console.log("fruit has been chopped")

        await time(1000)
        console.log(`${stock.liquid[0]} and ${stock.liquid[1]} added`)

        await time(1000)
        console.log("start the machine")

        await time(2000)
        console.log(`ice cream placed on ${stock.holder[1]}`)

        await time(3000)
        console.log(`${stock.toppings[0]} as toppings`)

        await time(2000)
        console.log("Serve Ice Cream")
    } catch (error) {
        console.log('Customer left', error);
    } finally {
        console.log('Day ended, shop close');
    }
}

let option = 3;

function start(option) {
    if (option == 1) {
        // callback
        orderCallback(0, production);
    } else if (option == 2) {
        // promises
        orderPromise();
    } else {
        // async/await
        kitchen();
    }
}
start();