//creating a folder and a file
const fs = require('fs')
//working with a folder/file path
const path = require('path')
//parser to convert csv to json or column arrays
const csv=require('csvtojson')

const csv2json = (csvFilePath)  => {
    console.log('Converting file ', csvFilePath)
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        fs.writeFile('customer-data.json', JSON.stringify(jsonObj, null, 2), (error)=>{
            if (error) return process.exit(1)
            console.log('Writing is done.')
            process.exit(0)
        })
    })
    console.log('Writing data at ', jsonFilePath)
}

csv2json(process.argv[2])