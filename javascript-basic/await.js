function wait(ms) {
    return new Promise(resolve => setTimeout(resolve,ms));
}

async function run() {
    console.log("Start");
    await wait(2000);
    console.log("2秒たった");
    
}

run();