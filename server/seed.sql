CREATE DATABASE shoutout;

    CREATE TABLE roles (
        user_id INT,
        roles TEXT,
        FOREIGN KEY (user_id) REFERENCES users (user_id)
    );

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

    CREATE TABLE cohort (
        cohort_id SERIAL,
        start_date TEXT,
        end_date TEXT,
        PRIMARY KEY (cohort_id)
    );

    CREATE TABLE messages (
        msg_id SERIAL,
        message TEXT,
        role TEXT,
        user_id INT,
        status BOOLEAN,
        time_stamp INT,
        likes INT,
        PRIMARY KEY (msg_id),
        FOREIGN KEY (user_id) REFERENCES users (user_id)
    );

    CREATE TABLE likes (
        msg_id INT,
        users INT,
        
        FOREIGN KEY (users) REFERENCES users (user_id),
        FOREIGN KEY (msg_id) REFERENCES messages (msg_id)
    );