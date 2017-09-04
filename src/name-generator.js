import { djNames } from './list';

const getRandomInt = (min, max) => {
    const mn = Math.ceil(min);
    const mx = Math.floor(max);

    //The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (mx - mn)) + mn;
};

const concatResults = (a, b) => `${a} ${b}`;

const nameGenerator = () => {
    const arrLength = djNames.length;

    const a = getRandomInt(0, arrLength);
    const b = getRandomInt(0, arrLength);

    const n = djNames[a];
    const m = djNames[b];

    return concatResults(n, m);
};

export default nameGenerator;
