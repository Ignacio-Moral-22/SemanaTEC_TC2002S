
//Testing
// console.log('Hello, World!');
// console.log('Bienvenido a la Semana Tec');

//Write Text. Require FS
// const fs = require('fs')
// fs.writeFileSync('notes.txt', 'Bienvenido a la Semana TEC. Este es el curso de desarrollo web para entornos ligeros.')
// fs.appendFileSync('notes.txt', " - I'm Xord, your host tonight.")

//Require utils.js
// const checkUtils = require('./utils.js')
// checkUtils()

//Required Yargs
// const yargs = require('yargs')
// yargs.version('1.1.0')
// yargs.command({
//     command: 'add',
//     describe: 'Add a new note',
//     handler: function () {
//         console.log('Adding a new note!')
//     }
// })
// yargs.command({
//     command: 'remove',
//     describe: 'Remove a new note',
//     handler: function () {
//         console.log('Removing a note!')
//     }
// })
// const command = process.argv[2]
// if (command === 'add') {
//     console.log('Add Argument')
// } else if (command === 'remove') {
//     console.log('Remove Argument')
// }
// yargs.parse()
// console.log(yargs.argv)

//Actividad 1
const yargs = require('yargs')
const notes = require('./notes.js')
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})

yargs.parse()