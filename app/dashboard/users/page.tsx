import endpoints from "@/app/api/user.api";

type User = {
    id: number,
    applicationId: string,
    dni: string,
    username: string
    email: string,
    creationDate: string
}

type Response = {
    items: User[],
    totalCount: number,
    pageNumber: number,
    totalPages: number
}

export default async function Page(){
    //let response = await endpoints.getUsers();

    //response.data as Response;
    //let username = response.data.items[5].username;

    return <p>{'username'}</p>
}