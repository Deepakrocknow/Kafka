const  {kafka}  = require('./client')

async function init(){
    const admin = kafka.admin();
    console.log("admin connecting ...")
    await admin.connect();
    console.log("admin connection success ...")
    
    console.log("topic creation ...")
    await admin.createTopics({
        topics:[
            {
                topic:"rider-updates",
                numPartitions:2,
            },
        ],
    });
    console.log("topic creation success ...")
    
    console.log("disconnetion done ...")
    await admin.disconnect();
}

init();