"use server"
import { cookies } from 'next/headers'
import axios from "axios"
import { redirect } from 'next/navigation'

const base_url_api = "http://localhost:5670"

export async function loginProcess(email: string, password: string) {

    const res = await axios.post(base_url_api + "/auth/login", {
        email: email,
        password: password
    })

    console.log(res)

    cookies().set("authToken", res.data.token)
    redirect("/post")
}

export async function logoutProcess() {
    cookies().delete("authToken")
    redirect("/login")
}

export async function registerProcess(data: any) {


}