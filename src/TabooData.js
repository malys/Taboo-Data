const data={}
data.animals = {}
data.cars = {}
data['city-country'] = {}
data.food = {}
data.literature = {}
data.people = {}
data.sports = {}
data.things = {}
data.tv = {}
data.web = {}
const categories = require('./data/categories.json');

data.animals.de = require('./data/de/animals.json');
data.cars.de = require('./data/de/cars.json');
data['city-country'].de = require('./data/de/city-country.json');
data.food.de = require('./data/de/food.json');
data.literature.de = require('./data/de/literature.json');
data.people.de = require('./data/de/people.json');
data.sports.de = require('./data/de/sports.json');
data.things.de = require('./data/de/things.json');
data.tv.de = require('./data/de/tv.json');
data.web.de = require('./data/de/web.json');

data.animals.fr = require('./data/fr/animals.json');
data.cars.fr = require('./data/fr/cars.json');
data['city-country'].fr = require('./data/fr/city-country.json');
data.food.fr = require('./data/fr/food.json');
data.literature.fr = require('./data/fr/literature.json');
data.people.fr = require('./data/fr/people.json');
data.sports.fr = require('./data/fr/sports.json');
data.things.fr = require('./data/fr/things.json');
data.tv.fr = require('./data/fr/tv.json');
data.web.fr = require('./data/fr/web.json');

export default class TabooData {

  static categoryImports(language) {
    let result = {}
    let keys = Object.keys(categories[language])
    keys.forEach(key => {
      try{
        result[key] =  data[key][language];
      }catch(e){
        console.error(e)
      }
      
    });
    return result;
  };

  static categories() {
    return categories;
  };

  static getCategory(category, language) {
    if (typeof this.categoryImports(language)[category] === 'undefined') {
      return null;
    }

    return this.categoryImports(language)[category];
  }
}
