CREATE DATABASE application;
USE application;

CREATE TABLE plates (
    id bigint primary key auto_increment,
    name varchar(255) not null,
    price bigint not null,
    should_serve smallint not null,
    description varchar(1500) not null,
    wait_time_min smallint not null
);

CREATE TABLE ingredients (
    id bigint primary key auto_increment,
    id_plates bigint not null,
    name varchar(255) not null,
    price bigint not null,
    FOREIGN KEY(id_plates) REFERENCES plates(id)
);
