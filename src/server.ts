import env from 'dotenv'
import app from './app'

env.config()

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is up at \nhttps://localhost:${PORT}`)
})
