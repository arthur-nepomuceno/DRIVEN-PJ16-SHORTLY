--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: shortUrls; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."shortUrls" (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "shortUrl" character varying(9) NOT NULL,
    url character varying,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public."shortUrls" OWNER TO postgres;

--
-- Name: shortUrls_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."shortUrls_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."shortUrls_id_seq" OWNER TO postgres;

--
-- Name: shortUrls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."shortUrls_id_seq" OWNED BY public."shortUrls".id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email character varying(30) NOT NULL,
    password character varying NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: shortUrls id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."shortUrls" ALTER COLUMN id SET DEFAULT nextval('public."shortUrls_id_seq"'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: shortUrls; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."shortUrls" (id, "userId", "shortUrl", url, "visitCount", "createdAt") FROM stdin;
9	5	Zsq1p8xHR	https://google.com.br/	0	2022-08-07 14:50:41.99613
10	5	m4d2luA8W	https://google.com.br/	0	2022-08-07 14:50:42.674156
11	5	RlGoQSpUk	https://google.com.br/	0	2022-08-07 14:50:43.35841
12	5	eqwNRb6Ye	https://google.com.br/	0	2022-08-07 14:50:43.969522
13	5	QNfXbI7AV	https://google.com.br/	0	2022-08-07 14:50:44.537516
14	1	Gqgi6fLa_	https://http.cat/	0	2022-08-07 22:40:34.075947
15	1	Fo2HKjxQx	https://http.cat/	0	2022-08-07 22:44:06.221867
16	1	lH1hGN7j9	https://http.cat/	0	2022-08-07 22:44:21.865395
3	1	bqgIpLDwq	https://http.cat/	3	2022-08-07 00:19:20.234438
8	5	VKFbUGqrr	https://google.com.br/	3	2022-08-07 14:50:05.281574
5	1	_fj6poF5M	https://www.youtube.com/	5	2022-08-07 00:19:51.556563
7	5	YnCQMeplc	https://http.cat/	10	2022-08-07 14:49:42.956514
22	1	3QCGNUJPb	https://www.youtube.com/	0	2022-08-08 11:54:44.541594
23	1	gYqdkFOGj	https://www.youtube.com/	0	2022-08-08 11:54:45.445051
24	1	T1H0w7adb	https://www.youtube.com/	0	2022-08-08 11:54:46.313109
25	1	vfcOr3YFy	https://www.youtube.com/	0	2022-08-08 11:54:47.116191
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
1	Arthur	arthur@email.com	$2b$11$aSvwpsaZUBcLrQlQfyF1zOSs7aQyXnJEZGui9MF8/CtlQm.fAJdeq	2022-08-03 16:58:22.899839
2	João	joao@email.com	$2b$11$WIzCeYj6n2YkAui9cUpDdOS0Fqs5q8z9gQo0WiunGZ81oRsgQPtq2	2022-08-07 00:12:53.590325
3	Eduardo	eduardo@email.com	$2b$11$bRYr0KkAblpH7RV4mcwRFO0L8mmud8hYsYypHbvHc.xHXYbHna38S	2022-08-07 14:09:15.889814
4	Joana	joana@email.com	$2b$11$eb0BqpKDtA6CP0dXe.QdtusilNSUcdyvQNv4KE5S.nAfaWlGHsbU6	2022-08-07 14:09:27.085338
5	Maria	maria@email.com	$2b$11$O.ZWEtnlFlKTmiO7DVh2feFV.GNUOG0VIxzJqbxvi/2U36o2qqoHC	2022-08-07 14:09:42.529274
6	Carlos	carlos@email.com	$2b$11$It0nU6LAPwWm6LeTT1hXaOyy28yklIYn2EDgcGpJE0fdMr3BZdWZO	2022-08-07 18:21:02.412548
7	Bruna	bruna@email.com	$2b$11$ZDESZXididu4vMyjIxjEhufa2aN.ni2hsP.OsqNBQDbbFlAG0ZoKi	2022-08-07 18:38:44.462048
\.


--
-- Name: shortUrls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."shortUrls_id_seq"', 25, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: shortUrls shortUrls_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."shortUrls"
    ADD CONSTRAINT "shortUrls_pkey" PRIMARY KEY (id);


--
-- Name: shortUrls shortUrls_shortUrl_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."shortUrls"
    ADD CONSTRAINT "shortUrls_shortUrl_key" UNIQUE ("shortUrl");


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: shortUrls shortUrls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."shortUrls"
    ADD CONSTRAINT "shortUrls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

