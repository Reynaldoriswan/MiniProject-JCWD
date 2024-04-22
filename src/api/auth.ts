"use server"
import { cookies } from 'next/headers'
import axios from "axios"
import { redirect } from 'next/navigation'

export async function loginProcess(email: string, password: string) {
    const res = await axios.post("http://localhost:6570/api/auth/login", {
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

}