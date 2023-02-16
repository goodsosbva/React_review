const str = "test test test";

function skippinRope(input) {
    const cnt = str.length % 4;
    for (let i = 0; i < cnt; i++) {
        console.log(input.substr(1 * i, 4 * (i + 1)))
    }
    return 'end'
}

console.log(skippinRope(str));

