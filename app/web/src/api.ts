export type User = {
    name: string;
    age: number;
    company: string;
}

export async function getAllUsers(): Promise<User[]> {
    try{
        const response = await fetch('http://localhost:8888/user');
        const { users } = await response.json() as { users: User[] };
        return users;
    } catch(error) {
        console.log(error);
        return [];
    }
}