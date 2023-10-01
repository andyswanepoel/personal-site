const path = require("path");
const fs = require("fs");

const cssDirectory = "/styles";

const readFiles = (dirPath = "") => {
  const baseDirectory = path.join(__dirname, "client/styles");
  return fs
    .readdirSync(`${baseDirectory}/${dirPath}`)
    .map(file => {
      if (fs.statSync(`${baseDirectory}/${dirPath}/${file}`).isDirectory()) {
        return readFiles(`${dirPath ? dirPath + "/" + file : "/" + file}`);
      }
      if (file[0] === "_") {
        return;
      }
      if (file.includes("__critical")) {
        return `<link rel="stylesheet" href="${cssDirectory}${dirPath}/${file.replace(
          ".scss",
          ".css"
        )}">`;
      }

      return `
        <link 
          rel="preload" 
          href="${cssDirectory}${dirPath}/${file.replace(".scss", ".css")}" 
          as="style"
          onload="this.rel='stylesheet';this.removeAttribute('as');this.removeAttribute('onload');">
        <noscript>
          <link rel="stylesheet" href="${cssDirectory}${dirPath}/${file.replace(
        ".scss",
        ".css"
      )}">
        </noscript>

      
      `;
    })
    .join("\n");
};

module.exports = eleventyConfig => {
  eleventyConfig.addShortcode("styles", () => readFiles());
  eleventyConfig.addFilter("titlecase", value =>
    value
      .split(" ")
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ")
  );
  eleventyConfig.addFilter("kebab", value => value.split(" ").join("-"));

  eleventyConfig.addPassthroughCopy({ "./client/img": "img" });
  eleventyConfig.addWatchTarget("./client/styles/");
  eleventyConfig.addWatchTarget("./client/scripts/");
  return {
    dir: {
      input: "client/pages",
      output: "client/dist",
      layouts: "../_layouts",
      includes: "../_includes",
      data: "../_data"
    }
  };
};
