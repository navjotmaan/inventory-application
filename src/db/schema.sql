DROP TABLE IF EXISTS writers;
DROP TABLE IF EXISTS genres;
DROP TABLE IF EXISTS books;

CREATE TABLE IF NOT EXISTS writers(
    writer_id SERIAL PRIMARY KEY,
    writer_name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS genres(
    genre_id SERIAL PRIMARY KEY,
    genre TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS books (
    book_id SERIAL PRIMARY KEY,
    writer_id INTEGER NOT NULL,
    genre_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),

    FOREIGN KEY (writer_id) REFERENCES writers (writer_id) ON DELETE RESTRICT,
    FOREIGN KEY (genre_id) REFERENCES genres (genre_id) ON DELETE RESTRICT
);

