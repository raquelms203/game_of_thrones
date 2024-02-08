export class Character {
    id: number = 0;
    name: string = '';
    title: string = '';
    family: string = '';
    image: string = '';

    constructor(id: number,
        name: string,
        title: string,
        family: string,
        image: string
    ) {
        this.family = family;
        this.id = id;
        this.image = image;
        this.title = title;
        this.name = name;
    }
}

