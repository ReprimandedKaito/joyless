//@ts-check

const getYtsPoster = require("./posters/getYtsPoster");
const getTmbdPoster = require('./posters/getTmbdPoster');
const getMalPoster = require('./posters/getMalPoster');

(async function test() {
    // The Shining
    console.log(await getYtsPoster('tt0081505'));

    // ---

    // Electric Dreams
    console.log(await getTmbdPoster('tt5711280'));
    // Mortal Engines
    console.log(await getTmbdPoster('tt1571234'));
    
    // ---

    // Cyberpunk: Edgerunners
    console.log(await getMalPoster('anime', '42310'));
    // Ajin
    console.log(await getMalPoster('manga', '49865'));
})();
