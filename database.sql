-- CREATE DATABASE "docker-workshop";

-- Table structure
CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"description" VARCHAR(50) NOT NULL,
	"complete" BOOLEAN DEFAULT false
);

