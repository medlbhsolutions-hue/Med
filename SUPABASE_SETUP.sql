-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users Table
create table if not exists users (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  prenom text,
  email text unique not null,
  password text not null,
  role text default 'clinic',
  clinic_name text,
  specialization text,
  phone text,
  address text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- News Table
create table if not exists news (
  id uuid default uuid_generate_v4() primary key,
  title text,
  content text,
  excerpt text,
  author text,
  category text,
  image text,
  published boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Clinics Table
create table if not exists clinics (
  id uuid default uuid_generate_v4() primary key,
  name text,
  founder text,
  email text,
  phone text,
  address text,
  city text,
  country text,
  specialties text[],
  beds integer,
  staff integer,
  description text,
  logo text,
  user_id uuid references users(id),
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- ChatHistory Table
create table if not exists chat_history (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references users(id),
  user_message text,
  bot_response text,
  context text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);
