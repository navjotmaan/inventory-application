DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS writers;
DROP TABLE IF EXISTS genres;

CREATE TABLE IF NOT EXISTS writers(
    id SERIAL PRIMARY KEY,
    writer_name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS genres(
    id SERIAL PRIMARY KEY,
    genre TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    writer_id INTEGER NOT NULL,
    genre_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),

    FOREIGN KEY (writer_id) REFERENCES writers (id) ON DELETE RESTRICT,
    FOREIGN KEY (genre_id) REFERENCES genres (id) ON DELETE RESTRICT
);

