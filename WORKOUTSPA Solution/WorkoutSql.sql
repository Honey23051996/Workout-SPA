Create database Workoutspa
use Workoutspa

create table workout_category(
category_id int identity not null,
category_name varchar(64),
constraint pk_category_id primary key(category_id)
)

create table workout_collection(
workout_title varchar(128),
workout_note varchar(256),
calories_burn_per_min int not null,
category_id int identity not null,
workout_id int not null,
constraint pk_collection_id primary key(workout_id),
constraint Fk_workout_collection_workout_category foreign key(category_id) references workout_category(category_id)
)
create table workout_active(
workout_id int  not null,
start_time time ,
startdate date,
enddate date,
comment varchar(64),
statuss bit,
constraint Fk_workout_active_workout_collection foreign key(workout_id) references workout_collection(workout_id)
)
alter table workout_active
add id int
alter table workout_active
drop column id
alter table workout_active
add id int
constraint pk_workout_active_id primary key(id)
