-- dropping tables if they exist --

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS golf_courses CASCADE;
DROP TABLE IF EXISTS holes CASCADE;
DROP TABLE IF EXISTS hole_scores CASCADE;
DROP TABLE IF EXISTS shots CASCADE;
DROP TABLE IF EXISTS weathers CASCADE;
DROP TABLE IF EXISTS games CASCADE;

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "first_name" text,
  "last_name" text,
  "email" text,
  "password_hash" text
);

CREATE TABLE "golf_courses" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "postal_code" text,
  "website_url" text,
  "phone_number" text
);

CREATE TABLE "holes" (
  "id" SERIAL PRIMARY KEY,
  "difficulty" int,
  "number" int,
  "par" int,
  "yard" int,
  "golf_course_id" int
);

CREATE TABLE "hole_scores" (
  "id" SERIAL PRIMARY KEY,
  "score" int,
  "weather_id" int,
  "start_time" int,
  "end_time" int,
  "user_id" int,
  "game_id" int,
  "hole_id" int
);

CREATE TABLE "shots" (
  "id" SERIAL PRIMARY KEY,
  "hole_score_id" int,
  "club" text,
  "comment" text
);

CREATE TABLE "weathers" (
  "id" SERIAL PRIMARY KEY,
  "temperature" int,
  "sunny" boolean,
  "rainy" boolean,
  "foggy" boolean,
  "wind_speed" float
);

CREATE TABLE "games" (
  "id" SERIAL PRIMARY KEY,
  "start_time" int,
  "end_time" int,
  "golf_course_id" int
);

ALTER TABLE "holes" ADD FOREIGN KEY ("golf_course_id") REFERENCES "golf_courses" ("id");

ALTER TABLE "hole_scores" ADD FOREIGN KEY ("weather_id") REFERENCES "weathers" ("id");

ALTER TABLE "hole_scores" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "hole_scores" ADD FOREIGN KEY ("game_id") REFERENCES "games" ("id");

ALTER TABLE "hole_scores" ADD FOREIGN KEY ("hole_id") REFERENCES "holes" ("id");

ALTER TABLE "shots" ADD FOREIGN KEY ("hole_score_id") REFERENCES "hole_scores" ("id");

ALTER TABLE "games" ADD FOREIGN KEY ("golf_course_id") REFERENCES "golf_courses" ("id");