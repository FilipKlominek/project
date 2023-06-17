export class Game {
    constructor(id: number, name: string, description: string, price: number, sale: number, publisher: string, developer: string, releaseDate: string, genres: string[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.sale = sale;
        this.publisher = publisher;
        this.developer = developer;
        this.releaseDate = releaseDate;
        this.genres = genres;
    }

    id: number;
    name: string;
    description: string;
    price: number;
    sale: number;
    publisher: string;
    developer: string;
    releaseDate: string;
    genres: string[];
}