INSERT INTO genres (genre) VALUES ('Fiction'), ('Self-help'), ('Philosophy'), ('Mystery'), ('History'), ('Psychology');

INSERT INTO writers (writer_name) VALUES ('Sidney Sheldon'), ('James Clear'), ('Fyodor Dostoyevsky'), ('Jane Austen'),
    ('George Orwell'), ('Franz Kafka'), ('Brianna Wiest'), ('Cal Newport'), ('Jeff Keller'), ('DR. Joseph Murphy'),
    ('Marcus Aurelius'), ('Friedrich Nietzsche'), ('Plato'), ('Yogesh Sy'), ('Alex Michaelides');

INSERT INTO books (title, price, rating, genre_id, writer_id) VALUES ('Nothing Lasts Forever', 250, 4, 1, 1),
    ('White Nights', 112, 4.5, 1, 3), ('Pride and Prejudice', 200, 4.5, 1, 4), ('1984', 250, 4.5, 1, 5), 
    ('Metamorphosis', 100, 4.5, 2, 6), ('Atomic Habits', 300, 4.5, 2, 2), ('The Mountain Is You', 200, 3, 2, 7),
    ('Deep Work', 180, 4, 2, 8), ('Attitude Is Everything', 130, 4.5, 2, 9), ('The Power Of Your Subconscious Mind', 332, 4, 2, 10),
    ('Meditations', 220, 5, 3, 11), ('Beyond Good And Evil', 120, 4, 3, 12), ('The Republic', 200, 4.5, 3, 13),
    ('The Final Experiment', 250, 4, 4, 14), ('The Silent Patient', 180, 5, 4, 15);