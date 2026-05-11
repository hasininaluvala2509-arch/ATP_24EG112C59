import exp from 'express'
import { config } from 'dotenv'
config()

const app = exp()

import { connect } from 'mongoose'
import { userApp } from './APIs/UserApi.js'
import { authorApp } from './APIs/AuthorApi.js'
import { adminApp } from './APIs/AdminApi.js'
import { commonApp } from './APIs/CommonApi.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

// body parser
app.use(exp.json())

// cookie parser
app.use(cookieParser())

// ✅ FIXED CORS
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      "http://localhost:5173",
      "https://atp-24-eg-112-c59-qnem-8pzv06u4w.vercel.app"
    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

// routes
app.use('/user-api', userApp)
app.use('/author-api', authorApp)
app.use('/admin-api', adminApp)
app.use('/auth', commonApp)

// connect DB
const connectDB = async () => {
  try {
    await connect(process.env.DB_URL)
    console.log("DB connected")

    const port = process.env.PORT || 5000
    app.listen(port, () => console.log("server listening on port:", port))
  } catch (err) {
    console.log("DB connection error:", err)
  }
}

connectDB()

// invalid path
app.use((req, res) => {
  res.status(404).json({ message: `path ${req.url} is invalid` })
})

// error handler
app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    return res.status(400).json({ message: err.message })
  }
  if (err.name === "CastError") {
    return res.status(400).json({ message: "Invalid ID" })
  }
  res.status(500).json({ message: "Server error", error: err.message })
})
