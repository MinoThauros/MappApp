export type Location={
    lat:number,
    lng:number
}

type ExtendedLocation=Location & {address:string}

export type PlaceProp={
    title:string,
    imageUri:string,
    address:string,
    location:Location,
    id:string
}

export class Place implements PlaceProp{
    title:string;
    imageUri:string;
    address:string;
    location:Location;
    readonly id:string
    

    constructor(
        title:string,
        imageUri:string,
        location:ExtendedLocation,
    ){
        this.title=title;
        this.imageUri=imageUri;
        this.address=location.address;
        this.location={lat:location.lat,lng:location.lng};
        this.address=location.address;
        this.id= new Date().toString()+Math.random().toString()

    }
}