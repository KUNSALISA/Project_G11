BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "airports" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"airport_name"	text,
	"airport_code"	text,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "admins" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"email"	text,
	"password"	text,
	"first_name"	text,
	"last_name"	text,
	"birthday"	datetime,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "airlines" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"airline_name"	text,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "flights" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"flight_date"	datetime,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "type_of_flights" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"type_flight"	text,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "flight_details" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"flight_code"	text,
	"schedule_start"	datetime,
	"schedule_end"	datetime,
	"hour"	integer,
	"cost"	integer,
	"point"	integer,
	"airline_id"	integer,
	"flying_from_id"	integer,
	"going_to_id"	integer,
	"type_id"	integer,
	PRIMARY KEY("id" AUTOINCREMENT),
	CONSTRAINT "fk_airports_flying_from" FOREIGN KEY("flying_from_id") REFERENCES "airports"("id"),
	CONSTRAINT "fk_airlines_airline" FOREIGN KEY("airline_id") REFERENCES "airlines"("id"),
	CONSTRAINT "fk_airports_going_to" FOREIGN KEY("going_to_id") REFERENCES "airports"("id"),
	CONSTRAINT "fk_type_of_flights_type" FOREIGN KEY("type_id") REFERENCES "type_of_flights"("id")
);
CREATE TABLE IF NOT EXISTS "flight_and_flight_details" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"flight_id"	integer,
	"flight_detail_id"	integer,
	"admin_id"	integer,
	PRIMARY KEY("id" AUTOINCREMENT),
	CONSTRAINT "fk_admins_admin" FOREIGN KEY("admin_id") REFERENCES "admins"("id"),
	CONSTRAINT "fk_flights_flight" FOREIGN KEY("flight_id") REFERENCES "flights"("id"),
	CONSTRAINT "fk_flight_details_flight_detail" FOREIGN KEY("flight_detail_id") REFERENCES "flight_details"("id")
);
CREATE INDEX IF NOT EXISTS "idx_airports_deleted_at" ON "airports" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_admins_deleted_at" ON "admins" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_airlines_deleted_at" ON "airlines" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_flights_deleted_at" ON "flights" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_type_of_flights_deleted_at" ON "type_of_flights" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_flight_details_deleted_at" ON "flight_details" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_flight_and_flight_details_deleted_at" ON "flight_and_flight_details" (
	"deleted_at"
);
COMMIT;
