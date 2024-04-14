const PORT = 4557

const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()

const articles = []
const websites =[
    {
        name : 'NDTV Profit',
        address: 'https://www.ndtvprofit.com/'
    },
    {
        name : 'Live Mint',
        address: 'https://www.livemint.com/market'
    },
]

app.get('/', (req,res) => {
    res.json("avo avo avo avo avo mari API par 🫡");
})
const weburl = 'https://www.thequint.com/'

app.get('/news', (req,res) => {
    axios.get(weburl)
        .then((response) => {
            const html = response.data
            const $ = cheerio.load(html)

            $('a:contains("Markets")', html).each(function() {
                const title = $(this).text()
                const url =  $(this).attr('href')

                articles.push({
                    title,
                    url
                })
                
            })
            $('a:contains("stocks")', html).each(function() {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url
                })
                
            })
            $('a:contains("share market")', html).each(function() {
                const title = $(this).text()
                const url = $(this).attr('href')

                articles.push({
                    title,
                    url
                })
                
            })
            res.json(articles)
        }).catch((err) => {console.log(err)})
})











app.listen(PORT, () => console.log(`server bara chaltu che ${PORT} ani par`))