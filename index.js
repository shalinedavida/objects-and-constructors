//   1.Create a User object with properties like name, stepsWalked (an array of daily steps), 
// and a method totalSteps() that calculates and returns the total number of steps walked. Add another method averageSteps() that returns the average steps per day.

function User(name,stepsWalked){
   this.name=name;
   this.stepsWalked=stepsWalked;
   this.totalSteps= function(){
      let sum = 0
      return stepsWalked.reduce((num, acc)=> acc+num, 0);
   }
   this.averageSteps = function(){
      return this.totalSteps()/this.stepsWalked.length
   }
};
const user= new User('Jenna',[2000,4000,6000,8000]);
console.log({user});
console.log(user.stepsWalked);
console.log(user.totalSteps());
console.log(user.averageSteps());

// 2. Create a Recipe constructor with name, ingredients (array), and cookTime in minutes. 
// Add a method displayRecipe() that logs the name and all ingredients in a readable list, 
// and another method isQuickMeal() that returns true if cookTime is 30 minutes or less.
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
   function Course(title,lessons,completedLessons) {
      this.title = title;
      this.lessons= lessons;
      this.completedLessons=completedLessons;
      this.markComplete= function(lesson){
         this.lessons.unshift(lesson)
         console.log(this.lessons);
         

      }
      this.getProgress = function(){
         return 
      }

      
   }
   const course = new Course ('English',['verbs','nouns','adjectives',],['nouns'])
   console.log(course.title);
   console.log(course.lessons);
   course.markComplete('pronouns');
 

   
   
   






