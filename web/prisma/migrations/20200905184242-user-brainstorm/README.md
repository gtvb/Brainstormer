# Migration `20200905184242-user-brainstorm`

This migration has been generated by Gabriel Tiso at 9/5/2020, 3:42:42 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Brainstorm" (
"id" SERIAL,
"createdAt" timestamp(3)   NOT NULL DEFAULT CURRENT_TIMESTAMP,
"title" text   NOT NULL ,
"active" boolean   NOT NULL DEFAULT false,
"authorId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."User" (
"id" SERIAL,
"email" text   NOT NULL ,
"issuer" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "User.email_unique" ON "public"."User"("email")

CREATE UNIQUE INDEX "User.issuer_unique" ON "public"."User"("issuer")

ALTER TABLE "public"."Brainstorm" ADD FOREIGN KEY ("authorId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200905184242-user-brainstorm
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,27 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Brainstorm {
+  id        Int      @default(autoincrement()) @id
+  createdAt DateTime @default(now())
+  title     String
+  active    Boolean  @default(false)
+  author    User     @relation(fields: [authorId], references: [id])
+  authorId  Int
+}
+
+model User {
+  id         Int          @default(autoincrement()) @id
+  email      String       @unique
+  issuer     String       @unique
+  Brainstorm Brainstorm[]
+}
```

