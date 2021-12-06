#! /usr/bin/env node
import fetch from "node-fetch";
import open from "open";
import yargs from "yargs";

// console.log(process.argv);
const { argv } = yargs(process.argv);

const res = await fetch("https://www.reddit.com/r/MMA/.json");
const data = await res.json();
const children = data.data.children;

const link = `https://www.reddit.com/r/MMA/`;

if (argv.print) {
  children.forEach((child) => {
    console.log(`
        title: ${child.data.title}
        link: https://reddit.com${child.data.permalink}
        `);
  });
} else {
  open(link);
}
