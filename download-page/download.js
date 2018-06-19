//creating of an HTTP agent
const http = require('http')
//creating a folder and a file
const fs = require('fs')
//working with a folder/file path
const path = require('path')
//generating random values
const uuidv1 = require('uuid/v1')


// The default value of the url is set to a website viniciusgarcia.me, 
// in case the CLI argument URL value is not provided by the CLI argument (process.argv[2]).
const downloadPage = (url='http://viniciusgarcia.me') => {
    console.log('downloading ', url)
    // The function fetchPage takes the URL and a callback function and makes a GET request.
    // The html of the page is sent as the second argument of the callback function 
    // once the response has been completed.
    const fetchPage = (urlF, callback) => {
      http.get(urlF, (response) => {
        let buff = ''
        response.on('data', (chunk) => { 
          buff += chunk
        })
        response.on('end', () => {
          callback(null, buff)
        })
      }).on('error', (error) => {
        console.error(`Got error: ${error.message}`)
        callback(error)
      })
  }

  const folderName = uuidv1()
  fs.mkdirSync(folderName)
  fetchPage(url, (error, data)=>{
    if (error) return console.log(error)
    fs.writeFileSync(path.join(__dirname, folderName, 'url.txt'), url)  
    fs.writeFileSync(path.join(__dirname, folderName, 'file.html'), data)
    console.log('downloading is done in folder ', folderName)
  })
}

downloadPage(process.argv[2])