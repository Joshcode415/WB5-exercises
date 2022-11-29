//Declare the variables of a array of objects
let courses = [ 
        {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
        },
        {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
        },
        {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
        },
        {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
        },
        {
        
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
             }
            
    ];


//Algortme
let courseFound = courses.find(function(course) {
	if(course.CourseId == 'PROG200')
		return true;
});

//output
console.log(courseFound.StartDate); // 




//Write it even shorter
let courseFound2 = courses.find((course) => course.CourseId == 'PROG400')

console.log(courseFound2.StartDate); 

//  What is the title of the PROJ500 course?

let courseFound1 = courses.find(function(course) {
	if(course.CourseId == 'PROJ500')
		return true;
});

//output
console.log(courseFound1.Title); // 




//Write it even shorter
let courseFound3 = courses.find((course) => course.CourseId == 'PROJ500')

console.log(courseFound3.Title);

// What are the titles of the courses that cost $50 or less?
let courseFound10 = courses.find(function(course) {
	if(course.CourseFee <='50.00')
		return true;
        else {
            return false;
            }
});

//output
console.log(courseFound1.Fee); // 


/* function isOver60(arrayValue) {
    if (arrayValue > 60) {
    return true;
    }
    else {
    return false;
    }
   }
   let numbers = [7, 9, 64, 60, 12, 13, 67, 66];
   let allOver60 = numbers.filter(isOver60);
    // returns an array containing [64, 67, 66]
   if (allOver60.length > 0) {
    console.log(allOver60); // displays the array
   }
   else {
    console.log("No values over 60");
   } */