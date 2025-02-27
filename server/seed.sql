CREATE DATABASE shoutout;

    CREATE TABLE users (
        user_id SERIAL,
        cohort_id INT,
        gmail TEXT,
        firstname TEXT,
        lastname TEXT,
        security_token INT,
        time_stamp INT,
        PRIMARY KEY (user_id),
        FOREIGN KEY (cohort_id) REFERENCES cohort (cohort_id)

    );

    CREATE TABLE roles (
        user_id INT,
        roles TEXT,
        FOREIGN KEY (user_id) REFERENCES users (user_id)
    );

    CREATE TABLE cohort (
        cohort_id SERIAL,
        start_date TEXT,
        cohort_name TEXT,
        end_date TEXT,
        PRIMARY KEY (cohort_id)
    );

    CREATE TABLE messages (
        msg_id SERIAL,
        event_id int,
        cohort_id, int,
        message TEXT,
        role TEXT,
        user_id INT,
        status BOOLEAN,
        time_stamp INT,
        likes INT,
        PRIMARY KEY (msg_id),
        FOREIGN KEY (user_id) REFERENCES users (user_id),
        FOREIGN KEY (cohort_id) REFERENCES cohort (cohort_id),
        FOREIGN KEY (event_id) REFERENCES events (event_id)
    );

    CREATE TABLE likes (
        likes_total INT,
        msg_id INT,
        users INT,
        FOREIGN KEY (users) REFERENCES users (user_id),
        FOREIGN KEY (msg_id) REFERENCES messages (msg_id)
    );

    CREATE TABLE events (
        event_id SERIAL,
        PRIMARY KEY (event_id)
    );