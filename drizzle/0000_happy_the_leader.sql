CREATE TABLE `enquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`organization` text NOT NULL,
	`category` text NOT NULL,
	`message` text NOT NULL,
	`created_at` integer NOT NULL,
	`identity_hash` text NOT NULL
);
--> statement-breakpoint
CREATE INDEX `enquiries_identity_time` ON `enquiries` (`identity_hash`,`created_at`);--> statement-breakpoint
CREATE TABLE `investor_grants` (
	`user_id` text PRIMARY KEY NOT NULL,
	`expires_at` integer NOT NULL
);
