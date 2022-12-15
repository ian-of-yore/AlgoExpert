// ---------------------------------------------
// The following is the Brute Force Solution
// ---------------------------------------------

// const competitions = [
//     ["HTML", "C#"],
//     ["C#", "Python"],
//     ["Python", "HTML"]
// ];

// const results = [0, 0, 1];

// function tournamentWinner(competitions, results) {
//     const map = {};

//     for (let i = 0; i < competitions.length; i++) {
//         if (results[i] === 0) {
//             map[competitions[i][1]] = map[competitions[i][1]] + 1 || 1;
//         }
//         else {
//             map[competitions[i][0]] = map[competitions[i][0]] + 1 || 1;
//         }
//     }

//     console.log(map);
//     const sorted = Object.keys(map).sort((a, b) => map[b] - map[a]);
//     return sorted[0]

// }

// console.log(tournamentWinner(competitions, results));


// ----------------------------------------------------------------------------------
// The Following is the optimised Solution with O(n) time and O(m) space complexity
// ----------------------------------------------------------------------------------

const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
];

const results = [0, 0, 1];

function tournamentWinner(competitions, results) {
    const currentBestTeam = { name: '', score: 0 }
    const scoresMap = {};

    const updateScore = (team) => {
        if (scoresMap[team] > currentBestTeam.score) {
            currentBestTeam.name = team;
            currentBestTeam.score = scoresMap[team];
        }
    }

    for (let i = 0; i < results.length; i++) {
        if (results[i] === 0) {
            scoresMap[competitions[i][1]] = scoresMap[competitions[i][1]] + 1 || 1;
            updateScore(competitions[i][1]);
        }
        else {
            scoresMap[competitions[i][0]] = scoresMap[competitions[i][0]] + 1 || 1;
            updateScore(competitions[i][0])
        }
    }

    return currentBestTeam.name;

}

console.log(tournamentWinner(competitions, results));
