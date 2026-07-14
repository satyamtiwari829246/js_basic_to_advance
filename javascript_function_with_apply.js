function student(city,course,branch) {
    console.log(`${this.name} lives in ${city} and studies ${course}is a student of ${branch}`);
}

const user = {
    name: "Satyam"
};

const data = ["Noida", "B.Tech", "CSE"];

student.apply(user, data);