import { core } from '@actions/core';
import { github } from '@actions/github';
import { exec } from '@actions/exec';

let states = ['SP', 'RJ', 'PR', 'RS']

function showCities() {
    for (const i of states) {
        console.log(i)
        core.notice(i)
    }
    core.notice('Hello Everyone!')
}

showCities()

