const yargs = require('yargs')

/* yargs
    .usage('$0 eiei')
    .command('hello [name]', 'welcome ter yargs!', {
        name: {
            default: 'default name',
            describe: 'the name to say hello to'
        },
        lastName: {
            default: 'default lastName',
            describe: 'the last name to say hi'
        }
    }, (argv) => {
        // console.log('hello', argv.name, 'welcome to yargs!')
        console.log('argv', argv)
    })
    .help()
    .argv */

    /* yargs.command(
        'get',
        'make a get HTTP request',
        (yargs) => {
            return yargs.option('u', {
                alias: 'url',
                describe: 'the URL to make an HTTP request to'
            })
        },
        (argv) => {
            console.log(argv.url)
        }
    )
    .help()
    .argv */

    yargs.command('serve', 'start the server', (y) => {
        y.option('port', {
            describe: 'port to bind on' ,
            default: 5000
        })
    }, (argv) => {
        if(argv.verbose) console.info(`start server on : ${argv.port}`)
        serve(argv.port)
    })
    .options('verbose', {
        alias: 'v',
        default: false
    })
    .help()
    .argv

    function serve(port){
        console.log('port start', port)
    }