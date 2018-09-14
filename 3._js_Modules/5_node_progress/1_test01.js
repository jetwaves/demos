
//      https://github.com/visionmedia/node-progress

/*


Options

    These are keys in the options object you can pass to the progress bar along with total as seen in the example above.

        curr                current completed index
        total               total number of ticks to complete
        width               the displayed width of the progress bar defaulting to total
        stream              the output stream defaulting to stderr
        head                head character defaulting to complete character
        complete            completion character defaulting to "="
        incomplete          incomplete character defaulting to "-"
        renderThrottle      minimum time between updates in milliseconds defaulting to 16
        clear               option to clear the bar on completion defaulting to false
        callback            optional function to call when the progress bar completes

Tokens

    These are tokens you can use in the format of your progress bar.

        :bar        the progress bar itself
        :current    current tick number
        :total      total ticks
        :elapsed    time elapsed in seconds
        :percent    completion percentage
        :eta        estimated completion time in seconds
        :rate       rate of ticks per second

*/


var ProgressBar = require('progress');


// :bar        : 用 complete和 incomplete来绘制出来的进度条本地
// :current    : 当前进度
// :token1     : 用户自选的输出值占位符1
// :token2     : 用户自选的输出值占位符2
var bar = new ProgressBar('    [:bar] :current: :token1 :token2.     :rate job/second.    ETA: :eta seconds',
    {
    total: 100,             // 全部的任务数量
    complete: '=',          // 已完成任务的占位符
    incomplete: ' ',        // 未完成任务的占位符
    head: '>',
    width : 50              // 进度条宽度
    }
);



function sleep(wait){
return new Promise(((resolve, reject) => {
    setTimeout(function(){
        resolve('1');
    }, wait);
}));
}



(async function(){
    for(let i=0;i<100;i++){
        await sleep(200);
        // console.log('           i  = ' + i);
        //  注意：
        //      进度每次有进展，调用一次 bar.tick()
        //          进度条的完成度，由实例化时候的total 和tick次数的比例决定
        //          每次tick，可以用自定义的token名字赋值来替代占位符，从而提示进度（eg：杀毒软件正在扫描xx文件1，xx文件2，xx文件3）
        bar.tick({
            token1  : 'hello' + i,
            token2  : 'world' + (100 - i)
        });
    }
})();
