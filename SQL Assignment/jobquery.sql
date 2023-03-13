use jobdb;
show tables;
truncate city;
insert into select_master(select_name,select_key) values('state','state');
insert into select_master(select_name,select_key) values('city','city');
insert into select_master(select_name,select_key) values('relationship','relationship');
insert into select_master(select_name,select_key) values('course','course');
insert into select_master(select_name,select_key) values('technology','technology');
insert into select_master(select_name,select_key) values('department','department');
insert into select_master(select_name,select_key) values('pref_location','pref_location');
insert into select_master(select_name,select_key) values('language','language');
insert into select_master(select_name,select_key) values('gender','gender');
insert into select_master(select_name,select_key) values('result','result');
select *from state;
select *from city;
select *from select_master;

select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="state";
select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="city";
select select_name,option_name from select_master,option_master where select_master.select_id = s_id and select_name="relationship";

insert into option_master(select_id,option_name) values(1, 'gujarat');
insert into option_master(select_id,option_name) values(1, 'uttarpradesh');
insert into option_master(select_id,option_name) values(1, 'rajasthan');
insert into option_master(select_id,option_name) values(1, 'tamilnadu');
insert into option_master(select_id,option_name) values(1, 'punjab');

select *from education_detail;
select *from option_master;
select option_name from jobdb.option_master where s_id=3;
insert into option_master(s_id,option_name) values(3, 'single');
insert into option_master(s_id,option_name) values(3, 'married');
insert into option_master(s_id,option_name) values(3, 'divorce');

insert into option_master(s_id,option_name) values(4, 'ssc');
insert into option_master(s_id,option_name) values(4, 'hsc');
insert into option_master(s_id,option_name) values(4, 'bachelor');
insert into option_master(s_id,option_name) values(4, 'master');

insert into option_master(s_id,option_name) values(5, 'php');
insert into option_master(s_id,option_name) values(5, 'nodejs');
insert into option_master(s_id,option_name) values(5, 'java');
insert into option_master(s_id,option_name) values(5, 'python');

insert into option_master(s_id,option_name) values(6, 'development');
insert into option_master(s_id,option_name) values(6, 'designing');
insert into option_master(s_id,option_name) values(6, 'marketing');

insert into option_master(s_id,option_name) values(7, 'ahmedabad');
insert into option_master(s_id,option_name) values(7, 'bhavnagar');
insert into option_master(s_id,option_name) values(7, 'rajkot');

insert into option_master(s_id,option_name) values(8, 'hindi');
insert into option_master(s_id,option_name) values(8, 'english');

select *from basic_detail;
select *from education_detail;
select *from preferences;
select *from reference;
select *from work_experience;
select *from languages;
select *from technologies;
select *from state;
select *from city;
update education_detail set course_name="hello",university="nice",percentage="90" , passing_year="9023" where edu_id="1"; 


update work_experience set company_name="hi ",designation="hey",from_date="" , end_date="" where id_experience="1";

update basic_detail set fname="${f_name} ",lname="${l_name}",designation="${designation1}", contact="${contact1}", address=" ${add1}", address2="${add2}",city= "${city1}", state="${state1}", email="${mail}",gender="${gen}",dob="${dob1}" , zipcode="${zipcode}", relationship_status="${relation}" where candidate_id="${cid}" 
-- update basic_detail
-- set gender = "Male"
-- where candidate_id = 3; 

-- SET FOREIGN_KEY_CHECKS = 0; 
-- TRUNCATE table basic_detail; 
-- SET FOREIGN_KEY_CHECKS = 1;

DELETE FROM select_master WHERE select_id=10;

insert into state(state_name) values('punjab'),('gujarat'),('Tamilnadu'),('Uttarpradesh'),('assam'),('rajasthan');

insert into city(state_id,city_name) values(2, 'ahmedabad'),(2, 'surat'),(2, 'rajkot'),(2, 'bhavnagar'),
(2, 'baroda'),(2, 'anand');

insert into city(state_id,city_name) values(1, 'amritsar'),(1, 'patiala'),(1, 'ludhiana');

insert into city(state_id,city_name) values(3, 'chennai'),(3, 'madurai');
insert into city(state_id,city_name) values(4, 'kanpur'),(4, 'lucknow'),(4, 'agra');
insert into city(state_id,city_name) values(5, 'guwahati'),(5, 'silchar');
insert into city(state_id,city_name) values(6, 'jodhpur'),(6, 'udaipur'),(6, 'kota');

update preferences set expected_ctc="5000 ",current_ctc="345954",notice_period="`1" , preferred_location="ahmedabad", department="marketing" where candidate_id="9"