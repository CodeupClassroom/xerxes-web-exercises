"use strict";

(() => {
    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    const knowsAtLeastThreeLanguages = users.filter((user) => user.languages.length >= 3);
    console.log(knowsAtLeastThreeLanguages);

    const emails = users.map(user => user.email);
    console.log(emails);

    const totalYearsOfExp = users.reduce((total, user) => total + user.yearsOfExperience, 0);
    const average = users.reduce((total, user) => total + user.yearsOfExperience, 0) / users.length;
    console.log(totalYearsOfExp);
    console.log(average);

    const longestEmail = users.reduce((longEmail, user) => {
        if (user.email.length > longEmail.length) {
            return user.email; // longEmail = user.email
        }
        return longEmail;
    }, "");

    console.log(longestEmail);

    const instructorRollCall = users.reduce((finalStr, user, index) => {
        if (index === users.length - 1) {
            return finalStr + `and ${user.name}.`;
        } else {
            return finalStr + `${user.name}, `;
        }
    }, "Your instructors are: ");

    console.log(instructorRollCall);
})();