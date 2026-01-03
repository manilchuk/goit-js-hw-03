function slugify(title) {
  const arrayTitle = title.toLowerCase().trim().split(' ');
  const newArray = [];
  for (let i = 0; i < arrayTitle.length; i++) {
    if (arrayTitle[i].length > 0) {
      newArray.push(arrayTitle[i]);
    }
  }
  const slug = newArray.join('-');
  return slug;
}

console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
