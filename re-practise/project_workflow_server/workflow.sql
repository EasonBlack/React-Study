--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.3
-- Dumped by pg_dump version 9.5.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: AREA; Type: TABLE; Schema: public; Owner: eason
--

CREATE TABLE "AREA" (
    "ID" integer NOT NULL,
    "NAME" text,
    "DISCRIPTION" text
);


ALTER TABLE "AREA" OWNER TO eason;

--
-- Name: AREA_ID_seq; Type: SEQUENCE; Schema: public; Owner: eason
--

CREATE SEQUENCE "AREA_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "AREA_ID_seq" OWNER TO eason;

--
-- Name: AREA_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eason
--

ALTER SEQUENCE "AREA_ID_seq" OWNED BY "AREA"."ID";


--
-- Name: SUBAREA; Type: TABLE; Schema: public; Owner: eason
--

CREATE TABLE "SUBAREA" (
    "ID" integer NOT NULL,
    "NAME" text
);


ALTER TABLE "SUBAREA" OWNER TO eason;

--
-- Name: SUBAREA_ID_seq; Type: SEQUENCE; Schema: public; Owner: eason
--

CREATE SEQUENCE "SUBAREA_ID_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE "SUBAREA_ID_seq" OWNER TO eason;

--
-- Name: SUBAREA_ID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: eason
--

ALTER SEQUENCE "SUBAREA_ID_seq" OWNED BY "SUBAREA"."ID";


--
-- Name: ID; Type: DEFAULT; Schema: public; Owner: eason
--

ALTER TABLE ONLY "AREA" ALTER COLUMN "ID" SET DEFAULT nextval('"AREA_ID_seq"'::regclass);


--
-- Name: ID; Type: DEFAULT; Schema: public; Owner: eason
--

ALTER TABLE ONLY "SUBAREA" ALTER COLUMN "ID" SET DEFAULT nextval('"SUBAREA_ID_seq"'::regclass);


--
-- Name: area_id; Type: CONSTRAINT; Schema: public; Owner: eason
--

ALTER TABLE ONLY "AREA"
    ADD CONSTRAINT area_id PRIMARY KEY ("ID");


--
-- Name: subarea_id; Type: CONSTRAINT; Schema: public; Owner: eason
--

ALTER TABLE ONLY "SUBAREA"
    ADD CONSTRAINT subarea_id PRIMARY KEY ("ID");


--
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

