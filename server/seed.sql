CREATE DATABASE shoutout;

CREATE TABLE roles (
    user_id INT,
    roles TEXT,
    FOREIGN KEY (user_id) REFERENCES user (user_id)
);

CREATE TABLE user (
    user_id SERIAL,
    cohort_id INT,
    gmail TEXT,
    firstname TEXT,
    lastname TEXT,
    security_token INT,
    password TEXT,
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
    role TEXT,
    user_id INT,
    status BOOLEAN,
    time_stamp INT,
    likes INT,
    PRIMARY KEY (msg_id),
    FOREIGN KEY (user_id) REFERENCES user (user_id)
);

CREATE TABLE likes (
    msg_id INT,
    user TEXT,
    FOREIGN KEY msg_id REFERENCES messages (msg_id),
    FOREIGN KEY user REFERENCES user (user_id)
);