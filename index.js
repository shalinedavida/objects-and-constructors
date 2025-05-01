//   1.Create a User object with properties like name, stepsWalked (an array of daily steps), 
// and a method totalSteps() that calculates and returns the total number of steps walked. Add another method averageSteps() that returns the average steps per day.
// Pseudocode.
// Create an object user .
// Add the attributes which are the name and stepsWalked.
// add a method totalSteps() which has an anonymus function .
// Declare a variable sum and iterate through the array to print out the summation of total steps walked.
// Create a method to calculate the average of the total steps taken which is done by dividing the summation of total steps taken to the lenyth of the stepswalked array.
 const user={
      name:'Jenna',
      stepsWalked :[2000,4000,6000,8000],

   totalSteps :function(){
      let sum =0
       for(let i=0;i < user.stepsWalked.length;i++){
         sum += user.stepsWalked[i].steps
        return sum 
   
      }
   },
   averageSteps :function(){
      return this.totalSteps()/this.stepsWalked.length
   }
};
console.log(user.name);
console.log(user.stepsWalked);
user.totalSteps();
user.averageSteps();

// 2. Create a Recipe constructor with name, ingredients (array), and cookTime in minutes. 
// Add a method displayRecipe() that logs the name and all ingredients in a readable list, 
// and another method isQuickMeal() that returns true if cookTime is 30 minutes or less.
// Pseudocode.
// create  a function Recipe that has the properties name,ingredients,cookTime.
// add the method that displays the name and ingredients passed in your anonymus function .
// iterate through the ingredients array using a forEach loop to log out the elements in the array.
// create another method that uses the if else loop to print out the minutes that meets the condition needed.
// log  out your output.
function Recipe(name,ingredients,cookTime){
   this.name=name;
   this.ingredients=ingredients;
   this.cookTime=cookTime;
   this.displayRecipe=function () {
      console.log(`The ${this.name}`);
         console.log('Ingredients:');

         this.ingredients.forEach(ingredient =>{
            console.log(`- ${ingredient}`);
         });
      
   }
   this.isQuickMeal =function(){
      if(cookTime<=30){
         return true
      }
      else{
         false
      }
   }
};

const recipe = new Recipe('Maandazi',['Salt','Sugar','Dough','Oil'],25);
console.log({recipe});
console.log(recipe.ingredients);
console.log(recipe.cookTime);
console.log(recipe.displayRecipe());
console.log(recipe.isQuickMeal());

// 3. Create a Car object with properties like model, mileage, and serviceHistory (an array of service dates). 
// Add a method addService(date) to add a new service record, and lastServiceDate() to return the most recent service date.
// create a car object that takes in the model,mileage and serviceHistory properties.
// use the push() method to add elements date  to the end of the serviceHistory array.
// use the pop() method to return the last date in the array, which is the recent date .
// log out to get the output.
function Car(model, mileage, serviceHistory){
   this.model= model;
   this.mileage= mileage;
   this.serviceHistory= serviceHistory;
   this.addService=function (service){
      this.serviceHistory.push(service)
      console.log(this.serviceHistory);
      
    
    
   }
   this.lastServiceDate=function(){
      return this.serviceHistory.pop()
   }
}
const car= new Car ('Mercedes Benz',20000,['10/7/2024','5/12/2024','16/1/2025','12/2/2025']);
console.log({car});
console.log(car.model);
console.log(car.mileage);
car.addService('12/12/2024');
console.log(car.lastServiceDate());


// 4.Create a Playlist object with a property songs (an array of song titles). 
// Add methods addSong(title) to add a song, removeSong(title) to delete one, and listSongs() to log all songs currently in the playlist.
// Pseudocode.
// create an object playlist using the const variable.
// add the songs which is an array properties and a method addSong .
// use the push() method to add songs to the end of the songs array.
// to remove a song from the array use the pop() method to remove the last song element or the shift() method to remove the first song element.
// add the last method that logs out the songs in the current array of the songs array by using the array length.
 
 const playlist ={
   songs:['Dumebi','Awolo','Extra Pressure','Arike'],
   addSong:function(song) {
       this.songs.push(song)
       console.log(playlist.songs);
       
      
   },
   removeSong:function(){
       return this.songs.pop()


   },
   listSongs:function(){
      console.log(`${this.songs}`);
      
   }
 }
 console.log(playlist.songs);
 playlist.addSong('Dior');
  console.log(playlist.removeSong());
 playlist.listSongs();

 
// 5. Create a Course constructor with title, lessons (an array), and completedLessons (array). 
// Add a method markComplete(lesson) that adds the lesson to completedLessons, and a method getProgress() that returns a string like "3 out of 5 lessons completed".
// Pseudocode.
// create a course constructor using the function constructor that takes in the title,lessons,and completedlessons.
// create a method markcomplete that takes in a lesson .Using the unshift() method add a lesson to the beggining of  the array.
// create a method that return the string of the lessons completed out of the lessons by creating a variable for the length of the completedlessons array and a variable for all the lesson array.
// log out the output.
   function Course(title,lessons,completedLessons) {
      this.title = title;
      this.lessons= lessons;
      this.completedLessons=completedLessons;
      this.markComplete= function(lesson){
         this.lessons.unshift(lesson)
         console.log(this.lessons);
         

      }
      this.getProgress = function(){
         let  completelesson = this.completedLessons.length;
         let lesson=this.lessons.length;
         return (`${completelesson} out of ${lesson}completed`)
      }
      
   }
   const course = new Course ('English',['verbs','nouns','adjectives',],['nouns'])
   console.log(course.title);
   console.log(course.lessons);
   course.markComplete('pronouns');
   course.getProgress();
 

   
   
   






