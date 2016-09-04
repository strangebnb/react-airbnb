create table customers (
    id serial not null primary key,
    auth_id varchar(30) not null,
    given_name varchar(35),
    family_name varchar(35),
    full_name varchar(70),
    phone varchar(20),
    address varchar(32),
    city varchar(32),
    state char(2),
    zip char(5),
    gender char(1),
    description text
);