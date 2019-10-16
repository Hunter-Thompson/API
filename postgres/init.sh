#!/bin/bash
set -e

psql postgres  <<-EOSQL
    CREATE ROLE hunter WITH LOGIN PASSWORD 'helloworld';
    ALTER ROLE hunter CREATEDB;
    CREATE DATABASE api;
    GRANT ALL PRIVILEGES ON DATABASE api TO hunter;
EOSQL

psql -d api -U hunter <<-EOSQL
    CREATE SCHEMA legalist
    CREATE TABLE Attorney(
    id SERIAL NOT NULL,
    firstname VARCHAR(32) NOT NULL,
    lastname VARCHAR(32) NOT NULL,
    barid INT NOT NULL,
    state VARCHAR(32) NOT NULL
    )

    CREATE TABLE Person(
    id SERIAL NOT NULL,
    firstname VARCHAR(32) NOT NULL,
    lastname VARCHAR(32) NOT NULL
    )

    CREATE TABLE LCase(
    id SERIAL NOT NULL,
    title VARCHAR(32) NOT NULL,
    state VARCHAR(32) NOT NULL
    );
EOSQL
