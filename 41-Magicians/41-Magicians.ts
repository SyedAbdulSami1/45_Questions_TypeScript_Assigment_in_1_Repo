/*41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.*/

const magicians : string[] = ["Bhoothnath", "Jadogar", "Harry Potter", "Ajooba"];

function show_magicians (Array:string[]) {
    let i=0;
    for(const element of Array){
        i++
        console.log(`${i}). ${element}`);
    }
}
show_magicians(magicians);