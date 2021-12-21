const os = require('os')

// info about OS platform
console.log(os.platform());

// info about arch
console.log(os.arch());

// info about cpu
console.log(os.cpus());

// free mem
console.log(os.freemem());

// all mem
console.log(os.totalmem());

// root directory
console.log(os.homedir());

// working time OS
console.log(os.uptime());