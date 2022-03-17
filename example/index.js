const {once} = require('@iuantu/timemachine');

(async () => {
    await once("once", () => {
        console.debug('hello');
    }, 10);
})();