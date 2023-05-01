const express = require('express');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors());


const hotels = require('./data/hotel.json')
const places = require('./data/travel-data.json')

console.log(hotels);

app.get('/', (req, res) => {
    res.send('Travel guru server is running')
})

app.get('/places', (req, res) => {
    res.send(places)
})
app.get('/places/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const categoryInfo = places.destinations.find(info => parseInt(info.id) === id);
    res.send(categoryInfo)

})

app.get('/hotels', (req, res) => {
    res.send(hotels)
})
app.get('/hotels/:id', (req, res) => {
    const bookingId = parseInt(req.params.id)
    const bookingInfo = hotels.find(booking => parseInt(booking.id) === bookingId)
    console.log(bookingInfo);
    res.send(bookingInfo)
})




app.listen(port, () => {
    console.log(`Travel guru server is running on port ${port}`);
})