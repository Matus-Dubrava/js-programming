const profile = {
    name: 'Alex',
    age: 20,
    coords: {
        lat: 0,
        lon: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
};

// annotations with object destructuring
const { age, name }: { age: number; name: string } = profile;
const {
    coords: { lat, lon }
}: { coords: { lat: number; lon: number } } = profile;
