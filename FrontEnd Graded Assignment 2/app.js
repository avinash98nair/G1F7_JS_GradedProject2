const jsonData = `{
	"resume" : 
	[ 
		{
			"id":1,
			"basics": 
			{
				"name": "John Doe",
				"AppliedFor": "Software Engineer",
				"image": "",
				"email": "john@gmail.com",
				"phone": "9999999999",
				"location": 
				{
					"address": "2712 Broadway St",
					"postalCode": "560063",
					"city": "Bangalore",
					"state": "Karnataka"
				},
				"profiles":
				{
					"network": "LinkedIn",
					"url": "https://linkedin.com/john"
				}
			},
			
			"skills": 
			{
				"name": "Web Development",
				"level": "Master",
				"keywords": 
				[
					"HTML",
					"CSS",
					"JavaScript",
					"Python"
				]
			},
			
			"work": 
			{
				"Company Name": "Harman",
				"Position": "Associate Engineer",
				"Start Date": "2013-01-01",
				"End Date": "2014-01-01",
				"Summary": "Associate engineer with development, testing verification and validation experience on Car UI display systems.Performed phone projection development of user stories and testing with infotainment system such as Android auto ,Car playAnalyzed requirements , created test plans, executed test cases for connectivity epic such as C-connect, F-connect.Good at analyzing DLT logs and analyzing the code refactor areas."
			},
				
			"Internship":
			{
				"Company Name": "Ibm",
				"Position": "intern",
				"Start Date": "2013-01-01",
				"End Date": "2014-01-01",
				"Summary": " Learned about Tools used for website testing such as Deep Trawl, NVDA, web developer extension, OpenVAS,Learned about the importance and concept of OWASP.Learned React JS and worked for Frontend development with professional."
		
			},
				
			"projects":
			{
				"name": "Diabetic Retinopaty",
				"description": " created a GUI using QT designer which will take image of retina as input, input image will be processed and compare with the images present in database and then classified as one of DR stage or normal.OpenCV and image processing concepts are used. survey paper on this project is publish in 2nd international conference on Topical Transcend in Science, Technology & Management."
			},
			
			"education": 
			{
				"UG": 
				{
					"institute": "Sai Vidya Institute of Technology",
					"course": "B.E Computer Science and Engineering",
					"Start Date": "2011-01-01",
					"End Date": "2013-01-01",
					"cgpa":"8.7"
				},	
				"Senior Secondary" : 
				{
					"institute": "KV AFS YELAHANKA",
					"cgpa":"8.7"
				},
				"High School" : 
				{
					"institute": "KV AFS Bhuj",
					"cgpa":"8.7"
				}	
			},
			"achievements": 
			{
				"Summary" : ["Attended 5 days industry orientation workshop organized by free software movement"]
			},
			"interests": 
			{
				"hobbies": ["Wildlife","Dance","Workout"]
			}
		},
		{
			"id":2,
			"basics": 
			{
				"name": "Riya",
				"AppliedFor": "Software Engineer",
				"image": "",
				"email": "riya@gmail.com",
				"phone": "9999999999",
				"location": 
				{
					"address": "12 maruthi nilaya ",
					"postalCode": "560063",
					"city": "Bangalore",
					"state": "Karnataka"
				},
				"profiles":
				{
					"network": "LinkedIn",
					"url": "https://linkedin.com/riya"
				}
			},
			
			"skills": 
			{
				"name": "AIML",
				"level": "intermediate",
				"keywords": 
				[
					"python",
					"ML",
					"AI",
					"Image Processing"
				]
			},
			
			"work": 
			{
				"Company Name": "IBM",
				"Position": "Software Engineer",
				"Start Date": "2020-01-01",
				"End Date": "2022-01-01",
				"Summary": "Associate engineer with development, testing verification and validation experience on Car UI display systems.Performed phone projection development of user stories and testing with infotainment system such as Android auto ,Car playAnalyzed requirements , created test plans, executed test cases for connectivity epic such as C-connect, F-connect.Good at analyzing DLT logs and analyzing the code refactor areas."
			},
				
			"Internship":
			{
				"Company Name": "Ibm",
				"Position": "intern",
				"Start Date": "2019-01-01",
				"End Date": "2020-01-01",
				"Summary": " Learned about Tools used for website testing such as Deep Trawl, NVDA, web developer extension, OpenVAS,Learned about the importance and concept of OWASP.Learned React JS and worked for Frontend development with professional."
		
			},
				
			"projects":
			{
				"name": "Diabetic Retinopaty",
				"description": " created a GUI using QT designer which will take image of retina as input, input image will be processed and compare with the images present in database and then classified as one of DR stage or normal.OpenCV and image processing concepts are used. survey paper on this project is publish in 2nd international conference on Topical Transcend in Science, Technology & Management."
			},
			
			"education": 
			{
				"UG": 
				{
					"institute": "Nagarujana Institute of Technology",
					"course": "B.E Computer Science and Engineering",
					"Start Date": "2010-01-01",
					"End Date": "2015-01-01",
					"cgpa":"9.7"
				},	
				"Senior Secondary" : 
				{
					"institute": "Reva Institute",
					"cgpa":"8.7"
				},
				
				"High School" : 
				{
					"institute": "Ryan public school",
					"cgpa":"10.0"
				}	
			},
			"achievements": 
			{
				"dums" : "",
				"Summary" : [
					"Attended 5 days industry orientation workshop organized by free software movement",
					"Participated in google hackathon"
				]
			},
			"interests": 
			{
				"hobbies": ["Wildlife","Dance","Workout","Reading books"]
			}
		},
		{
			"id":3,
			"basics": 
			{
				"name": "Rahul Roy",
				"AppliedFor": "Manager",
				"image": "",
				"email": "roy@gmail.com",
				"phone": "9999999999",
				"location": 
				{
					"address": " 305 A-Richard apartments ",
					"postalCode": "560054",
					"city": "Ahemdabad",
					"state": "Gujarat"
				},
				"profiles":
				{
					"network": "LinkedIn",
					"url": "https://linkedin.com/rahulroy"
				}
			},
			
			"skills": 
			{
				"name": "FullStack",
				"level": "Master",
				"keywords": 
				[
					"HTML",
					"CSS",
					"JavaScript",
					"React",
					"Java"
				]
			},
			
			"work": 
			{
				"Company Name": "Great Learning",
				"Position": "Manager",
				"Start Date": "2015-01-01",
				"End Date": "2020-01-01",
				"Summary": "Associate engineer with development, testing verification and validation experience on Car UI display systems.Performed phone projection development of user stories and testing with infotainment system such as Android auto ,Car playAnalyzed requirements , created test plans, executed test cases for connectivity epic such as C-connect, F-connect.Good at analyzing DLT logs and analyzing the code refactor areas."
			},
				
			"Internship":
			{
				"Company Name": "TCS",
				"Position": "intern",
				"Start Date": "2013-01-01",
				"End Date": "2014-01-01",
				"Summary": " Learned about Tools used for website testing such as Deep Trawl, NVDA, web developer extension, OpenVAS,Learned about the importance and concept of OWASP.Learned React JS and worked for Frontend development with professional."
		
			},
				
			"projects":
			{
				"name": "E-Commerce Website",
				"description": " I have created a ecommerce website using html,css,and react with javascripts, Porject has functionality where user can select any item of their choice and store it into a cart or they add item into their whishlist, seraching functionality allow user to search any product by name ."
			},
			
			"education": 
			{
				"UG": 
				{
					"institute": "BMS Institute of Technology",
					"course": "B.E Information Science and Engineering",
					"Start Date": "2008-01-01",
					"End Date": "2011-01-01",
					"cgpa":"8.7"
				},	
				"Senior Secondary" : 
				{
					"institute": "Delhi Public School",
					"cgpa":"9.0"
				},
				
				"High School" : 
				{
					"institute": "Delhi Public School",
					"cgpa":"9.6"
				}	
			},
			"achievements": 
			{
				"Summary" : ["Attended a workshop on fullstack development", "participated in state level baskteball"]
			},
			"interests": 
			{
				"hobbies": ["Wildlife","Travelling","Workout"]
			}
		},
		{
			"id":4,
			"basics": 
			{
				"name": "Priya Desai",
				"AppliedFor": "HR",
				"image": "",
				"email": "Priya@gmail.com",
				"phone": "9999999999",
				"location": 
				{
					"address": " 201 A-Niteshapartments ",
					"postalCode": "560054",
					"city": "Bikaner",
					"state": "Rajasthan"
				},
				"profiles":
				{
					"network": "LinkedIn",
					"url": "https://linkedin.com/PriyaDesai"
				}
			},
			
			"skills": 
			{
				"name": "HR Management",
				"level": "Master",
				"keywords": 
				[
					"Excel",
					"Data Management",
					"Communication skill"

				]
			},
			
			"work": 
			{
				"Company Name": "Cerner private lmtd.",
				"Position": "HR",
				"Start Date": "2015-01-01",
				"End Date": "2020-01-01",
				"Summary": "Involve in various communication activites with client, Handling data for all employees"
			},
				
			"Internship":
			{
				"Company Name": "TCS",
				"Position": "intern",
				"Start Date": "2013-01-01",
				"End Date": "2014-01-01",
				"Summary": "Source potential candidates from various online channels,Craft recruiting emails to attract passive candidates,Screen incoming resumes and application forms "
			},
				
			"projects":
			{
				"name": "Efficiency Design of Solar Panels",
				"description": "This project aims to design the solar panel cells with higer energy consumption in all types of weathers and also helps in absorbing higher energy."
			},
			
			"education": 
			{
				"UG": 
				{
					"institute": "BMS Institute of Technology",
					"course": "MCA",
					"Start Date": "2008-01-01",
					"End Date": "2011-01-01",
					"cgpa":"8.7"
				},	
				"Senior Secondary" : 
				{
					"institute": "Delhi Public School",
					"cgpa":"9.0"
				},
				
				"High School" : 
				{
					"institute": "Delhi Public School",
					"cgpa":"9.6"
				}	
			},
			"achievements": 
			{
				"Summary" : ["Been complimented by your supervisor or co-workers","Increased revenue or sales for the company"]
			},
			"interests": 
			{
				"hobbies": ["Art&Craft","Travelling","Workout"]
			}
		},
		{
			"id":5,
			"basics": 
			{
				"name": "Rakesh Ranjan",
				"AppliedFor": "Manager",
				"image": "",
				"email": "Priya@gmail.com",
				"phone": "9999999999",
				"location": 
				{
					"address": " 201 A-Niteshapartments ",
					"postalCode": "560054",
					"city": "Bikaner",
					"state": "Rajasthan"
				},
				"profiles":
				{
					"network": "LinkedIn",
					"url": "https://linkedin.com/PriyaDesai"
				}
			},
			
			"skills": 
			{
				"name": "HR Management",
				"level": "Master",
				"keywords": 
				[
					"Excel",
					"Data Management",
					"Communication skill"

				]
			},
			
			"work": 
			{
				"Company Name": "Cerner private lmtd.",
				"Position": "HR",
				"Start Date": "2015-01-01",
				"End Date": "2020-01-01",
				"Summary": "Involve in various communication activites with client, Handling data for all employees"
			},
				
			"Internship":
			{
				"Company Name": "TCS",
				"Position": "intern",
				"Start Date": "2013-01-01",
				"End Date": "2014-01-01",
				"Summary": "Source potential candidates from various online channels,Craft recruiting emails to attract passive candidates,Screen incoming resumes and application forms "
			},
				
			"projects":
			{
				"name": "Efficiency Design of Solar Panels",
				"description": "This project aims to design the solar panel cells with higer energy consumption in all types of weathers and also helps in absorbing higher energy."
			},
			
			"education": 
			{
				"UG": 
				{
					"institute": "BMS Institute of Technology",
					"course": "MCA",
					"Start Date": "2008-01-01",
					"End Date": "2011-01-01",
					"cgpa":"8.7"
				},	
				"Senior Secondary" : 
				{
					"institute": "Delhi Public School",
					"cgpa":"9.0"
				},
				
				"High School" : 
				{
					"institute": "Delhi Public School",
					"cgpa":"9.6"
				}	
			},
			"achievements": 
			{
				"Summary" : ["Best employee of the year 2021","Increased revenue or sales for the company in 2019"]
			},
			"interests": 
			{
				"hobbies": ["Art&Craft","Travelling","Workout"]
			}
		},
		{
			"id":6,
			"basics": 
			{
				"name": "Godse",
				"AppliedFor": "Manager",
				"image": "",
				"email": "Priya@gmail.com",
				"phone": "9999999999",
				"location": 
				{
					"address": " 201 A-Niteshapartments ",
					"postalCode": "560054",
					"city": "Bikaner",
					"state": "Rajasthan"
				},
				"profiles":
				{
					"network": "LinkedIn",
					"url": "https://linkedin.com/PriyaDesai"
				}
			},
			
			"skills": 
			{
				"name": "HR Management",
				"level": "Master",
				"keywords": 
				[
					"Excel",
					"Data Management",
					"Communication skill"

				]
			},
			
			"work": 
			{
				"Company Name": "Cerner private lmtd.",
				"Position": "HR",
				"Start Date": "2015-01-01",
				"End Date": "2020-01-01",
				"Summary": "Involve in various communication activites with client, Handling data for all employees"
			},
				
			"Internship":
			{
				"Company Name": "TCS",
				"Position": "intern",
				"Start Date": "2013-01-01",
				"End Date": "2014-01-01",
				"Summary": "Source potential candidates from various online channels,Craft recruiting emails to attract passive candidates,Screen incoming resumes and application forms "
			},
				
			"projects":
			{
				"name": "Efficiency Design of Solar Panels",
				"description": "This project aims to design the solar panel cells with higer energy consumption in all types of weathers and also helps in absorbing higher energy."
			},
			
			"education": 
			{
				"UG": 
				{
					"institute": "BMS Institute of Technology",
					"course": "MCA",
					"Start Date": "2008-01-01",
					"End Date": "2011-01-01",
					"cgpa":"8.7"
				},	
				"Senior Secondary" : 
				{
					"institute": "Delhi Public School",
					"cgpa":"9.0"
				},
				
				"High School" : 
				{
					"institute": "Delhi Public School",
					"cgpa":"9.6"
				}	
			},
			"achievements": 
			{
				"Summary" : [
					"Been complimented by your supervisor or co-workers",
					"Increased revenue or sales for the company"
				]
			},
			"interests": 
			{
				"hobbies": ["Art&Craft","Travelling","Workout"]
			}
		}
	]		 
}`;
const data = JSON.parse(jsonData);
const {resume:resumeSet} = data;
const finalResumeSet = resumeSet.map(resume => {
    
    const {id, basics:{name, AppliedFor:appliedFor, email, phone, profiles:{url}}, skills:{keywords:technicalSkills}, 
    work:{"Company Name":workCompanyName, Position: workPosition, "Start Date": workStartDate, "End Date": workEndDate, 
    Summary:workSummary}, Internship:{"Company Name":internshipCompanyName, Position:internshipPosition, "Start Date": internshipStartDate,
    "End Date":internshipEndDate, Summary:internshipSummary}, projects:{name:projectName, description:projectDescription}, 
    education:{UG:{institute:UGinstitute, course: UGcourse, "Start Date":UGstartDate, "End Date":UGendDate, cgpa:UGcgpa}, 
    "Senior Secondary":{institute:SSinstitute, cgpa:SScgpa},"High School":{institute:HSinstitute, cgpa:HScgpa}}, 
    achievements:{Summary:achievements}, interests:{hobbies}} = resume;

    return {id, name, appliedFor, email, phone, url, technicalSkills, workCompanyName, workPosition, workStartDate, workEndDate, 
        workSummary, internshipCompanyName, internshipPosition, internshipStartDate, internshipEndDate, internshipSummary, projectName, 
        projectDescription, UGinstitute, UGcourse, UGstartDate, UGendDate, UGcgpa, SSinstitute, SScgpa, HSinstitute, HScgpa, achievements, 
        hobbies};

});


let currentIndex;
let filteredResumeSet;
const previous = document.querySelector('.previous');
const next = document.querySelector('.next');

const resume = document.querySelector('.resume-container');
function loadResume(currentIndex){
    
    const currentResume = filteredResumeSet[currentIndex];

    resume.innerHTML = `
        <div class="name-container">
            <div class="name">${currentResume.name}</div>
            <div class="applied for">Applied For: ${currentResume.appliedFor}</div>
        </div>
        <div class="details">
            <div class="left-side">
                <div class="quick-info">
                    <div class="quick-info-item">
                        <div class="head">Personal Information</div>
                        <p>${currentResume.phone}</p>
                        <p>${currentResume.email}</p>
                        <p class="url">${currentResume.url}</p>
                    </div>
                    <div class="quick-info-item">
                        <div class="head">Technical Skills</div>
                        <ul class="technical-skills"></ul>
                    </div>
                    <div class="quick-info-item">
                        <div class="head">Hobbies</div>
                        <ul class="hobbies"></ul>
                    </div>
                </div>
            </div>
            <div class="right-side">
                <div class="work-experience">
                    <h2>Work Experience in previous company</h2>
                    <ul>
                        <li><b>Company Name: </b>${currentResume.workCompanyName}</li>
                        <li><b>Position: </b>${currentResume.workPosition}</li>
                        <li><b>Start Date: </b>${currentResume.workStartDate}</li>
                        <li><b>End Date: </b>${currentResume.workEndDate}</li>
                        <li><b>Summary: </b>${currentResume.workSummary}</li>
                    </ul>
                </div>
                <div class="project">
                    <h2>Projects</h2>
                    <ul>
                        <li><b>${currentResume.projectName}: </b>${currentResume.projectDescription}</li>
                    </ul>
                </div>
                <div class="education">
                    <h2>Education</h2>
                    <ul>
                        <li><b>UG: </b>${currentResume.UGinstitute} ${currentResume.UGcourse} ${currentResume.UGstartDate} ${currentResume.UGendDate} ${currentResume.UGcgpa}</li>
                        <li><b>PU: </b>${currentResume.SSinstitute} ${currentResume.SScgpa}</li>
                        <li><b>High School: </b>${currentResume.HSinstitute} ${currentResume.HScgpa}</li>
                    </ul>
                </div>
                <div class="internship">
                    <h2>Internship</h2>
                    <ul>
                        <li><b>Company Name: </b>${currentResume.internshipCompanyName}</li>
                        <li><b>Position: </b>${currentResume.internshipPosition}</li>
                        <li><b>Start Date: </b>${currentResume.internshipStartDate}</li>
                        <li><b>End Date: </b>${currentResume.internshipEndDate}</li>
                        <li><b>Summary: </b>${currentResume.internshipSummary}</li>
                    </ul>
                </div>
                <div class="achievements">
                    <h2>Achievements</h2>
                    <ul class="achievements-list"></ul>
                </div>
            </div>
        </div>
    `

    const technicalSkillUL = document.querySelector('.technical-skills');
    const technicalSkillsList = currentResume.technicalSkills.map(item => {
        return `<li>${item}</li>`
    }).join('');
    technicalSkillUL.innerHTML = technicalSkillsList;


    const hobbiesUL = document.querySelector('.hobbies');
    const hobbiesList = currentResume.hobbies.map(item => {
        return `<li>${item}</li>`
    }).join('');
    hobbiesUL.innerHTML = hobbiesList;

    const achievementsUL = document.querySelector('.achievements-list');
    const achievementsList = currentResume.achievements.map(item => {
        return `<li>${item}</li>`
    }).join('');
    achievementsUL.innerHTML = achievementsList;

    if(currentIndex === 0){
        previous.classList.add('invisible');
    }
    if(currentIndex > 0){
        previous.classList.remove('invisible');
    }
    if(currentIndex === filteredResumeSet.length-1){
        next.classList.add('invisible');
    }
    if(currentIndex < filteredResumeSet.length-1){
        next.classList.remove('invisible');
    }
}
    

window.addEventListener('DOMContentLoaded', pageLoadFunction);

function pageLoadFunction(){
    filteredResumeSet = filterStuff();
    currentIndex = 0;
    loadResumeList()
}


function loadResumeList(){
    if(filteredResumeSet.length === 0){
        resume.classList.add('empty-list');
        resume.innerHTML = `
        <div class="error"><img src="sad-face.png"><div class="error-message">No Such Results Found</div></div>
        `
        previous.classList.add('invisible');
        next.classList.add('invisible');
    }
    else if(filteredResumeSet.length === 1){
        resume.classList.remove('empty-list');
        previous.classList.add('invisible');
        next.classList.add('invisible');
        loadResume(currentIndex);
    }
    else{
        resume.classList.remove('empty-list');
        loadResume(currentIndex);
    }
}


const input = document.querySelector('.input');
input.addEventListener('keydown', e => {
    let filterValue;
    if(e.keyCode === 13){
        filterValue = input.value;
        input.value = '';
    }
    filteredResumeSet = filterStuff(filterValue);
    currentIndex = 0;
    loadResumeList();
})


function filterStuff(filterValue = 'all'){
    if(filterValue === 'all'){
        return finalResumeSet.filter(item => {
            return true;
        })
    }
    else{
        return finalResumeSet.filter(item => {
            if(filterValue.toLowerCase().trim() === item.appliedFor.toLowerCase().trim()){
                return true;
            }
            else{
                return false;
            }
        })
    }
}

previous.addEventListener('click', () => {
    if(currentIndex === 0) {
        return;
    }
    currentIndex --;
    loadResume(currentIndex);
})

next.addEventListener('click', () => {
    if(currentIndex === filteredResumeSet.length-1){
        currentIndex === filteredResumeSet.length-1;
        return;
    }
    currentIndex ++;
    loadResume(currentIndex);
})