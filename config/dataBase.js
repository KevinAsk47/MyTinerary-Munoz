const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://kevinask47:k49312629@cluster0.ffp2n.mongodb.net/mytineray?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log("Database connected"))
.catch(error => console.log(error))