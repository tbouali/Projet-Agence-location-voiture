// Étape 1 — Créer la classe Vehicle
// Propriétés et constructeur.
// Chaque véhicule possède :
// - brand
// - model
// - year
// - pricePerDay
// - available
class Vehicle {

// etape 10  Déclarer une propriété privée pour protéger le prix
    #pricePerDay;

    // Le constructeur reçoit 5 paramètres
  constructor(brand, model,year,pricePerDay,available) {
    // Initialisation des propriétés
    this.brand = brand;
    this.model = model;
    this.year = year;
     // etape 10 Stocker le prix dans la propriété privée
        this.#pricePerDay = pricePerDay;
    // this.pricePerDay = pricePerDay;
    this.available = available;
  }
// GETTER : récupérer et lire le prix privé etape 10
    get pricePerDay() {
        return this.#pricePerDay;
    }
// SETTER : modifier le prix privé etape10
       set pricePerDay(newPrice) {
    //     // Vérifier que le nouveau prix est positif
        if (newPrice > 0) {
    //         // Modifier le prix privé
            this.#pricePerDay = newPrice;
        } else {
    //         // Afficher un message si le prix est incorrect
            console.log("Le prix doit être positif.");
        }
    }

    // ÉTAPE 11 : Calculer le prix d'une location selon le nombre de jours
    calculateRentalPrice(days) {
        // Vérifier que le nombre de jours est positif
        if (days <= 0) {
            console.log("Le nombre de jours doit être positif.");
            return;
        }
        // Calculer le prix total de la location
        const totalPrice = this.pricePerDay * days;
        // Afficher le prix total
        console.log(`Prix total de la location : ${totalPrice} DH`);
        // Retourner le résultat du calcul
        return totalPrice;
    }
//    displayInfo(){
//  console.log(`brand ${this.brand} ${this.model} ${this.year} ${this.pricePerDay} ${this.available}`);       
//    }
displayInfo() {
    console.log(`brand : ${this.brand}`);
    console.log(`Model : ${this.model}`);
    console.log(`year : ${this.year}`);
     
    console.log(`pricePerDay : ${this.pricePerDay} DH`);
    console.log(`available : ${this.available}`);


}
  rent(){
if (this.available === true) {
        this.available = false;
        console.log("Véhicule loué");
} else {
    console.log("Véhicule non disponible");
}
  }
// if (this.available === true) : vérifie si le véhicule est disponible.
// this.available = false : le véhicule devient indisponible.
// else : si le véhicule est déjà loué, on affiche un message.
returnVehicle(){
if (this.available === false) {
    this.available = true;
    console.log( "véhicule retourné" );
} else {
    console.log("Véhicule déjà disponible");
}

}

}
// Étape 3 — Créer les classes Car et Motorcycle
class Car extends Vehicle {
 constructor(brand, model, year, pricePerDay, available, numberOfDoors) {

        // Appeler le constructeur de Vehicle parent
        super(brand, model, year, pricePerDay, available);

        // Ajouter la propriété spécifique à Car
        this.numberOfDoors = numberOfDoors;
    }
// Overriding : redéfinir displayInfo()
    displayInfo() {
        super.displayInfo();

        console.log(`Nombre de portes : ${this.numberOfDoors}`);
    }
}
      // Créer la classe Motorcycle
class Motorcycle extends Vehicle {
constructor(brand, model, year, pricePerDay, available,engineSize){
    super(brand, model, year, pricePerDay, available);
     this.engineSize = engineSize;
}
// Overriding : redéfinir displayInfo()
    displayInfo() {
        super.displayInfo();

        console.log(`Cylindrée engineSize  : ${this.engineSize}`);
    }
}
// Créer les objets
const car1 = new Car("BMW", "X5", 2024, 300, true, 5);
const moto1 = new Motorcycle("Yamaha", "MT-07", 2024, 200, true, "689 cc");
// Tester le polymorphisme
console.log("VOITURE");
car1.displayInfo();
console.log("MOTO");
moto1.displayInfo();
// Étape 5 — Créer plusieurs véhicules
// Les objets car1 et moto1 existent déjà.
// Créer une deuxième voiture
const car2 = new Car("Dacia", "Duster", 2023, 250, true, 5);
// Créer une deuxième moto
const moto2 = new Motorcycle("Honda", "CB500", 2022, 180, true, "500 cc");
// Créer un tableau avec les quatre véhicules
const vehicles = [car1, moto1, car2, moto2];
// Afficher tous les véhicules
for (const vehicle of vehicles) {
    vehicle.displayInfo();
}
// ÉTAPE 6 : créer la classe RentalAgency
class RentalAgency {
    constructor(name) {
        this.name = name;
        this.vehicles = [];
    }
// ÉTAPE 7 : Méthodes de RentalAgency
    // 1. Ajouter un véhicule
    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }
    // 2. Afficher tous les véhicules
    displayVehicles() {
        for (const vehicle of this.vehicles) {
            vehicle.displayInfo();
        }
    }
    // 3. Afficher les véhicules disponibles
    displayAvailableVehicles() {
        for (const vehicle of this.vehicles) {
            if (vehicle.available === true) {
                vehicle.displayInfo();
            }
        }
    }
    // 4. Rechercher par marque
    searchVehicle(brand) {
        for (const vehicle of this.vehicles) {
            if (vehicle.brand.toLowerCase() === brand.toLowerCase()) {
                vehicle.displayInfo();
            }
        }
    }

    // ÉTAPE 8 : Gérer les locations
    // 1. Louer un véhicule selon son modèle
    rentVehicle(model) {
        for (const vehicle of this.vehicles) {

            // Vérifier si le modèle correspond
            if (vehicle.model === model) {

                // Appeler la méthode rent() du véhicule
                vehicle.rent();
                return;
            }
        }
        console.log("Véhicule introuvable");
    }
    // 2. Retourner un véhicule selon son modèle
    returnVehicle(model) {
        for (const vehicle of this.vehicles) {

            // Vérifier si le modèle correspond
            if (vehicle.model === model) {

                // Appeler la méthode returnVehicle() du véhicule
                vehicle.returnVehicle();
                return;
            }
        }

        console.log("Véhicule introuvable");
    }

}
// Créer une agence
const agency1 = new RentalAgency("AutoRent");
// Ajouter les véhicules déjà créés à l'agence
agency1.vehicles.push(car1);
agency1.vehicles.push(moto1);
agency1.vehicles.push(car2);
agency1.vehicles.push(moto2);
// Vérifier le résultat
console.log("Nom de l'agence :", agency1.name);
console.log("Nombre de véhicules :", agency1.vehicles.length);
// TEST 1 : addVehicle()
const car3 = new Car("Renault", "Clio", 2023, 220, true, 5);
agency1.addVehicle(car3);
console.log("Nombre de véhicules :", agency1.vehicles.length);
// TEST 2 : displayVehicles()
console.log(" TOUS LES VÉHICULES ");
agency1.displayVehicles();
// TEST 3 : displayAvailableVehicles()
car1.rent();
console.log("VÉHICULES DISPONIBLES ");
agency1.displayAvailableVehicles();
// TEST 4 : searchVehicle()
console.log("RECHERCHER BMW ");
agency1.searchVehicle("BMW");
// TEST 1 : Louer la BMW X5
console.log(" LOUER LA BMW ");
agency1.rentVehicle("X5");
// TEST 2 : Essayer de louer encore la BMW
console.log(" REL0UER LA BMW ");
agency1.rentVehicle("X5");
// TEST 3 : Retourner la BMW
console.log("RETOURNER LA BMW ");
agency1.returnVehicle("X5");
// TEST 4 : Vérifier sa disponibilité
console.log("Disponibilité de la BMW :", car1.available);

    // ÉTAPE 9 : TESTER L'APPLICATION COMPLÈTE
    // TEST 1 : Afficher le nombre de véhicules
    console.log(" TEST 1 : NOMBRE DE VÉHICULES ");
    console.log(agency1.vehicles.length);
    // TEST 2 : Afficher tous les véhicules
    console.log(" TEST 2 : TOUS LES VÉHICULES ");
    agency1.displayVehicles();
    // TEST 3 : Afficher uniquement les véhicules disponibles
    console.log("TEST 3 : VÉHICULES DISPONIBLES ");
    agency1.displayAvailableVehicles();
    // TEST 4 : Rechercher un véhicule par marque
    console.log(" TEST 4 : RECHERCHER BMW ");
    agency1.searchVehicle("BMW");
    // TEST 5 : Ajouter un nouveau véhicule
    console.log("TEST 5 : AJOUTER UN VÉHICULE");
    const carTest = new Car("Audi", "A3", 2024, 300, true, 5);
    agency1.addVehicle(carTest);
    console.log("Nombre de véhicules :", agency1.vehicles.length);
    // TEST 6 : Louer un véhicule disponible
    console.log("TEST 6 : LOUER UN VÉHICULE ");
    agency1.rentVehicle("A3");
    // TEST 7 : Empêcher de louer un véhicule déjà loué
    console.log(" TEST 7 : DEUXIÈME LOCATION ");
    agency1.rentVehicle("A3");
    // TEST 8 : Retourner un véhicule
    console.log(" TEST 8 : RETOURNER UN VÉHICULE");
    agency1.returnVehicle("A3");
    console.log("Disponibilité :", carTest.available);
    // TEST 9 : Afficher plusieurs types de véhicules
    // avec la même méthode displayInfo()
    console.log(" TEST 9 : POLYMORPHISME ");

    for (const vehicle of agency1.vehicles) {
        vehicle.displayInfo();
    }
    // TEST 10 : Rechercher un véhicule inexistant
    console.log("TEST 10 : VÉHICULE INTROUVABLE");
    agency1.rentVehicle("Ferrari");
    // Lire le prix
 console.log(car1.pricePerDay);
  // Modifier le prix
   car1.pricePerDay = 350;
   // Afficher le nouveau prix
  console.log(car1.pricePerDay);
   // Tester un prix négatif
   car1.pricePerDay = -100;
   // Vérifier le prix
   console.log(car1.pricePerDay);
    // TEST 1 : Louer la BMW pendant 5 jours
   console.log("LOCATION BMW");
   car1.calculateRentalPrice(5);
   // TEST 2 : Louer la moto pendant 3 jours
   console.log("LOCATION MOTO");
  moto1.calculateRentalPrice(3);
  // TEST 3 : Nombre de jours incorrect
  console.log("TEST NOMBRE DE JOURS");
     car1.calculateRentalPrice(-2);
  








// const car1 = new Car("BMW", "X5", 2024, 300, true, 5);
// const moto1 = new Motorcycle("Yamaha", "MT-07", 2024, 200, true, "689 cc");
// console.log(car1);
// console.log(moto1);

// création du premier véhicule :
// - Marque : BMW
// - Modèle : X5
// - Année : 2024
// - Prix par jour : 300
// - Disponible : true
// Création d'une instance
// const car1 = new Vehicle("BMW","X5",2024,300,true);
// car1.displayInfo();
// car1.rent();
// console.log(car1.available);
// car1.returnVehicle();
// console.log(car1.available);
 // Affichage de l'objet
//   console.log(car1);
//   car1.displayInfo();
//    car1.rent();
//    car1.returnVehicle();
