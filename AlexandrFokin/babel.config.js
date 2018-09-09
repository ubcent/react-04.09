const presets = [
    ["@babel/preset-env", {
        targets: {
            edge: "17",
            firefox: "62",
            chrome: "69",
            safari: "11.1"
        },
        useBuiltIns: "usage"
    }]
];

module.exports = { presets };