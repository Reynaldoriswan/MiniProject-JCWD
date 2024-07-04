"use server"
import axios from "axios"
import * as jose from "jose"
import { redirect } from 'next/navigation'
import { cookies } from "next/headers"
const base_api = "http://localhost:5670"

const authToken = cookies().get("authToken")?.value as any

export async function getAllPosts() {
    const res = await axios.get(base_api + "/post")
    return res
}

export async function createPost(params: any) {
    const session = await jose.jwtVerify(authToken, new TextEncoder().encode("mySecretAcademia"))
    console.log("session => ", session)
    const res = await axios.post(base_api + "/post", {
        title: params.title,
        body: params.body,
        user_id: session.payload.id
    }, {
        headers: {
            Authorization: "Bearer " + authToken
        }
    })

    redirect("/post")
}