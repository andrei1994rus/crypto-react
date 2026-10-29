create table public.kv_store (
  id uuid not null default gen_random_uuid (),
  data jsonb not null,
  key text not null,
  created_at timestamp with time zone not null default now(),
  constraint kv_store_pkey primary key (id)
) TABLESPACE pg_default;