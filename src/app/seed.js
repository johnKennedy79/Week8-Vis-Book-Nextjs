import { db } from "@/lib/db";

db.query(`CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    password VARCHAR(15) NOT NULL
    ) 
    
    CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    colour VARCHAR(25)
    )
    
    CREATE TABLE IF NOT EXISTS posts (
    id SERIAL PRIMARY KEY,
    post TEXT NOT NULL,
    timestamp timestamp default now(),
    category_id INTEGER REFERENCES categories(id),
    user_id INTEGER REFERENCES users(id)
    )
    
    CREATE TABLE IF NOT EXISTS comments (
    id SERIAL PRIMARY KEY,
    comment TEXT NOT NULL,
    timestamp timestamp default now(),
    user_id INTEGER REFERENCES users(id),
    post_id INTEGER REFERENCES posts(id)
    )
    
    CREATE TABLE IF NOT EXISTS reactions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(25),
    count INT,
    user_id INTEGER REFERENCES users(id),
    post_id INTEGER REFERENCES posts(id),
    comment_id INTEGER REFERENCES comments(id)
    )`);
