create table "public"."favoritos" (
    "id" uuid not null default gen_random_uuid(),
    "prato_id" uuid
);


create table "public"."order" (
    "name" text not null,
    "texte" text not null
);


alter table "public"."pratos" alter column "price" set data type text using "price"::text;

CREATE UNIQUE INDEX favoritos_pkey ON public.favoritos USING btree (id);

alter table "public"."favoritos" add constraint "favoritos_pkey" PRIMARY KEY using index "favoritos_pkey";

alter table "public"."favoritos" add constraint "favoritos_prato_id_fkey" FOREIGN KEY (prato_id) REFERENCES pratos(id) ON DELETE CASCADE not valid;

alter table "public"."favoritos" validate constraint "favoritos_prato_id_fkey";

grant delete on table "public"."favoritos" to "anon";

grant insert on table "public"."favoritos" to "anon";

grant references on table "public"."favoritos" to "anon";

grant select on table "public"."favoritos" to "anon";

grant trigger on table "public"."favoritos" to "anon";

grant truncate on table "public"."favoritos" to "anon";

grant update on table "public"."favoritos" to "anon";

grant delete on table "public"."favoritos" to "authenticated";

grant insert on table "public"."favoritos" to "authenticated";

grant references on table "public"."favoritos" to "authenticated";

grant select on table "public"."favoritos" to "authenticated";

grant trigger on table "public"."favoritos" to "authenticated";

grant truncate on table "public"."favoritos" to "authenticated";

grant update on table "public"."favoritos" to "authenticated";

grant delete on table "public"."favoritos" to "service_role";

grant insert on table "public"."favoritos" to "service_role";

grant references on table "public"."favoritos" to "service_role";

grant select on table "public"."favoritos" to "service_role";

grant trigger on table "public"."favoritos" to "service_role";

grant truncate on table "public"."favoritos" to "service_role";

grant update on table "public"."favoritos" to "service_role";

grant delete on table "public"."order" to "anon";

grant insert on table "public"."order" to "anon";

grant references on table "public"."order" to "anon";

grant select on table "public"."order" to "anon";

grant trigger on table "public"."order" to "anon";

grant truncate on table "public"."order" to "anon";

grant update on table "public"."order" to "anon";

grant delete on table "public"."order" to "authenticated";

grant insert on table "public"."order" to "authenticated";

grant references on table "public"."order" to "authenticated";

grant select on table "public"."order" to "authenticated";

grant trigger on table "public"."order" to "authenticated";

grant truncate on table "public"."order" to "authenticated";

grant update on table "public"."order" to "authenticated";

grant delete on table "public"."order" to "service_role";

grant insert on table "public"."order" to "service_role";

grant references on table "public"."order" to "service_role";

grant select on table "public"."order" to "service_role";

grant trigger on table "public"."order" to "service_role";

grant truncate on table "public"."order" to "service_role";

grant update on table "public"."order" to "service_role";


