const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

let states = ['SP', 'RJ', 'PR', 'RS']

function showCities() {
    for (const i of states) {
        console.log(i)
        core.notice(i)
    }
    core.notice('Hello Everyone!')
}

showCities()

