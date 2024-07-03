"use server"
import { cookies } from 'next/headers'
import axios from "axios"
import { redirect } from 'next/navigation'

export async function loginProcess(email: string, password: string) {
    const res = await axios.post("http://localhost:6570/api/user/login", {
        email: email,
        password: password
    })

    cookies().set("authToken", res.data.token)

    return res
}

export async function logoutProcess() {
    cookies().delete("authToken")
    redirect("/login")
}

export async function registerProcess(data: any) {

    const { name, email, password } = data

    const res = await axios.post("http://localhost:6570/api/user/register", {
        name: name,
        email: email,
        password: password
    })

    return res
}