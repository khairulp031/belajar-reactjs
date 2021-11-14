import axios from "axios";
import { ActionType } from '../base/hooks/reducer'

const config = {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
    timeout: 60000,
}
const service = axios.create(config)

export const getToken = async (dispatch) => {
    const response = await service.get("/api/v1/login/createtoken")
    dispatch({ type: ActionType.SET_CSRF, data: { csrf: response.data.uuid } })
    service.defaults.headers.common['csrf'] = `${response.data.uuid}`;
}

export const postLogin = async (data) => {
    const response = await service.post("/api/v1/login", data)
    return response;
}

export const logout = async (dispatch) => {
    const response = await service.delete("/api/v1/login")
    dispatch({ type: ActionType.SET_CSRF, data: { csrf: response.data.uuid } })
    dispatch({ type: ActionType.SET_USER, data: { user: {} } })
    service.defaults.headers.common['csrf'] = `${response.data.uuid}`;
    return response;
}

export const postSekolah = async (data) => {
    const response = await service.post("/api/v1/sekolah", data)
    return response;
}